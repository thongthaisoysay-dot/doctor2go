import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

import {
  getFunctions,
  httpsCallable,
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-functions.js";

//เปรียบเหมือนบัตรประชาชนของ App
const firebaseConfig = {
  apiKey: "AIzaSyCxgm57abKPktxBObHit1CUH80gjNtDY4s",
  authDomain: "doctor2go-725a4.firebaseapp.com",
  projectId: "doctor2go-725a4",
  storageBucket: "doctor2go-725a4.firebasestorage.app",
  messagingSenderId: "1066125809000",
  appId: "1:1066125809000:web:88c609ac2e1f5e9094b2dd",
};

//เปิดใช้ Firebase โดยใช้ firebaseConfig  พอได้เก็บไว้ใน ----> firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
//ขอระบบ Login ของ firebaseAppนี้ พอได้เอามาเก็บไว้ที่ตัวแปร ----> auth
const auth = getAuth(firebaseApp);
//แปลว่า ขอ Database ของ firebaseApp นี้ ค่าที่ได้เก็บไว้ใน ----> db
const db = getFirestore(firebaseApp);

const functions = getFunctions(firebaseApp);

const completeRegistration = httpsCallable(functions, "completeRegistration");

//เอาไว้เก็บรหัสประจำตัวของ Liff App
const LIFF_ID = "2010746451-zVL3e0wH";

const DOCTOR2GO_PHONE = "0856630663";

const getMyProfile = httpsCallable(functions, "getMyProfile");
const createInvite = httpsCallable(functions, "createInvite");
const claimInvite = httpsCallable(functions, "claimInvite");

const roleLabels = {
  admin: "Account Owner",
  member: "Household Member",
};

async function main() {
  await liff.init({ liffId: LIFF_ID });

  if (!liff.isLoggedIn()) {
    liff.login();
    return;
  }

  userProfile = await liff.getProfile();

  const lineIdToken = liff.getIDToken();
  const profileResponse = await getMyProfile({
    lineIdToken: lineIdToken,
  });
  console.log(profileResponse);

  //อ่านว่า "เอา profileResponse → เปิดกล่อง .data → เปิดกล่อง .success ข้างใน → เอาค่า true/false นั้นมาเช็ค"
  if (profileResponse.data.success) {
    document.getElementById("step-myprofile").style.display = "flex";
    document.getElementById("status").textContent =
      `Hello, ${userProfile.displayName}`;
    document.getElementById("profile-name").textContent =
      profileResponse.data.profile.name;
    document.getElementById("profile-category").textContent =
      profileResponse.data.profile.category;
    document.getElementById("profile-companyname").textContent =
      profileResponse.data.profile.companyName;
    document.getElementById("profile-email").textContent =
      profileResponse.data.profile.email;
    document.getElementById("profile-line-user-id").textContent =
      profileResponse.data.profile.lineUserId;
    document.getElementById("profile-member-code").textContent =
      profileResponse.data.profile.memberCode;
    document.getElementById("profile-member-type").textContent =
      profileResponse.data.profile.memberType;

    if (profileResponse.data.profile.memberType === "individual") {
      document.getElementById("profile-role").style.display = "none";
    } else {
      document.getElementById("profile-role").textContent =
        roleLabels[profileResponse.data.profile.role] || "";
      if (profileResponse.data.profile.role === "admin") {
        document.getElementById("btn-invite-member").style.display = "block";
      }
    }

    document.getElementById("profile-Phone-user-number").textContent =
      profileResponse.data.profile.phone;
    document.getElementById("profile-payment-Schedule").textContent =
      profileResponse.data.profile.paymentSchedule;
    const createdAtDate = new Date(
      profileResponse.data.profile.createdAt._seconds * 1000,
    );
    document.getElementById("profile-createdAt").textContent =
      createdAtDate.toLocaleDateString("en-US");
  } else {
    document.getElementById("status").textContent =
      `Hello, ${userProfile.displayName}`;

    const urlParams = new URLSearchParams(location.search);
    inviteToken = urlParams.get("invite");

    if (inviteToken) {
      document.getElementById("input-invite-name").value =
        userProfile.displayName;
      document.getElementById("step-invite").style.display = "block";
    } else {
      document.getElementById("step1").style.display = "flex";
    }
  }
}

main();

let memberType = null;
let userProfile = null;
let confirmationResult = null;
let corporateMode = null;
let inviteToken = null;

document
  .getElementById("btn-individual")
  .addEventListener("click", function () {
    memberType = "individual";
    console.log(memberType);
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
    document.getElementById("input-name").value = userProfile.displayName;
    document.getElementById("input-category").innerHTML =
      "<option>Licensed Guide</option><option>Tour Leader</option><option>Travel Coordinator</option><option>Transportation</option><option>Hotel</option><option>Other</option>";
    document.getElementById("step2-title").textContent = "Your information";
  });
document.getElementById("btn-corporate").addEventListener("click", function () {
  memberType = "corporate";
  corporateMode = "create";
  console.log(memberType);
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
  document.getElementById("input-name").value = userProfile.displayName;
  document.getElementById("input-company-name").style.display = "block";
  document.getElementById("input-email").placeholder = "Company email";
  document.getElementById("input-category").innerHTML =
    "<option>Tour Company</option><option>Travel Agency</option><option>DMC</option><option>Hotel</option><option>Transportation</option><option>Other</option>";
});

//ตัวช่วยส่ง OTP ให้เบอร์ phoneNumber ใช้ร่วมกันทั้งฟอร์มสมัครปกติ (step2) และฟอร์มรับเชิญ (step-invite)
async function sendOtp(phoneNumber) {
  //ตัดตัวอักษรแรกทิ้ง (ตัด 0 ออก) เหลือ 812345678 เอาไปต่อท้าย +66 ด้วยเครื่องหมาย +
  const formattedPhone = "+66" + phoneNumber.slice(1);
  //สร้างตัวจับบอทขึ้นมา1ชิ้น จากพิมพ์เขียว RecaptchaVerifierที่ firebase เตรียมไว้ให้ ต้องบอก3อย่าง "1 ใช้กับ authไหน "  "2 จะเอาไปแปะไหน"
  const recaptchaVerifier = new RecaptchaVerifier(
    auth,
    "recaptcha-container",
    { size: "invisible" },
  );

  //สั่งให้ Firebase ส่ง SMS OTP จริง ไปที่เบอร์ formattedPhone โดยผ่านการตรวจสอบของ recaptchaVerifier ก่อน (กันบอทสแปม)
  confirmationResult = await signInWithPhoneNumber(
    auth,
    formattedPhone,
    recaptchaVerifier,
  );
}

document
  .getElementById("btn-step2-next")
  .addEventListener("click", async function () {
    try {
      const phoneNumber = document.getElementById("input-phone").value;
      await sendOtp(phoneNumber);
      document.getElementById("step2").style.display = "none";
      document.getElementById("step3").style.display = "block";
    } catch (error) {
      console.log(error);
    }
  });

document
  .getElementById("btn-invite-next")
  .addEventListener("click", async function () {
    try {
      const phoneNumber = document.getElementById("input-invite-phone").value;
      await sendOtp(phoneNumber);
      document.getElementById("step-invite").style.display = "none";
      document.getElementById("step3").style.display = "block";
    } catch (error) {
      console.log(error);
    }
  });

document
  .getElementById("btn-verify-otp")
  .addEventListener("click", async function () {
    try {
      // สร้างตปotpCode ให้ข้อมูลที่พิมพ์มาเก็บไว้ใน ตปotpCode
      const otpCode = document.getElementById("input-otp").value;
      //หลังจากผู้ใช้งานกด ยืนยัน ดึงรหัส OTP ที่พิม (otpCode)ส่งไปเช็คกับFirebase ถ้าถูกจะได้ผู้ใช้ที่ยืนยันเบอร์แล้วเก็บไว้ใน result แต่หากผิดจะจับ catch
      const result = await confirmationResult.confirm(otpCode);
      const lineIdToken = liff.getIDToken();

      let response;
      if (inviteToken) {
        //มาจากการกดลิงก์เชิญ — ไม่ผ่าน completeRegistration แต่ไปผูกเข้าบริษัทที่มีอยู่แล้วผ่าน claimInvite แทน
        response = await claimInvite({
          inviteToken: inviteToken,
          name: document.getElementById("input-invite-name").value,
          lineIdToken: lineIdToken,
        });
      } else {
        const formData = {
          //มาจากตัวแปร JS ที่มีอยู่แล้ว เช่น memberType: memberType, — เอาค่าตัวแปรที่ประกาศไว้ข้างบนมาใส่ตรงๆ
          memberType: memberType,
          //มาจากค่าที่ผู้ใช้พิมพ์ในกล่อง input เช่น companyName: document.getElementById("input-company-name").value, — ไปหยิบค่าจาก element ที่มี id นั้นๆ
          name: document.getElementById("input-name").value,
          category: document.getElementById("input-category").value,
          email: document.getElementById("input-email").value,
          companyName: document.getElementById("input-company-name").value,
          corporateMode: corporateMode,
        };
        response = await completeRegistration({
          ...formData,
          lineIdToken: lineIdToken,
        });
      }

      if (response.data.success) {
        document.getElementById("step3").style.display = "none";
        document.getElementById("step4").style.display = "block";
        document.getElementById("result-member-code").textContent =
          "Member Code: " + response.data.memberCode;

        if (inviteToken) {
          document.getElementById("result-member-type").textContent =
            "Member Type: Household Member";
        } else {
          document.getElementById("result-member-type").textContent =
            "Member Type: " + memberType;
          document.getElementById("result-payment-schedule").textContent =
            "Payment Schedule: " +
            (memberType === "corporate"
              ? "Monthly Settlement"
              : "Within 24 Hours");
        }
      } else {
        alert(
          "Reason: " +
            response.data.reason +
            "/" +
            JSON.stringify(response.data.lineData),
        );
      }
    } catch (error) {
      console.log(error);
    }
  });

document
  .getElementById("btn-save-contact")
  .addEventListener("click", async function () {
    document.getElementById("doctor2go-phone").textContent = DOCTOR2GO_PHONE;
    document.getElementById("doctor2go-phone").style.display = "block";
    document.getElementById("link-call").href = "tel:" + DOCTOR2GO_PHONE;
    document.getElementById("link-call").style.display = "block";
    await navigator.clipboard.writeText(DOCTOR2GO_PHONE);
    alert("Doctor2Go number copied");
  });

document
  .getElementById("btn-invite-member")
  .addEventListener("click", async function () {
    try {
      const lineIdToken = liff.getIDToken();
      const response = await createInvite({ lineIdToken: lineIdToken });

      if (response.data.success) {
        const inviteLink = `https://liff.line.me/${LIFF_ID}?invite=${response.data.inviteToken}`;
        document.getElementById("invite-link").textContent = inviteLink;
        document.getElementById("invite-link").style.display = "block";
        await navigator.clipboard.writeText(inviteLink);
        alert("Invite link copied. Send it to your new member.");
      } else {
        alert("Could not create an invite link: " + response.data.reason);
      }
    } catch (error) {
      console.log(error);
    }
  });
