import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

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

//เอาไว้เก็บรหัสประจำตัวของ Liff App
const LIFF_ID = "2010746451-zVL3e0wH";

async function main() {
  await liff.init({ liffId: LIFF_ID });

  if (!liff.isLoggedIn()) {
    liff.login();
    return;
  }

  const profile = await liff.getProfile();
  document.getElementById("status").textContent =
    `สวัสดี ${profile.displayName}`;
}

main();

let memberType = null;

document
  .getElementById("btn-individual")
  .addEventListener("click", function () {
    memberType = "individual";
    console.log(memberType);
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
  });
document.getElementById("btn-corporate").addEventListener("click", function () {
  memberType = "corporate";
  console.log(memberType);
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
});
