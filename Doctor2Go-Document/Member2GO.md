# 

[Member2GO](#member2go)

[Mobile-First Functional Specification — Simple Final Version](#mobile-first-functional-specification-—-simple-final-version)

[1\. ชื่อเมนู](#1.-ชื่อเมนู)

[2\. แนวคิดหลัก](#2.-แนวคิดหลัก)

[3\. หลักการของระบบ](#3.-หลักการของระบบ)

[4\. ผู้ที่ใช้งานได้](#4.-ผู้ที่ใช้งานได้)

[4.1 สมาชิกที่ถูกระงับการใช้งาน](#4.1-สมาชิกที่ถูกระงับการใช้งาน)

[5\. กรณียังไม่ได้เป็นสมาชิก](#5.-กรณียังไม่ได้เป็นสมาชิก)

[6\. การเข้าสู่เมนู](#6.-การเข้าสู่เมนู)

[7\. Header ของหน้า Member2GO](#7.-header-ของหน้า-member2go)

[7.1 Individual Member](#7.1-individual-member)

[7.2 Corporate Member](#7.2-corporate-member)

[8\. หน้า Member2GO](#8.-หน้า-member2go)

[9\. Referral Link และ Referral Token](#9.-referral-link-และ-referral-token)

[10\. กฎของ Referral Link](#10.-กฎของ-referral-link)

[11\. ปุ่มแชร์](#11.-ปุ่มแชร์)

[11.1 ปุ่มหลัก](#11.1-ปุ่มหลัก)

[11.2 ปุ่มรอง](#11.2-ปุ่มรอง)

[12\. ข้อความสำหรับแชร์ผ่าน LINE](#12.-ข้อความสำหรับแชร์ผ่าน-line)

[13\. การคัดลอก Referral Link](#13.-การคัดลอก-referral-link)

[14\. QR Code](#14.-qr-code)

[15\. Flow ของผู้ได้รับคำแนะนำ](#15.-flow-ของผู้ได้รับคำแนะนำ)

[16\. ข้อความในหน้าสมัครสมาชิก](#16.-ข้อความในหน้าสมัครสมาชิก)

[17\. สมัครโดยไม่ผ่าน Referral Link](#17.-สมัครโดยไม่ผ่าน-referral-link)

[18\. การผูกผู้แนะนำ](#18.-การผูกผู้แนะนำ)

[19\. การป้องกันสมาชิกซ้ำ](#19.-การป้องกันสมาชิกซ้ำ)

[20\. สถานะที่สมาชิกเห็น](#20.-สถานะที่สมาชิกเห็น)

[21\. การสมัครยังไม่ทำให้เกิด Reward](#21.-การสมัครยังไม่ทำให้เกิด-reward)

[22\. First Paid Case](#22.-first-paid-case)

[23\. กรณียอดต่ำกว่า 2,000 บาท](#23.-กรณียอดต่ำกว่า-2,000-บาท)

[24\. กรณี Referred to Hospital](#24.-กรณี-referred-to-hospital)

[25\. Reward เกิดครั้งเดียว](#25.-reward-เกิดครั้งเดียว)

[26\. Case Reward ของสมาชิกใหม่](#26.-case-reward-ของสมาชิกใหม่)

[27\. กรณีที่ไม่สร้าง Member2GO Reward](#27.-กรณีที่ไม่สร้าง-member2go-reward)

[28\. Summary](#28.-summary)

[28.1 Joined Members](#28.1-joined-members)

[28.2 Rewards Earned](#28.2-rewards-earned)

[29\. รายการสมาชิกที่แนะนำ](#29.-รายการสมาชิกที่แนะนำ)

[29.1 Joined](#29.1-joined)

[29.2 Rewarded](#29.2-rewarded)

[30\. ข้อมูลที่ไม่แสดงใน Referral List](#30.-ข้อมูลที่ไม่แสดงใน-referral-list)

[31\. Empty State](#31.-empty-state)

[32\. การแสดง Reward ใน My Rewards](#32.-การแสดง-reward-ใน-my-rewards)

[Individual Member](#individual-member)

[Corporate Member](#corporate-member)

[33\. รอบการจ่าย](#33.-รอบการจ่าย)

[33.1 ผู้แนะนำเป็น Individual Member](#33.1-ผู้แนะนำเป็น-individual-member)

[33.2 ผู้แนะนำเป็น Corporate Member](#33.2-ผู้แนะนำเป็น-corporate-member)

[34\. ข้อความ LINE เมื่อมีสมาชิกใหม่](#34.-ข้อความ-line-เมื่อมีสมาชิกใหม่)

[35\. ข้อความ LINE เมื่อได้รับ Reward](#35.-ข้อความ-line-เมื่อได้รับ-reward)

[35.1 Individual Member](#35.1-individual-member)

[35.2 Corporate Member](#35.2-corporate-member)

[36\. ข้อความ LINE เมื่อจ่ายแล้ว](#36.-ข้อความ-line-เมื่อจ่ายแล้ว)

[Individual](#individual)

[Corporate](#corporate)

[37\. Notification Rules](#37.-notification-rules)

[38\. Admin Mobile](#38.-admin-mobile)

[39\. การแก้ไขผู้แนะนำ](#39.-การแก้ไขผู้แนะนำ)

[40\. การสร้าง Reward อัตโนมัติ](#40.-การสร้าง-reward-อัตโนมัติ)

[41\. การป้องกัน Reward ซ้ำ](#41.-การป้องกัน-reward-ซ้ำ)

[42\. ข้อมูลที่ระบบต้องเก็บ](#42.-ข้อมูลที่ระบบต้องเก็บ)

[42.1 Referral](#42.1-referral)

[42.2 Member2GO Reward](#42.2-member2go-reward)

[Individual Member](#individual-member-1)

[Corporate Member](#corporate-member-1)

[42.3 Qualifying Case Check](#42.3-qualifying-case-check)

[Referred to Hospital](#referred-to-hospital)

[43\. Privacy](#43.-privacy)

[44\. Error States](#44.-error-states)

[44.1 ไม่พบ Member Account](#44.1-ไม่พบ-member-account)

[44.2 Referral Link ไม่ถูกต้อง](#44.2-referral-link-ไม่ถูกต้อง)

[44.3 Referral Token ไม่ถูกต้องหรือถูกยกเลิก](#44.3-referral-token-ไม่ถูกต้องหรือถูกยกเลิก)

[44.4 Self-Referral](#44.4-self-referral)

[44.5 มี Member Account อยู่แล้ว](#44.5-มี-member-account-อยู่แล้ว)

[45\. สิ่งที่ไม่ทำใน Phase 1](#45.-สิ่งที่ไม่ทำใน-phase-1)

[46\. Business Rules](#46.-business-rules)

[47\. Acceptance Criteria](#47.-acceptance-criteria)

[48\. Final Flow](#48.-final-flow)

[Final Concept](#final-concept)

# 

# **Member2GO** {#member2go}

## **Mobile-First Functional Specification — Simple Final Version** {#mobile-first-functional-specification-—-simple-final-version}

---

# **1\. ชื่อเมนู** {#1.-ชื่อเมนู}

ชื่อภาษาอังกฤษ:

**Member2GO**

ชื่อภาษาไทย:

**แนะนำสมาชิก**

Member2GO ใช้สำหรับให้สมาชิก Doctor2GO Travel Network เชิญบุคคลหรือบริษัทมาสมัครสมาชิกผ่าน Referral Link ของตนเอง

เมื่อสมาชิกใหม่มีเคสแรกที่เข้าเงื่อนไข ผู้แนะนำจะได้รับ:

**Member2GO Reward ฿500**

Reward เกิดเพียงหนึ่งครั้งต่อสมาชิกใหม่หนึ่งราย

# **2\. แนวคิดหลัก** {#2.-แนวคิดหลัก}

**แชร์ → สมัคร → ใช้บริการครั้งแรก → รับ Reward ฿500**

การสมัครสมาชิกสำเร็จเพียงอย่างเดียวยังไม่ทำให้เกิด Reward

Reward จะเกิดเมื่อสมาชิกใหม่:

1. มี Case แรกที่เข้าเงื่อนไข  
2. Doctor2GO ให้บริการจริง  
3. Doctor2GO ได้รับชำระเงินจริงจากผู้ชำระเงิน  
4. Doctor2GO ออกใบเสร็จสำหรับยอดที่ได้รับชำระแล้ว

ผู้ชำระเงินอาจเป็นผู้ป่วย ผู้ร่วมเดินทาง บริษัท โรงแรม บริษัทประกัน หรือผู้รับผิดชอบค่าใช้จ่ายอื่น

Member2GO Reward เข้าเงื่อนไขเมื่อมีครบ:

**Service Completed \+ Payment Received \+ Receipt Issued**

# **3\. หลักการของระบบ** {#3.-หลักการของระบบ}

1. Individual Member และ Corporate Member ใช้ Member2GO ระบบเดียวกัน  
2. หน้าจอใช้ Format เดียวกัน  
3. Member Account หนึ่ง Account มี Member2GO Referral Link หลักหนึ่ง Link โดยระบบใช้ Referral Token ภายใน Link เพื่อระบุผู้แนะนำ   
4. Referral Link ใช้ซ้ำได้  
5. สมาชิกแชร์ผ่าน LINE ได้ทันที  
6. ไม่ต้อง Login ใหม่  
7. ไม่ต้องสร้าง Username หรือ Password  
8. ไม่ต้องกรอกข้อมูลของผู้ได้รับคำแนะนำ  
9. ผู้สมัครเป็นผู้กรอกข้อมูลของตนเอง  
10. Referral Token ต้องถูกบันทึกไว้ใน Registration Session ก่อนสมัครสมาชิกสำเร็จ และระบบสร้าง Referral Relationship เมื่อการสมัครสำเร็จ   
11. หลังสมัครสำเร็จแล้ว ไม่สามารถอ้าง Referral ย้อนหลังได้  
12. ผู้สมัครหนึ่งรายมีผู้แนะนำได้หนึ่ง Member Account  
13. ไม่อนุญาต Self-Referral  
14. สมาชิกใหม่หนึ่งรายทำให้เกิด Member2GO Reward ได้เพียงหนึ่งครั้ง  
15. Member2GO Reward แสดงและจ่ายผ่าน My Rewards  
16. Document Request ที่ยังไม่ได้ดำเนินการไม่ปิดกั้นการเปิดหรือแชร์ Referral Link   
17. ข้อมูลรับเงินไม่ครบไม่ทำให้ Reward หาย แต่การโอนจะรอจนข้อมูลครบ  
18. ไม่แสดงข้อมูลผู้ป่วยหรือข้อมูลทางการแพทย์ใน Member2GO  
19. Referral Attribution ต้องมาจาก Referral Link และ Referral Token ที่ถูกต้องเท่านั้น  
20. ไม่มีช่องกรอก Referral Code หรือ Member Code ของผู้แนะนำ  
21. หนึ่งเบอร์โทรศัพท์ที่ยืนยันแล้วเชื่อมได้กับ Member Code เดียวเท่านั้น  
22. Corporate Member มีผู้ใช้งานหลายคนได้ แต่ผู้ใช้งานแต่ละคนต้องใช้เบอร์โทรศัพท์ที่ไม่ซ้ำกัน

# **4\. ผู้ที่ใช้งานได้** {#4.-ผู้ที่ใช้งานได้}

Member2GO ใช้ได้สำหรับ:

* Individual Member  
* Corporate Member  
* สมาชิกที่ใช้งานอยู่ แม้มี Document Request ที่ยังไม่ได้ดำเนินการ 

Guest ยังไม่สามารถใช้ Member2GO ได้ เพราะยังไม่มี Member Code และ Referral Link

## **4.1 สมาชิกที่ถูกระงับการใช้งาน** {#4.1-สมาชิกที่ถูกระงับการใช้งาน}

เมื่อ Member Account ถูกระงับ:

* ไม่สามารถแชร์ Referral Link ใหม่  
* Referral เดิมไม่ถูกลบ  
* สมาชิกที่สมัครผ่าน Referral เดิมยังคงผูกกับผู้แนะนำ  
* ประวัติเดิมยังดูได้  
* Reward ที่เข้าเงื่อนไขยังถูกบันทึกไว้  
* การจ่ายเงินพักไว้จนกว่า Member Account จะกลับมาใช้งานได้

# **5\. กรณียังไม่ได้เป็นสมาชิก** {#5.-กรณียังไม่ได้เป็นสมาชิก}

เมื่อ Guest กด Member2GO ให้แสดง:

Member2GO  
แนะนำสมาชิก

Sign up to use Member2GO

\[Sign Up\]

ไม่ต้องแสดงรายละเอียดเงื่อนไข Reward จำนวนมากในหน้านี้

# **6\. การเข้าสู่เมนู** {#6.-การเข้าสู่เมนู}

สมาชิกกด **Member2GO**  
 ↓  
 ระบบตรวจสอบ LINE Account  
 ↓  
 ระบบค้น Member Account  
 ↓  
 แสดง Name, Member Code และ Contact  
 ↓  
 แสดง Referral Link และข้อมูลการแนะนำ

สมาชิกไม่ต้องกรอก:

* Member Code  
* เบอร์โทรศัพท์  
* Username  
* Password

# **7\. Header ของหน้า Member2GO** {#7.-header-ของหน้า-member2go}

Individual และ Corporate ใช้ Format เดียวกัน

ข้อมูลที่แสดง:

* Name  
* Member Code  
* Contact

## **7.1 Individual Member** {#7.1-individual-member}

Member2GO  
แนะนำสมาชิก

Name  
Somchai Guide

Member Code  
DG-000001

Contact  
Somchai Guide

สำหรับ Individual Member:

* `Name` แสดงชื่อสมาชิก  
* `Contact` แสดงชื่อสมาชิกซ้ำ

## **7.2 Corporate Member** {#7.2-corporate-member}

Member2GO  
แนะนำสมาชิก

Name  
ABC Travel Co., Ltd.

Member Code  
DG-000045

Contact  
Nicha Travel

สำหรับ Corporate Member:

* `Name` แสดงชื่อบริษัท  
* `Member Code` แสดง Member Code ของบริษัท  
* `Contact` แสดงผู้ใช้งานบริษัทที่กำลังเข้าใช้

Referral และ Reward เป็นของบริษัท ไม่ใช่ของ Contact รายบุคคล

# **8\. หน้า Member2GO** {#8.-หน้า-member2go}

หน้าหลักประกอบด้วย:

1. Header  
2. Referral Card  
3. Summary  
4. รายการสมาชิกที่แนะนำ

ตัวอย่าง:

Member2GO  
 แนะนำสมาชิก

Name  
 Somchai Guide

Member Code  
 DG-000001

Contact  
 Somchai Guide

Invite new members and earn THB 500  
 ชวนสมาชิกใหม่ รับ Reward 500 บาท

**Share your invitation link**  
 แชร์ลิงก์เชิญสมาชิก

\[LINE Logo Share\]  
 \[🔗 Copy Link\]  
 \[QR Code\]

Joined Members  
 8

Rewards Earned  
 ฿2,000.00

# **9\. Referral Link และ Referral Token**  {#9.-referral-link-และ-referral-token}

Member2GO ใช้ Referral Link เป็นช่องทางเดียวในการผูกผู้แนะนำ

ระบบใช้ Referral Token ภายใน Link เพื่อระบุ Member Account ของผู้แนะนำ

ตัวอย่างภายในระบบ:

Referrer Member Code  
 DG-000001

Referral Token  
 8G4K2P9X

Referral Link  
 `https://doctor2go.example/join?ref=8G4K2P9X`

หลักการ:

1. สมาชิกแชร์ Referral Link โดยไม่ต้องกรอกหรือส่ง Referral Code  
2. ผู้สมัครไม่ต้องเห็นหรือกรอก Referral Token  
3. ผู้สมัครไม่สามารถใช้ Member Code เพื่ออ้างผู้แนะนำ  
4. ระบบอ่าน Referral Token และแสดงชื่อผู้แนะนำในหน้าสมัคร  
5. Member Code ยังคงเป็นรหัสอ้างอิง Member Account แต่ไม่ใช้เป็น Referral Code สำหรับการสมัคร

# **10\. กฎของ Referral Link** {#10.-กฎของ-referral-link}

1. Member Account หนึ่ง Account มี Referral Link หลักหนึ่ง Link  
2. Link ไม่เปลี่ยนทุกครั้งที่เปิดเมนู  
3. Link ใช้ซ้ำได้  
4. Link ต้องระบุผู้แนะนำให้อัตโนมัติ  
5. QR Code ต้องเปิด Link เดียวกัน  
6. Referral Token ไม่หมดอายุใน Flow ปกติ  
7. Admin สามารถยกเลิก Link ได้เมื่อมีเหตุจำเป็น  
8. การยกเลิก Link ไม่ลบสมาชิกที่สมัครผ่าน Link ไปแล้ว  
9. การออก Link ใหม่ต้องบันทึกเหตุผลและผู้ดำเนินการ  
10. Link ที่ถูกยกเลิกต้องใช้สมัคร Referral ใหม่ไม่ได้  
11. Referral Link ต้องผูกกับ Member Account ที่ยังมีสิทธิ์ใช้ Member2GO  
12. ระบบต้องตรวจสอบ Referral Token ทุกครั้งก่อนเริ่ม Registration  
13. ผู้สมัครไม่สามารถเปลี่ยนผู้แนะนำจากหน้าสมัคร  
14. ไม่มีการกรอก Member Code เพื่อทดแทน Referral Link  
15. หาก Link หรือ Token ไม่ถูกต้อง ผู้สมัครยังสมัครสมาชิกได้ แต่ระบบต้องไม่ผูกผู้แนะนำ

# **11\. ปุ่มแชร์** {#11.-ปุ่มแชร์}

ใช้ Icon ช่วยให้เข้าใจง่ายทุกภาษา

## **11.1 ปุ่มหลัก** {#11.1-ปุ่มหลัก}

\[LINE Logo  Share\]

เมื่อกด ให้เปิด LINE Share Target Picker พร้อมข้อความและ Referral Link ที่เตรียมไว้แล้ว

## **11.2 ปุ่มรอง** {#11.2-ปุ่มรอง}

\[🔗 Copy Link\]

\[QR Code Icon\]

ไม่ต้องมีปุ่มหรือเมนูอื่นที่ไม่จำเป็น

# **12\. ข้อความสำหรับแชร์ผ่าน LINE** {#12.-ข้อความสำหรับแชร์ผ่าน-line}

ข้อความควรสั้น อ่านง่าย และไม่อธิบาย Reward ของผู้แนะนำแก่ผู้สมัคร

Join the Doctor2GO Travel Network.

Easy to sign up and ready to use.

\[Join Now\]  
 \[สมัครสมาชิก\]

ระบบแนบ Member2GO Referral Link ให้อัตโนมัติ

# **13\. การคัดลอก Referral Link** {#13.-การคัดลอก-referral-link}

เมื่อกด **Copy Link** ระบบต้อง:

1. คัดลอก Referral Link ลง Clipboard  
2. แสดงข้อความสั้น ๆ:

Referral Link copied  
คัดลอกลิงก์แล้ว

ระบบต้องไม่สร้าง Link ใหม่ทุกครั้งที่กด

สมาชิกสามารถนำ Link ไปส่งผ่านช่องทางอื่นได้ตามปกติ

# **14\. QR Code** {#14.-qr-code}

เมื่อกดปุ่ม QR Code ให้แสดง:

Doctor2GO Travel Network

\[QR CODE\]

Scan to Join  
 สแกนเพื่อสมัคร

QR Code เปิด Member2GO Referral Link เดียวกับปุ่ม Share และ Copy Link

เพิ่มกฎ:

QR Code ต้องฝัง Referral Token ใน Link และผู้สมัครไม่ต้องกรอกข้อมูลผู้แนะนำเพิ่มเติม

QR Code ใช้ได้กับ:

* การแนะนำแบบพบหน้า  
* โรงแรม  
* บริษัททัวร์  
* Travel Agency  
* DMC  
* Booth หรือ Event  
* เอกสารประชาสัมพันธ์ของบริษัท

# **15\. Flow ของผู้ได้รับคำแนะนำ** {#15.-flow-ของผู้ได้รับคำแนะนำ}

ผู้รับกด Referral Link  
 ↓  
 ระบบเปิดหน้าสมัคร Doctor2GO  
 ↓  
 ระบบตรวจสอบ Referral Token  
 ↓  
 ระบบระบุ Member Account ของผู้แนะนำ  
 ↓  
 แสดงชื่อผู้แนะนำ  
 ↓  
 ผู้สมัครเลือก Individual หรือ Corporate  
 ↓  
 กรอกข้อมูลสมัคร  
 ↓  
 ยืนยันเบอร์โทรศัพท์ด้วย SMS OTP  
 ↓  
 ยอมรับ Terms & Conditions และ Privacy Notice  
 ↓  
 กดสมัคร  
 ↓  
 ระบบตรวจสอบสมาชิกซ้ำและเบอร์โทรศัพท์ซ้ำ  
 ↓  
 ระบบออก Member Code  
 ↓  
 ระบบสร้าง Referral Relationship  
 ↓  
 สถานะเป็น `Joined`

# **16\. ข้อความในหน้าสมัครสมาชิก** {#16.-ข้อความในหน้าสมัครสมาชิก}

เมื่อเปิดหน้าสมัครผ่าน Referral Link ให้แสดง:

คุณสมชาย ใจดี ชวนคุณเข้าร่วม Doctor2GO Travel Network   
Invited by Somchai Jaidee

ระบบดึงชื่อผู้แนะนำจาก Member Account ที่ผูกกับ Referral Token มาแสดง — **ไม่แสดง Referral Code หรือ Member Code ของผู้แนะนำเป็นตัวอักษร/ตัวเลขดิบ**

กติกา:

* ชื่อที่แสดงถูกกรอกอัตโนมัติ แก้ไขไม่ได้  
* ระบบบันทึก Referral Token ไว้ใน Registration Session เมื่อเปิดหน้าสมัคร  
* Referral Relationship จะถูกสร้างเมื่อผู้สมัครสมัครสมาชิกสำเร็จเท่านั้น  
* การเปิด Link หรือเริ่มกรอกข้อมูลโดยสมัครไม่สำเร็จต้องไม่สร้าง Referral Record ที่มีสถานะ Joined  
* หากไม่สามารถดึงชื่อผู้แนะนำได้จากปัญหาการแสดงผลชั่วคราว แต่ Referral Token ยังถูกต้อง ระบบอาจแสดงข้อความทั่วไปว่า:  
   “คุณได้รับคำเชิญเข้าร่วม Doctor2GO Travel Network”  
* หาก Referral Token ไม่ถูกต้อง ถูกยกเลิก หรือไม่สามารถเชื่อมกับ Member Account ที่ใช้งานได้ ระบบต้องไม่ผูกผู้แนะนำ

**ไม่แสดง:** เบอร์โทรศัพท์, Email, LINE User ID, Member Code ของผู้แนะนำ หรือข้อมูลส่วนบุคคลอื่นของผู้แนะนำ — แสดงเฉพาะชื่อ

# **17\. สมัครโดยไม่ผ่าน Referral Link** {#17.-สมัครโดยไม่ผ่าน-referral-link}

หากผู้สมัครเปิดหน้าสมัครโดยตรง ไม่ได้เข้าผ่าน Member2GO Referral Link:

1. ระบบไม่แสดงช่อง Referral Code  
2. ระบบไม่แสดงช่องกรอก Member Code ของผู้แนะนำ  
3. ระบบถือว่าการสมัครครั้งนี้ไม่มีผู้แนะนำ  
4. ผู้สมัครไม่สามารถเพิ่มผู้แนะนำหลังสมัครสำเร็จ  
5. Admin ไม่สามารถเพิ่ม Referral ย้อนหลังตามคำขอทั่วไปของสมาชิก

ผู้ที่ต้องการได้รับการผูกกับผู้แนะนำต้องเปิด Registration ผ่าน Referral Link ที่ถูกต้องก่อนสมัครสำเร็จ

# **18\. การผูกผู้แนะนำ** {#18.-การผูกผู้แนะนำ}

1. ผู้สมัครหนึ่งรายมีผู้แนะนำได้หนึ่ง Member Account  
2. Referral Token จาก Referral Link ต้องถูกบันทึกใน Registration Session ก่อนสมัครสำเร็จ   
3. เมื่อสมัครสำเร็จ ความสัมพันธ์กับผู้แนะนำถูกล็อก  
4. สมาชิกใหม่แก้ผู้แนะนำเองไม่ได้  
5. ผู้แนะนำเพิ่มสมาชิกย้อนหลังไม่ได้  
6. Admin ไม่ควรเพิ่มหรือเปลี่ยนผู้แนะนำหลังสมัคร  
7. การแก้ไขทำได้เฉพาะกรณี Technical Error ที่ตรวจสอบได้  
8. การแก้ไขต้องเกิดก่อนสร้าง Member2GO Reward  
9. ต้องบันทึกเหตุผล ผู้ดำเนินการ และวันเวลา  
10. หลังสร้างหรือจ่าย Reward แล้ว ห้ามเปลี่ยนผู้แนะนำ  
11. ไม่อนุญาตให้กรอก Member Code เพื่อผูกผู้แนะนำ  
12. Referral Relationship ถูกสร้างเมื่อ Registration สำเร็จ  
13. Registration ที่ไม่สำเร็จต้องไม่สร้างสถานะ Joined

# **19\. การป้องกันสมาชิกซ้ำ** {#19.-การป้องกันสมาชิกซ้ำ}

ระบบตรวจสอบการสมัครซ้ำจาก:

* LINE User ID  
* เบอร์โทรศัพท์ที่ยืนยันด้วย OTP  
* Member Account เดิม  
* ข้อมูลบริษัทที่มีอยู่แล้ว สำหรับ Corporate Member

กฎ:

1. LINE Account เดียวกันสมัครซ้ำไม่ได้  
2. หนึ่งเบอร์โทรศัพท์ที่ยืนยันด้วย SMS OTP เชื่อมกับ Member Code ได้เพียงหนึ่งรายการ   
   สำหรับ Corporate Member ผู้ใช้งานหลายคนสามารถอยู่ภายใต้ Corporate Member Code เดียวกันได้ แต่ผู้ใช้งานแต่ละคนต้องใช้เบอร์โทรศัพท์ของตนเอง และเบอร์ต้องไม่ซ้ำกับผู้ใช้งานหรือ Member Account อื่น   
3. สมาชิกเดิมไม่สามารถสมัครใหม่เพื่อสร้าง Referral ซ้ำ  
4. บริษัทเดิมไม่ควรถูกสร้างเป็น Corporate Member ใหม่ซ้ำ  
5. ไม่อนุญาต Self-Referral  
6. การตรวจพบข้อมูลซ้ำต้องไม่สร้าง Referral Relationship ใหม่  
7. ระบบต้องตรวจสอบเบอร์โทรศัพท์ทั้งก่อนส่ง OTP และก่อนสร้าง Member Account หรือ Corporate User 

# **20\. สถานะที่สมาชิกเห็น** {#20.-สถานะที่สมาชิกเห็น}

Member2GO ใช้เพียง 2 สถานะ

| Status | ภาษาไทย | ความหมาย |
| ----- | ----- | ----- |
| Joined | สมัครแล้ว | สมาชิกใหม่สมัครสำเร็จ แต่ยังไม่มี Member2GO Reward |
| Rewarded | ได้รับ Reward | สมาชิกใหม่มี Case แรกที่เข้าเงื่อนไขและระบบสร้าง Member2GO Reward แล้ว |

สถานะการจ่ายเงินให้ดูที่ **My Rewards**

ใน My Rewards ใช้:

* Ready for Payment  
* Paid

ไม่ต้องแสดงใน Member2GO:

* Link Opened  
* Registration Started  
* Waiting for Case  
* Under Review  
* Verification Pending  
* Not Eligible  
* Payment Processing  
* Rejected

# **21\. การสมัครยังไม่ทำให้เกิด Reward** {#21.-การสมัครยังไม่ทำให้เกิด-reward}

เมื่อสมัครสำเร็จ ให้สร้าง Referral Record และแสดง:

New Member Code  
DG-000245

Member Type  
Individual Member

Joined Date  
16 July 2026

Status  
Joined  
สมัครแล้ว

ขั้นตอนนี้ยังไม่สร้าง Reward ฿500

# **22\. First Paid Case** {#22.-first-paid-case}

Member2GO Reward เกิดเมื่อสมาชิกใหม่มี Case แรกที่ครบทุกเงื่อนไขต่อไปนี้:

1. Case ถูกเปิดในระบบ Doctor2GO  
2. Case ผูกกับ Member Account ของสมาชิกใหม่ตั้งแต่ตอนเปิด  
3. Case ไม่ใช่ Guest Case  
4. Doctor2GO ให้บริการจริง  
5. มีบันทึกการให้บริการ  
6. Doctor2GO ได้รับชำระเงินจริงจากผู้ชำระเงิน  
7. Doctor2GO ออกใบเสร็จสำหรับยอดที่ได้รับชำระแล้ว  
8. ยอด Payment และ Receipt สามารถตรวจสอบและเชื่อมกับ Case ได้  
9. Case ไม่ถูกยกเลิกก่อนให้บริการ  
10. Case ไม่ใช่รายการซ้ำ  
11. สมาชิกใหม่ยังไม่เคยทำให้เกิด Member2GO Reward

เวลาที่ Case เข้าเงื่อนไข Member2GO Reward คือเวลาที่มีครบ:

* Service Completed  
* Payment Received  
* Receipt Issued

ผู้ชำระเงินอาจเป็นผู้ป่วย ผู้ร่วมเดินทาง บริษัท โรงแรม บริษัทประกัน หรือผู้รับผิดชอบค่าใช้จ่ายอื่น

ชื่อ `First Paid Case` สามารถคงไว้ได้ แต่ควรนิยามว่าเป็น Case แรกที่มี Service, Payment และ Receipt ครบถ้วน

เมื่อครบเงื่อนไข ระบบสร้าง:

Reward Type  
Member2GO Reward

Referred Member Code  
DG-000245

Qualifying Case  
D2G-260720-0008

Reward Amount  
฿500.00

# **23\. กรณียอดต่ำกว่า 2,000 บาท** {#23.-กรณียอดต่ำกว่า-2,000-บาท}

หากยอดที่ Doctor2GO ได้รับชำระจริงและออกใบเสร็จใน First Paid Case ต่ำกว่า ฿2,000 ระบบส่งรายการให้ Admin ตรวจสอบก่อนสร้าง Member2GO Reward 

ระบบต้องส่งรายการให้ Admin ตรวจสอบก่อนสร้าง Member2GO Reward

Admin ตรวจเพียงว่า:

* Case และการให้บริการเกิดขึ้นจริง   
* Doctor2GO ให้บริการจริง  
* มีใบเสร็จจริง  
* มีการรับเงินจริง  
* ไม่ใช่ Case ซ้ำ  
* ไม่ใช่ Self-Referral  
* ไม่ใช่การสมัครสมาชิกซ้ำ

การตรวจสอบนี้เป็นงานภายใน

สมาชิกไม่เห็นสถานะ Manual Review

เมื่อตรวจสอบผ่าน ระบบจึงสร้าง Reward ฿500

Manual Review เป็นกระบวนการภายในและไม่เปลี่ยนเวลาเริ่มต้นของ Reward Eligibility

เวลาเริ่มต้นยังคงเป็นเวลาที่มี Payment และ Receipt ครบถ้วน

สำหรับ Individual Member การตรวจสอบต้องดำเนินการภายใน SLA การจ่าย 24 ชั่วโมงเดียวกัน ไม่เริ่มนับเวลาใหม่หลัง Manual Review ผ่าน

# **24\. กรณี Referred to Hospital**  {#24.-กรณี-referred-to-hospital}

`Referred to Hospital` หมายถึง Doctor2GO ส่งต่อผู้ป่วยไปโรงพยาบาลหลังจากให้บริการหรือประเมินผู้ป่วย

Case ที่เป็น Referred to Hospital:

* ไม่ตัดสิทธิ์ First Paid Case  
* ไม่ตัดสิทธิ์ Member2GO Reward  
* ไม่ต้องตรวจว่าผู้ป่วยได้รับการ Admit หรือไม่  
* ใช้เงื่อนไข Reward เดียวกับ Case อื่น

Reward เกิดเมื่อ:

1. Doctor2GO ให้บริการจริง  
2. Doctor2GO ได้รับชำระเงินจริง  
3. Doctor2GO ออกใบเสร็จสำหรับยอดที่ได้รับชำระแล้ว

# **25\. Reward เกิดครั้งเดียว** {#25.-reward-เกิดครั้งเดียว}

ผู้แนะนำได้รับ Member2GO Reward เพียงหนึ่งครั้งต่อสมาชิกใหม่หนึ่งราย

ตัวอย่าง:

Referrer  
DG-000001

New Member  
DG-000245

First Paid Case  
D2G-260720-0008

Member2GO Reward  
฿500.00

Case ที่สองและ Case ถัดไปของสมาชิกใหม่ไม่สร้าง Member2GO Reward เพิ่ม

ระบบต้องป้องกัน Reward ซ้ำในระดับฐานข้อมูล

# **26\. Case Reward ของสมาชิกใหม่** {#26.-case-reward-ของสมาชิกใหม่}

สมาชิกใหม่ยังสามารถได้รับ Case Reward 15% ของตนเองตามเงื่อนไข My Rewards

ดังนั้น Case แรกอาจสร้าง Reward สองรายการแยกกัน:

| ผู้ได้รับ | Reward |
| ----- | ----- |
| สมาชิกใหม่ | Case Reward 15% |
| ผู้แนะนำ | Member2GO Reward ฿500 |

Reward ทั้งสองรายการ:

* มีเจ้าของคนละ Member Account  
* เป็นคนละ Reward Record  
* แสดงแยกกันใน My Rewards  
* ห้ามรวมเป็น Reward เดียว

# **27\. กรณีที่ไม่สร้าง Member2GO Reward** {#27.-กรณีที่ไม่สร้าง-member2go-reward}

ไม่สร้าง Reward ในกรณีต่อไปนี้:

* ผู้รับเพียงเปิด Referral Link  
* เริ่มสมัครแต่ยังสมัครไม่สำเร็จ  
* สมัครแล้วแต่ยังไม่มี Case ที่เข้าเงื่อนไข  
* Case เป็น Guest Case  
* Doctor2GO ไม่ได้ให้บริการ  
* Case ถูกยกเลิกก่อนให้บริการ  
* ไม่มีใบเสร็จ Doctor2GO  
* Doctor2GO ยังไม่ได้รับชำระเงินจริง   
* ยอดรับชำระตรวจสอบไม่ได้  
* Case เป็นรายการซ้ำ  
* Referral ถูกเพิ่มหลังสมัครเสร็จ  
* ผู้แนะนำและสมาชิกใหม่เป็น Account เดียวกัน  
* สมาชิกใหม่เป็นสมาชิกเดิมหรือ Account ซ้ำ  
* เคยสร้าง Member2GO Reward สำหรับสมาชิกใหม่รายนี้แล้ว  
* กรณียอดต่ำกว่า ฿2,000 และไม่ผ่านการตรวจสอบภายใน  
* Doctor2GO ยังไม่ได้ออกใบเสร็จสำหรับยอดที่ได้รับชำระ  
* Referral ไม่ได้มาจาก Referral Link และ Referral Token ที่ถูกต้อง 

การ Referred to Hospital ไม่ใช่เหตุผลตัดสิทธิ์

# **28\. Summary** {#28.-summary}

หน้า Member2GO แสดง Summary เพียง 2 รายการ

## **28.1 Joined Members** {#28.1-joined-members}

Joined Members  
สมาชิกที่สมัครแล้ว

8

นับสมาชิกที่สมัครสำเร็จผ่าน Member2GO Referral Link ที่มี Referral Token ถูกต้องเท่านั้น 

## **28.2 Rewards Earned** {#28.2-rewards-earned}

Rewards Earned  
Reward ที่ได้รับ

฿2,000.00

คำนวณจากจำนวน Member2GO Reward ที่เกิดขึ้นแล้ว

ตัวอย่าง:

4 Rewarded Members × ฿500  
\= ฿2,000

สถานะการจ่ายของแต่ละ Reward ดูใน My Rewards

# **29\. รายการสมาชิกที่แนะนำ** {#29.-รายการสมาชิกที่แนะนำ}

Section:

**Your Referrals**  
 **สมาชิกที่คุณแนะนำ**

เรียงจากรายการล่าสุด

## **29.1 Joined** {#29.1-joined}

New Member Code  
DG-000245

Member Type  
Individual Member

Joined Date  
16 July 2026

Status  
Joined  
สมัครแล้ว

## **29.2 Rewarded** {#29.2-rewarded}

New Member Code  
DG-000246

Member Type  
Corporate Member

Qualifying Case  
D2G-260721-0004

Member2GO Reward  
฿500.00

Status  
Rewarded  
ได้รับ Reward

ปุ่ม:

\[ดูใน My Rewards\]

# **30\. ข้อมูลที่ไม่แสดงใน Referral List** {#30.-ข้อมูลที่ไม่แสดงใน-referral-list}

ไม่แสดง:

* ชื่อเต็มของสมาชิกใหม่  
* เบอร์โทรศัพท์  
* Email  
* LINE User ID  
* ที่อยู่  
* เอกสารสมาชิก  
* ข้อมูลบัญชีธนาคาร  
* ชื่อผู้ป่วย  
* อาการ  
* Diagnosis  
* รายชื่อยา  
* รายละเอียดการรักษา  
* ยอดค่ารักษาของผู้ป่วย  
* เหตุผลการตรวจสอบภายใน

ใช้ Member Code เป็นข้อมูลอ้างอิงหลัก

# **31\. Empty State** {#31.-empty-state}

กรณียังไม่มีสมาชิกสมัครผ่าน Referral:

ยังไม่มีสมาชิกที่คุณแนะนำ

แชร์ Member2GO เพื่อเชิญสมาชิกใหม่

\[LINE Logo  Share\]

ไม่ต้องแสดงข้อความยาว

# **32\. การแสดง Reward ใน My Rewards** {#32.-การแสดง-reward-ใน-my-rewards}

เมื่อ First Paid Case เข้าเงื่อนไข ระบบสร้าง Member2GO Reward ฿500 ใน My Rewards ของผู้แนะนำ

ข้อมูลรายการ:

Reward Type  
 Member2GO Reward

Referred Member Code  
 DG-000245

Qualifying Case  
 D2G-260720-0008

Reward  
 ฿500.00

#### **Individual Member** {#individual-member}

เมื่อ Reward เกิด:

Status  
 Ready for Payment

เมื่อโอนแล้ว:

Status  
 Paid

#### **Corporate Member** {#corporate-member}

Reward ที่เกิดระหว่างเดือนแสดงอยู่ใน:

Current Month Rewards

รายการระหว่างเดือนยังไม่แสดง `Ready for Payment`

เมื่อปิดรอบและสร้าง Monthly Statement:

Monthly Statement Status  
 Ready for Payment

เมื่อโอนแล้ว:

Monthly Statement Status  
 Paid

Member2GO ไม่สร้างระบบการจ่ายแยกจาก My Rewards

# **33\. รอบการจ่าย** {#33.-รอบการจ่าย}

## **33.1 ผู้แนะนำเป็น Individual Member** {#33.1-ผู้แนะนำเป็น-individual-member}

Reward เข้าสู่ My Rewards และจ่ายภายใน 24 ชั่วโมงตามกฎเดียวกับ Reward อื่นของ Individual Member

Reward จ่ายภายใน 24 ชั่วโมง โดยเริ่มนับเมื่อมีครบ:

1. Doctor2GO ได้รับชำระเงินจริง  
2. Doctor2GO ออกใบเสร็จสำหรับยอดที่ได้รับชำระ

Manual Review ไม่ทำให้เวลาเริ่มต้นเปลี่ยน และไม่เริ่มนับ 24 ชั่วโมงใหม่หลัง Review ผ่าน

ข้อมูลรับเงินไม่ครบ:

* Reward ยังถูกสร้าง  
* สิทธิ์ไม่หาย  
* การโอนรอจนข้อมูลครบ

## **33.2 ผู้แนะนำเป็น Corporate Member** {#33.2-ผู้แนะนำเป็น-corporate-member}

Reward รวมอยู่ใน Monthly Settlement ของบริษัท

Reward เกิดเมื่อมี Payment และ Receipt  
↓  
เพิ่มใน Current Month Rewards  
↓  
ปิดรอบสิ้นเดือน  
↓  
สร้าง Monthly Statement  
↓  
Statement Status: Ready for Payment  
↓  
จ่ายภายในวันที่ 5 ของเดือนถัดไป  
↓  
Statement Status: Paid 

Monthly Statement แสดงเป็นรายการแยก:

Reward Type  
Member2GO Reward

Referred Member Code  
DG-000245

Qualifying Case  
D2G-260720-0008

Reward Amount  
฿500.00

Reward เป็นของบริษัท ไม่ใช่ Contact ที่แชร์ Link

# **34\. ข้อความ LINE เมื่อมีสมาชิกใหม่** {#34.-ข้อความ-line-เมื่อมีสมาชิกใหม่}

A new member joined through your Member2GO referral.

New Member Code: DG-000245  
Member Type: Individual  
Status: Joined

\[View Member2GO\]

# **35\. ข้อความ LINE เมื่อได้รับ Reward** {#35.-ข้อความ-line-เมื่อได้รับ-reward}

### **35.1 Individual Member** {#35.1-individual-member}

You earned a Member2GO Reward.

New Member Code: DG-000245  
 Qualifying Case: D2G-260720-0008  
 Reward: THB 500.00  
 Status: Ready for Payment

\[View My Rewards\]

### **35.2 Corporate Member** {#35.2-corporate-member}

A Member2GO Reward was added to your company’s current month rewards.

New Member Code: DG-000245  
 Qualifying Case: D2G-260720-0008  
 Reward: THB 500.00  
 Settlement: Monthly Settlement

\[View My Rewards\]

# **36\. ข้อความ LINE เมื่อจ่ายแล้ว** {#36.-ข้อความ-line-เมื่อจ่ายแล้ว}

### **Individual** {#individual}

Doctor2GO has paid your Member2GO Reward.

Reward: THB 500.00  
 Status: Paid

\[View My Rewards\]

### **Corporate** {#corporate}

Doctor2GO has paid your company’s Monthly Statement.

Statement Period: \[Month Year\]  
 Statement Amount: THB \[Amount\]  
 Status: Paid

\[View Monthly Statement\]

# **37\. Notification Rules** {#37.-notification-rules}

ส่ง LINE เฉพาะ 3 เหตุการณ์:

1. สมาชิกใหม่สมัครสำเร็จ  
2. Member2GO Reward เกิดขึ้น  
3. Reward จ่ายแล้ว

ไม่ส่ง:

* ทุกครั้งที่มีคนเปิด Link  
* เมื่อเริ่มกรอก Form  
* Reminder ให้ผู้แนะนำติดตามสมาชิกใหม่  
* การแจ้งว่า Waiting for First Case  
* รายละเอียด Manual Review  
* รายละเอียด Fraud Check  
* Conversion Report  
* ข้อความกระตุ้นรายวัน

# **38\. Admin Mobile** {#38.-admin-mobile}

Admin ต้องสามารถเปิด Referral Detail จากมือถือได้

ข้อมูลที่แสดง:

REFERRAL DETAIL

Referrer  
DG-000001

New Member  
DG-000245

Member Type  
Individual

Joined Date  
16 July 2026

Referral Status  
Rewarded

Qualifying Case  
D2G-260720-0008

Member2GO Reward  
฿500.00

Payment Schedule  
 Within 24 Hours / Monthly Settlement

Reward Settlement State  
 Ready for Payment / Current Month / Included in Statement / Paid

ปุ่มที่จำเป็น:

\[เปิด Member Profile\]

\[เปิด Qualifying Case\]

\[เปิด My Rewards\]

ไม่ต้องสร้าง Dashboard Member2GO ที่ซับซ้อนใน Phase 1

# **39\. การแก้ไขผู้แนะนำ** {#39.-การแก้ไขผู้แนะนำ}

หลังสมัครสำเร็จ ผู้แนะนำถูกล็อก

Admin แก้ไขได้เฉพาะกรณี Technical Error ที่มีหลักฐานชัดเจน และต้อง:

1. แก้ก่อนสร้าง Reward  
2. ระบุผู้แนะนำเดิม  
3. ระบุผู้แนะนำใหม่  
4. ระบุเหตุผล  
5. บันทึกผู้ดำเนินการ  
6. บันทึกวันและเวลา  
7. เก็บ Audit Log

หลัง Reward ถูกสร้างหรือจ่ายแล้ว ห้ามเปลี่ยนผู้แนะนำ

ไม่อนุญาตให้เพิ่ม Referral ย้อนหลังเพราะสมาชิกขอสิทธิ์ภายหลัง

# **40\. การสร้าง Reward อัตโนมัติ** {#40.-การสร้าง-reward-อัตโนมัติ}

ระบบพบว่า Case มี Payment และ Receipt  
↓  
Case ผูกกับสมาชิกใหม่หรือไม่  
↓  
สมาชิกใหม่มี Referral Relationship จาก Referral Token ที่ถูกต้องหรือไม่  
↓  
Doctor2GO ให้บริการจริงหรือไม่  
↓  
Doctor2GO ได้รับชำระเงินจริงหรือไม่  
↓  
Doctor2GO ออกใบเสร็จแล้วหรือไม่  
↓  
Case เป็นรายการซ้ำหรือไม่  
↓  
เคยสร้าง Member2GO Reward สำหรับสมาชิกใหม่นี้แล้วหรือไม่  
↓  
ยอดต่ำกว่า ฿2,000 หรือไม่  
↓  
ถ้าต่ำกว่า ส่ง Manual Review  
↓  
เมื่อผ่าน สร้าง Member2GO Reward ฿500  
↓  
เปลี่ยน Referral Status เป็น Rewarded  
↓  
หากผู้แนะนำเป็น Individual → Ready for Payment  
↓  
หากผู้แนะนำเป็น Corporate → เพิ่มใน Current Month Rewards  
↓  
ส่งข้อความ LINE ตาม Payment Schedule 

# **41\. การป้องกัน Reward ซ้ำ** {#41.-การป้องกัน-reward-ซ้ำ}

ระบบต้องบังคับว่า:

**สมาชิกใหม่หนึ่ง Member Account มี Member2GO Reward ได้หนึ่งรายการ**

Unique Rule:

Reward Type \+ Referred Member Account

ตัวอย่าง:

MEMBER2GO\_REWARD \+ DG-000245

แม้สมาชิกใหม่จะมีหลาย Case ระบบต้องไม่สร้าง Reward รายการที่สอง

# **42\. ข้อมูลที่ระบบต้องเก็บ** {#42.-ข้อมูลที่ระบบต้องเก็บ}

ระบบต้องเก็บข้อมูล Referral, Member2GO Reward และผลการตรวจสอบ Qualifying Case ให้เชื่อมโยงกันได้อย่างชัดเจน

หลักการ:

1. Referral เกิดจาก Member2GO Referral Link และ Referral Token เท่านั้น  
2. Referral Relationship ถูกสร้างเมื่อผู้ได้รับคำแนะนำสมัครสมาชิกสำเร็จ  
3. Member2GO Reward เกิดได้เพียงหนึ่งครั้งต่อสมาชิกใหม่หนึ่ง Member Account  
4. Reward เกิดเมื่อ Doctor2GO ให้บริการจริง และมีทั้ง Payment Received กับ Receipt Issued  
5. `Referred to Hospital` เป็นข้อมูลประกอบของ Case และไม่ใช่เหตุผลตัดสิทธิ์ Reward  
6. ค่าใช้จ่ายของโรงพยาบาลไม่รวมอยู่ในยอดที่ใช้ตรวจสอบ Member2GO Reward

## **42.1 Referral** {#42.1-referral}

Referral Record ใช้เก็บความสัมพันธ์ระหว่างผู้แนะนำกับสมาชิกใหม่

ข้อมูลที่ระบบต้องเก็บ:

| Field | Description |
| ----- | ----- |
| Referral ID | รหัสอ้างอิง Referral Record |
| Referrer Member Account ID | Member Account ของผู้แนะนำ |
| Referrer Member Code | Member Code ของผู้แนะนำ |
| Referred Member Account ID | Member Account ของสมาชิกใหม่ |
| Referred Member Code | Member Code ของสมาชิกใหม่ |
| Referral Link ID | Referral Link ที่สมาชิกใหม่ใช้สมัคร |
| Referral Token | Token ภายใน Referral Link |
| Referral Source | แหล่งที่มาของ Referral |
| Registration Session ID | Registration Session ที่รับ Referral Token |
| Token Validated Date and Time | วันเวลาที่ระบบตรวจสอบ Referral Token สำเร็จ |
| Referral Status | สถานะ Referral |
| Joined Date and Time | วันเวลาที่สมาชิกใหม่สมัครสำเร็จ |
| Qualifying Case ID | Case แรกที่เข้าเงื่อนไข Member2GO Reward |
| Reward ID | Member2GO Reward ที่เกิดจาก Referral นี้ |
| Created Date and Time | วันเวลาที่สร้าง Referral Record |
| Updated Date and Time | วันเวลาที่แก้ไขล่าสุด |

ค่าที่กำหนด:

**Referral Source**

MEMBER2GO\_LINK

**Referral Status**

JOINED

REWARDED

ความหมาย:

| Status | Meaning |
| ----- | ----- |
| JOINED | สมาชิกใหม่สมัครสำเร็จผ่าน Referral Link แล้ว แต่ยังไม่เกิด Member2GO Reward |
| REWARDED | สมาชิกใหม่มี Qualifying Case และระบบสร้าง Member2GO Reward แล้ว |

กฎ:

1. การเปิด Referral Link เพียงอย่างเดียวต้องไม่สร้าง Referral Record สถานะ `JOINED`  
2. ระบบสร้าง Referral Relationship เมื่อ Registration สำเร็จเท่านั้น  
3. ผู้สมัครหนึ่ง Member Account มีผู้แนะนำได้เพียงหนึ่ง Member Account  
4. ไม่อนุญาต Self-Referral  
5. ไม่อนุญาตเพิ่ม Referral ย้อนหลัง  
6. หลังสร้าง Member2GO Reward แล้ว ห้ามเปลี่ยนผู้แนะนำ  
7. การแก้ไข Referrer ก่อนเกิด Reward ทำได้เฉพาะ Technical Error ที่มีหลักฐาน และต้องมี Audit Log

## **42.2 Member2GO Reward** {#42.2-member2go-reward}

Member2GO Reward ใช้ Reward Structure เดียวกับ My Rewards

ข้อมูลที่ระบบต้องเก็บ:

| Field | Description |
| ----- | ----- |
| Reward ID | รหัส Reward |
| Reward Type | ประเภท Reward |
| Owner Member Account ID | Member Account ที่เป็นเจ้าของ Reward |
| Owner Member Code | Member Code ของผู้ได้รับ Reward |
| Referral ID | Referral Record ที่ทำให้เกิด Reward |
| Referred Member Account ID | Member Account ของสมาชิกใหม่ |
| Referred Member Code | Member Code ของสมาชิกใหม่ |
| Qualifying Case ID | Case แรกที่เข้าเงื่อนไข |
| Reward Amount | จำนวน Reward |
| Currency | สกุลเงิน |
| Payment Schedule | รอบการจ่ายของผู้แนะนำ |
| Payment Status | สถานะการจ่ายหรือการรวมรอบ |
| Eligibility Date and Time | วันเวลาที่มี Payment และ Receipt ครบและ Reward เข้าเงื่อนไข |
| Payment Received Date and Time | วันเวลาที่ Doctor2GO ได้รับชำระเงินจริง |
| Receipt Issued Date and Time | วันเวลาที่ Doctor2GO ออกใบเสร็จ |
| Monthly Statement ID | Monthly Statement ที่รวม Reward นี้ สำหรับ Corporate Member |
| Created Date and Time | วันเวลาที่สร้าง Reward |
| Paid Date and Time | วันเวลาที่จ่าย Reward แล้ว |

ค่าที่กำหนด:

**Reward Type**

MEMBER2GO\_REWARD

**Reward Amount**

500.00

**Currency**

THB

**Payment Schedule**

WITHIN\_24\_HOURS

MONTHLY\_SETTLEMENT

กฎการจ่าย:

### **Individual Member** {#individual-member-1}

เมื่อมี Payment Received และ Receipt Issued ครบ:

READY\_FOR\_PAYMENT  
↓  
PAID

ระยะเวลา 24 ชั่วโมงเริ่มนับจากเวลาที่มีทั้ง Payment และ Receipt ครบถ้วน

### **Corporate Member** {#corporate-member-1}

เมื่อ Reward เกิดระหว่างเดือน:

ACCRUED  
↓  
INCLUDED\_IN\_MONTHLY\_STATEMENT  
↓  
READY\_FOR\_PAYMENT  
↓  
PAID

`ACCRUED` และ `INCLUDED_IN_MONTHLY_STATEMENT` เป็นสถานะภายในระบบ ไม่จำเป็นต้องแสดงต่อสมาชิก

สมาชิก Corporate เห็น:

* Current Month Rewards ระหว่างเดือน  
* Ready for Payment เมื่อสร้าง Monthly Statement  
* Paid เมื่อจ่าย Monthly Statement แล้ว

## **42.3 Qualifying Case Check** {#42.3-qualifying-case-check}

Qualifying Case Check ใช้ตรวจว่า Case แรกของสมาชิกใหม่เข้าเงื่อนไขสร้าง Member2GO Reward หรือไม่

ข้อมูลที่ระบบต้องเก็บ:

| Field | Description |
| ----- | ----- |
| Case ID | Case ที่นำมาตรวจสอบ |
| Case Member Account ID | Member Account ที่ผูกกับ Case ตอนเปิด |
| Referred Member Account ID | Member Account ของสมาชิกใหม่จาก Referral |
| Guest Case | ระบุว่าเป็น Guest Case หรือไม่ |
| Service Completed | Doctor2GO ให้บริการจริงแล้วหรือไม่ |
| Service Completed Date and Time | วันเวลาที่ให้บริการเสร็จ |
| Payment Received | Doctor2GO ได้รับชำระเงินจริงแล้วหรือไม่ |
| Payment Received Date and Time | วันเวลาที่ได้รับชำระ |
| Paid to Doctor2GO Amount | ยอดที่ Doctor2GO ได้รับชำระจริง |
| Receipt Issued | Doctor2GO ออกใบเสร็จแล้วหรือไม่ |
| Receipt ID | รหัสใบเสร็จ |
| Receipt Issued Date and Time | วันเวลาที่ออกใบเสร็จ |
| Duplicate Case Check | ผลตรวจสอบ Case ซ้ำ |
| Existing Member2GO Reward Check | ตรวจว่าเคยสร้าง Reward ให้สมาชิกใหม่นี้แล้วหรือไม่ |
| Manual Review Required | ต้องตรวจสอบโดย Admin หรือไม่ |
| Manual Review Result | ผลการตรวจสอบโดย Admin |
| Referred to Hospital | Case มีการส่งต่อไปโรงพยาบาลหรือไม่ |
| Qualification Result | ผลสรุปว่า Case เข้าเงื่อนไขหรือไม่ |
| Qualification Checked Date and Time | วันเวลาที่ระบบตรวจสอบ |
| Eligibility Date and Time | วันเวลาที่ Case เข้าเงื่อนไขสร้าง Reward |

ค่าที่กำหนด:

**Manual Review Result**

NOT\_REQUIRED

PENDING

APPROVED

NOT\_APPROVED

**Qualification Result**

QUALIFIED

NOT\_QUALIFIED

เงื่อนไขหลักของ `QUALIFIED`:

1. Case ผูกกับ Referred Member Account ตั้งแต่ตอนเปิด Case  
2. Case ไม่ใช่ Guest Case  
3. Doctor2GO ให้บริการจริง  
4. `Service Completed = True`  
5. `Payment Received = True`  
6. `Receipt Issued = True`  
7. ยอดที่ Doctor2GO ได้รับชำระสามารถตรวจสอบได้  
8. Case ไม่ใช่รายการซ้ำ  
9. สมาชิกใหม่ยังไม่เคยทำให้เกิด Member2GO Reward  
10. หากยอดต่ำกว่า 2,000 บาท ต้องมี `Manual Review Result = APPROVED`

### **Referred to Hospital** {#referred-to-hospital}

`Referred to Hospital` เป็นข้อมูลประกอบของ Case เท่านั้น และไม่ใช่เหตุผลตัดสิทธิ์ Member2GO Reward

Case ที่เป็น `Referred to Hospital` ยังเป็น Qualifying Case ได้เมื่อ:

* Doctor2GO ให้บริการจริง  
* Doctor2GO ได้รับชำระเงินจริง  
* Doctor2GO ออกใบเสร็จแล้ว

ยอดที่ใช้ตรวจสอบคือเฉพาะยอดที่ชำระให้ Doctor2GO ไม่รวมค่ารักษา ค่าห้อง ค่ายา หรือค่าใช้จ่ายอื่นที่โรงพยาบาลเรียกเก็บโดยตรง.

# **43\. Privacy** {#43.-privacy}

Member2GO แสดงเฉพาะข้อมูลที่จำเป็น:

* Member Code ของสมาชิกใหม่  
* Member Type  
* Joined Date  
* Referral Status  
* Qualifying Case ID เมื่อ Reward เกิดแล้ว  
* Reward Amount

Member2GO ต้องไม่แสดง:

* ข้อมูลผู้ป่วย  
* ชื่อผู้ป่วย  
* อาการ  
* Diagnosis  
* รายชื่อยา  
* รายละเอียดการรักษา  
* ยอดค่ารักษาพยาบาล  
* เบอร์โทรศัพท์สมาชิกใหม่  
* Email  
* LINE User ID  
* เอกสารสมาชิก  
* ข้อมูลรับเงิน  
* เหตุผล Manual Review

# **44\. Error States** {#44.-error-states}

## **44.1 ไม่พบ Member Account** {#44.1-ไม่พบ-member-account}

ไม่สามารถยืนยันข้อมูลสมาชิกได้

กรุณาเปิด Member2GO ใหม่จาก LINE ของ Doctor2GO

## **44.2 Referral Link ไม่ถูกต้อง** {#44.2-referral-link-ไม่ถูกต้อง}

Referral Link ไม่พร้อมใช้งาน

คุณยังสามารถสมัครสมาชิกได้ แต่การสมัครครั้งนี้จะไม่มีผู้แนะนำ

\[สมัครสมาชิกต่อ\]

\[กลับไปขอลิงก์ใหม่\]

## **44.3 Referral Token ไม่ถูกต้องหรือถูกยกเลิก**  {#44.3-referral-token-ไม่ถูกต้องหรือถูกยกเลิก}

ไม่สามารถยืนยันลิงก์คำเชิญนี้ได้

คุณยังสามารถสมัครสมาชิกได้โดยไม่มีผู้แนะนำ

## **44.4 Self-Referral** {#44.4-self-referral}

ไม่สามารถสมัครผ่าน Member2GO Referral Link ของ Member Account เดียวกันได้ 

## **44.5 มี Member Account อยู่แล้ว** {#44.5-มี-member-account-อยู่แล้ว}

บัญชีนี้เป็นสมาชิกอยู่แล้ว

กรุณาเปิด My Profile

ระบบต้องไม่สร้าง Account หรือ Referral ซ้ำ

# **45\. สิ่งที่ไม่ทำใน Phase 1** {#45.-สิ่งที่ไม่ทำใน-phase-1}

Phase 1 ไม่ต้องมี:

* Referral Campaign หลายแบบ  
* Referral Link หลาย Link ต่อ Member Account   
* Link หมดอายุอัตโนมัติ  
* คะแนนหรือ Tier  
* Leaderboard  
* Coupon  
* Reward Wallet  
* การถอนเงินจาก Member2GO โดยตรง  
* การส่ง Reminder ให้ติดตามสมาชิกใหม่  
* Conversion Dashboard สำหรับสมาชิก  
* Link Click Count  
* Registration Started Status  
* Waiting for Case Status  
* Not Eligible Status ในหน้าสมาชิก  
* การขอ Referral ย้อนหลัง  
* การเปลี่ยนผู้แนะนำหลังเกิด Reward  
* Permission หลายระดับสำหรับ Corporate Member  
* การแสดงข้อมูลผู้ป่วยหรือยอดค่ารักษา.  
* การกรอก Referral Code หรือ Member Code เพื่อระบุผู้แนะนำ  
* การผูก Referral ย้อนหลังจาก Member Code  
* การจ่าย Corporate Reward แยกรายการนอก Monthly Statement 

# **46\. Business Rules** {#46.-business-rules}

1. Individual และ Corporate ใช้ Member2GO ระบบเดียวกัน  
2. Header ใช้ Name, Member Code และ Contact เหมือนกัน  
3. Referral เป็นของ Member Account  
4. Corporate Referral และ Reward เป็นของบริษัท  
5. ผู้ใช้งานบริษัทหลายคนสามารถแชร์ Link เดียวกันได้  
6. สมาชิกหนึ่งรายมี Referral Link หลักหนึ่ง Link  
7. Referral Link ใช้ซ้ำได้  
8. ผู้สมัครหนึ่งรายมีผู้แนะนำได้หนึ่ง Member Account  
9. Referral Attribution ต้องมาจาก Referral Link และ Referral Token ที่ถูกต้องก่อนสมัครสำเร็จ  
10. ไม่มีช่องกรอก Referral Code หรือ Member Code ผู้แนะนำ   
11. ไม่อนุญาต Referral ย้อนหลัง  
12. ไม่อนุญาต Self-Referral  
13. ต้องยืนยันเบอร์โทรศัพท์ด้วย OTP ตอนสมัคร  
14. การสมัครสำเร็จยังไม่ทำให้เกิด Reward  
15. Member2GO Reward เท่ากับ ฿500  
16. Reward เกิดเมื่อมี First Paid Case  
17. ต้องมี Service Completed, Payment Received และ Receipt Issued ครบถ้วน   
18. ยอดต่ำกว่า ฿2,000 ต้องผ่าน Manual Review  
19. Referred to Hospital ไม่ตัดสิทธิ์ Reward   
20. Reward เกิดครั้งเดียวต่อสมาชิกใหม่  
21. สมาชิกใหม่ยังได้รับ Case Reward ของตนเองตามปกติ  
22. Member2GO Reward แสดงใน My Rewards  
23. Individual จ่ายภายใน 24 ชั่วโมง โดยเริ่มนับเมื่อมี Payment และ Receipt ครบถ้วน Manual Review ไม่เริ่มเวลาใหม่   
24. Corporate Reward สะสมใน Current Month Rewards และ Ready for Payment เมื่อสร้าง Monthly Statement เท่านั้น   
25. ข้อมูลรับเงินไม่ครบไม่ทำให้ Reward หาย  
26. Referral Status ที่สมาชิกเห็นมีเพียง Joined และ Rewarded  
27. Payment Status ที่สมาชิกเห็นมีเพียง Ready for Payment และ Paid  
28. ระบบต้องป้องกันสมาชิกและ Reward ซ้ำ  
29. การแก้ไขผู้แนะนำต้องมี Audit Log  
30. ไม่แสดงข้อมูลผู้ป่วยหรือข้อมูลทางการแพทย์  
31. Reward Policy ต้องได้รับการตรวจสอบและอนุมัติก่อนเปิดใช้งานจริง  
32. หนึ่งเบอร์โทรศัพท์ที่ยืนยันแล้วเชื่อมได้กับ Member Code เดียว  
33. Corporate Member มีผู้ใช้งานหลายคนได้ แต่แต่ละคนต้องใช้เบอร์โทรศัพท์ไม่ซ้ำกัน  
34. Document Request ที่ยังไม่ได้ดำเนินการไม่ปิดกั้น Member2GO หรือทำให้ Reward หาย 

# **47\. Acceptance Criteria** {#47.-acceptance-criteria}

ระบบถือว่าพร้อมใช้งานเมื่อ:

1. สมาชิกเปิด Member2GO จาก LINE OA ได้  
2. สมาชิกไม่ต้อง Login ใหม่  
3. ระบบระบุ Member Account จาก LINE ได้  
4. Header แสดง Name, Member Code และ Contact  
5. Individual และ Corporate ใช้ Format เดียวกัน  
6. ระบบแสดง Member2GO Referral Link ที่ผูกกับ Member Account ถูกต้อง   
7. ระบบแสดง Referral Link ถูกต้อง  
8. สมาชิกแชร์ Link ผ่าน LINE ได้  
9. สมาชิกคัดลอก Link ได้  
10. ระบบสร้าง QR Code ได้  
11. QR Code เปิดหน้าสมัครพร้อม Referral ได้  
12. ผู้สมัครจาก Link ไม่ต้องกรอก Referral Code

ผู้สมัครไม่เห็นและไม่ต้องกรอก Referral Code หรือ Member Code ของผู้แนะนำ  
ระบบแสดงชื่อผู้แนะนำจาก Referral Token  
ผู้สมัครที่เปิด Registration โดยตรงไม่มีช่องกรอกผู้แนะนำ 

13. ผู้สมัครยืนยันเบอร์โทรศัพท์ด้วย OTP  
14. ระบบเชื่อมสมาชิกใหม่กับผู้แนะนำเมื่อสมัครสำเร็จ  
15. ระบบป้องกัน Self-Referral  
16. ระบบป้องกันการสมัครซ้ำ  
17. สมาชิกเห็นสถานะ Joined  
18. การสมัครยังไม่สร้าง Reward  
19. ระบบตรวจ First Paid Case ได้  
20. ต้องมี Service Completed, Payment Received และ Receipt Issued ครบถ้วน   
21. Case ที่ Referred to Hospital ยังเข้าเงื่อนไขได้   
22. Case ต่ำกว่า ฿2,000 เข้าสู่ Manual Review  
23. Manual Review ไม่แสดงต่อสมาชิก  
24. ระบบสร้าง Reward ฿500 ได้เพียงครั้งเดียว  
25. Case ถัดไปไม่สร้าง Member2GO Reward ซ้ำ  
26. Referral Status เปลี่ยนเป็น Rewarded เมื่อ Reward เกิด  
27. Reward แสดงใน My Rewards  
28. Individual Reward เริ่ม SLA 24 ชั่วโมงเมื่อมี Payment และ Receipt ครบถ้วน   
29. Corporate Reward เพิ่มใน Current Month Rewards และรวมใน Monthly Statement   
30. ระบบส่ง LINE เมื่อสมาชิกใหม่สมัคร  
31. ระบบส่ง LINE เมื่อ Reward เกิด  
32. ระบบส่ง LINE เมื่อ Reward จ่ายแล้ว  
33. Admin เปิด Referral Detail ได้  
34. การแก้ Referrer มี Audit Log  
35. Guest ใช้ Member2GO ไม่ได้  
36. เอกสารไม่ครบไม่ปิดกั้นการแชร์  
37. ข้อมูลรับเงินไม่ครบไม่ทำให้ Reward หาย  
38. Member2GO ไม่แสดงข้อมูลผู้ป่วยหรือข้อมูลทางการแพทย์  
39. ระบบป้องกันไม่ให้หนึ่งเบอร์โทรศัพท์เชื่อมกับ Member Code มากกว่าหนึ่งรายการ  
40. Referral Relationship ถูกสร้างเมื่อสมัครสำเร็จ ไม่ใช่เพียงเปิด Link  
41. Manual Review ไม่เปลี่ยนเวลาเริ่มต้นของ Reward Eligibility  
42. Corporate Reward ระหว่างเดือนไม่แสดง Ready for Payment  
43. Corporate ได้รับสถานะ Ready for Payment เมื่อ Monthly Statement ถูกสร้าง  
44. Document Request ที่ยังไม่ได้ดำเนินการไม่ปิดกั้นการแชร์ Referral Link 

# **48\. Final Flow** {#48.-final-flow}

สมาชิกกด Member2GO  
↓  
ระบบตรวจสอบ LINE Account และ Member Account  
↓  
แสดง Name, Member Code และ Contact  
↓  
แสดง Member2GO Referral Link  
↓  
สมาชิกแชร์ผ่าน LINE, Copy Link หรือ QR Code  
↓  
ผู้รับเปิด Referral Link  
↓  
ระบบตรวจสอบ Referral Token  
↓  
แสดงชื่อผู้แนะนำ  
↓  
ผู้รับสมัครสมาชิก  
↓  
ยืนยันเบอร์โทรศัพท์ด้วย SMS OTP  
↓  
ระบบตรวจสอบว่าเบอร์ไม่เชื่อมกับ Member Code อื่น  
↓  
สมัครสำเร็จและออก Member Code  
↓  
ระบบสร้าง Referral Relationship  
↓  
Referral Status: Joined  
↓  
สมาชิกใหม่เปิด Case แรก  
↓  
Doctor2GO ให้บริการ  
↓  
Doctor2GO ได้รับชำระเงินจริง  
↓  
Doctor2GO ออกใบเสร็จ  
↓  
ระบบตรวจ First Paid Case  
↓  
หากยอดต่ำกว่า ฿2,000 ให้ Admin ตรวจสอบภายใน โดยไม่เปลี่ยนเวลาเริ่มต้น  
↓  
สร้าง Member2GO Reward ฿500  
↓  
Referral Status: Rewarded  
↓  
หากผู้แนะนำเป็น Individual → Ready for Payment และจ่ายภายใน 24 ชั่วโมงนับจาก Payment \+ Receipt  
↓  
หากผู้แนะนำเป็น Corporate → เพิ่มใน Current Month Rewards และรวมใน Monthly Statement  
↓  
เมื่อจ่ายแล้ว Status: Paid 

# **Final Concept** {#final-concept}

**แชร์ง่าย สมัครง่าย และไม่ต้องติดตามเอง**

**สมัครสำเร็จยังไม่เกิด Reward**

**Reward ฿500 เกิดเมื่อสมาชิกใหม่มี Case แรกที่ Doctor2GO ให้บริการจริง ได้รับชำระเงินจริง และออกใบเสร็จแล้ว** 

**Reward เกิดครั้งเดียวต่อสมาชิกใหม่**

**Member2GO ดูเรื่องการแนะนำ ส่วนการจ่ายดูที่ My Rewards**

**Individual และ Corporate ใช้ระบบและ Format เดียวกัน**

**Referral เกิดจาก Member2GO Referral Link เท่านั้น ไม่มีการกรอก Referral Code หรือ Member Code ผู้แนะนำ**

**Case ที่ Referred to Hospital ยังคงเข้าเงื่อนไข Reward หากมี Payment และ Receipt ของ Doctor2GO**

**Individual จ่ายภายใน 24 ชั่วโมง ส่วน Corporate รวมใน Monthly Settlement**

