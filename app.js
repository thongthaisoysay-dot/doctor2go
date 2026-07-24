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
      `สวัสดี ${userProfile.displayName}`;
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
      document.getElementById("profile-company-code").style.display = "none";
    }

    document.getElementById("profile-role").textContent =
      profileResponse.data.profile.role;
    document.getElementById("profile-company-code").textContent =
      profileResponse.data.profile.companyCode;

    document.getElementById("profile-Phone-user-number").textContent =
      profileResponse.data.profile.phone;
    document.getElementById("profile-payment-Schedule").textContent =
      profileResponse.data.profile.paymentSchedule;
    const createdAtDate = new Date(
      profileResponse.data.profile.createdAt._seconds * 1000,
    );
    document.getElementById("profile-createdAt").textContent =
      createdAtDate.toLocaleDateString("th-TH");
  } else {
    document.getElementById("status").textContent =
      `สวัสดี ${userProfile.displayName}`;
    document.getElementById("step1").style.display = "flex";
  }
}

main();

let memberType = null;
let userProfile = null;
let confirmationResult = null;
let corporateMode = null;

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
    document.getElementById("step2-title").textContent = "ข้อมูลของคุณ";
  });
document.getElementById("btn-corporate").addEventListener("click", function () {
  memberType = "corporate";
  console.log(memberType);
  document.getElementById("step1").style.display = "none";
  document.getElementById("step1b").style.display = "flex";
});

document
  .getElementById("btn-create-company")
  .addEventListener("click", function () {
    corporateMode = "create";
    document.getElementById("step1b").style.display = "none";
    document.getElementById("step2").style.display = "block";
    document.getElementById("input-name").value = userProfile.displayName;
    document.getElementById("input-company-name").style.display = "block";
    document.getElementById("input-category").innerHTML =
      "<option>Tour Company</option><option>Travel Agency</option><option>DMC</option><option>Hotel</option><option>Transportation</option><option>Other</option>";
  });
document
  .getElementById("btn-join-company")
  .addEventListener("click", function () {
    corporateMode = "join";
    document.getElementById("step1b").style.display = "none";
    document.getElementById("step2").style.display = "block";
    document.getElementById("input-name").value = userProfile.displayName;
    document.getElementById("input-category").style.display = "none";

    document.getElementById("input-company-code").style.display = "block";
  });

document
  .getElementById("btn-step2-next")
  .addEventListener("click", async function () {
    try {
      //ดึงข้อความที่ผู้ใช้พิมพ์ในช่องกรอกเบอร์โทรเช่น "0812345678" มาเก็บไว้ในตัวแปร phoneNumber
      const phoneNumber = document.getElementById("input-phone").value;
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
      document.getElementById("step2").style.display = "none";
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
      const formData = {
        //มาจากตัวแปร JS ที่มีอยู่แล้ว เช่น memberType: memberType, — เอาค่าตัวแปรที่ประกาศไว้ข้างบนมาใส่ตรงๆ
        memberType: memberType,
        //มาจากค่าที่ผู้ใช้พิมพ์ในกล่อง input เช่น companyName: document.getElementById("input-company-name").value, — ไปหยิบค่าจาก element ที่มี id นั้นๆ
        name: document.getElementById("input-name").value,
        category: document.getElementById("input-category").value,
        email: document.getElementById("input-email").value,
        companyName: document.getElementById("input-company-name").value,
        corporateMode: corporateMode,
        companyCode: document.getElementById("input-company-code").value,
      };
      const lineIdToken = liff.getIDToken();

      const response = await completeRegistration({
        ...formData,
        lineIdToken: lineIdToken,
      });

      if (response.data.success) {
        document.getElementById("step3").style.display = "none";
        document.getElementById("step4").style.display = "block";
        document.getElementById("result-member-code").textContent =
          "Member Code: " + response.data.memberCode;
        document.getElementById("result-member-type").textContent =
          "ประเภทสมาชิก: " + memberType;
        document.getElementById("result-payment-schedule").textContent =
          "รอบจ่ายเงิน" +
          (memberType === "corporate"
            ? "Monthly Settlement"
            : "Within 24 Hours");
        //ถ้า response.data.companyCode มีค่าอยู่จริง ให้ทำโค้ดข้างใน
        if (response.data.companyCode) {
          //ไปหาช่อง element "result-company-code" --> แล้วเตรียมจะใส่ข้อความ ก็คือ "รหัสบริษัทของคุณ:" + response.data.companyCode
          document.getElementById("result-company-code").textContent =
            "รหัสบริษัทของคุณ:" + response.data.companyCode;
        }
      } else {
        alert(
          "เหตุผล: " +
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
    alert("คัดลอกเบอร์ Doctor2Go แล้ว");
  });
