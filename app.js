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

async function main() {
  await liff.init({ liffId: LIFF_ID });

  if (!liff.isLoggedIn()) {
    liff.login();
    return;
  }

  userProfile = await liff.getProfile();

  document.getElementById("status").textContent =
    `สวัสดี ${userProfile.displayName}`;

  document.getElementById("step1").style.display = "flex";
}

main();

let memberType = null;
let userProfile = null;
let confirmationResult = null;

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
  document.getElementById("step2").style.display = "block";
  document.getElementById("input-name").value = userProfile.displayName;
  document.getElementById("input-category").innerHTML =
    "<option>Tour Company</option><option>Travel Agency</option><option>DMC</option><option>Hotel</option><option>Transportation</option><option>Other</option>";
  document.getElementById("step2-title").textContent = "ข้อมูลบริษัทของคุณ";
  document.getElementById("input-company-name").style.display = "block";
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
        memberType: memberType,
        name: document.getElementById("input-name").value,
        category: document.getElementById("input-category").value,
        email: document.getElementById("input-email").value,
        companyName: document.getElementById("input-company-name").value,
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
      } else {
        alert("คุณเป็นสมาชิกแล้ว หรือเกิดความผิดพลาด");
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
