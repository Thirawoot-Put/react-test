import i18n from "i18next";
import { initReactI18next } from "react-i18next";

interface Translation {
  EN: string;
  TH: string;
  "Test 1": string;
  "Test 2": string;
  "Layout & Style": string;
  "Form & Table": string;
  "Move shape": string;
  "Move position": string;
  Prefix: string;
  "First name": string;
  "Last name": string;
  "Birth date": string;
  Nationality: string;
  "ID Number": string;
  Gender: string;
  "Mobile number": string;
  Passport: string;
  "Expected salary": string;
  Clear: string;
  Send: string;
  Mr: string;
  Mrs: string;
  Miss: string;
  Ms: string;
  Thai: string;
  Male: string;
  Female: string;
  "LGBTQ+": string;
  Unspecified: string;
  Name: string;
  Edit: string;
  Cancel: string;
  Save: string;
  Home: string;
}

const translationEn: Translation = {
  EN: "EN",
  TH: "TH",
  "Test 1": "Test 1",
  "Test 2": "Test 2",
  "Layout & Style": "Layout & Style",
  "Form & Table": "Form & Table",
  "Move shape": "Move shape",
  "Move position": "Move position",
  Prefix: "Prefix",
  "First name": "First name",
  "Last name": "Last name",
  "Birth date": "Birth date",
  Nationality: "Nationality",
  "ID Number": "ID Number",
  Gender: "Gender",
  "Mobile number": "Mobile number",
  Passport: "Passport",
  "Expected salary": "Expected salary",
  Clear: "Clear",
  Send: "Send",
  Mr: "Mr",
  Mrs: "Mrs",
  Miss: "Miss",
  Ms: "Ms",
  Thai: "Thai",
  Male: "Male",
  Female: "Female",
  "LGBTQ+": "LGBTQ+",
  Unspecified: "Unspecified",
  Name: "Name",
  Edit: "Edit",
  Cancel: "Cancel",
  Save: "Save",
  Home: "Home",
};

const translationTh: Translation = {
  EN: "อังกฤษ",
  TH: "ไทย",
  "Test 1": "แบบทดสอบที่ 1",
  "Test 2": "แบบทดสอบที่ 2",
  "Layout & Style": "การจัดการหน้าเว็บ",
  "Form & Table": "การจัดการหน้าฟอร์ม",
  "Move shape": "เลื่อนรูปแบบ",
  "Move position": "เปลี่ยนตำแหน่ง",
  Prefix: "คำนำหน้า",
  "First name": "ชื่อ",
  "Last name": "นามสกุล",
  "Birth date": "วัน/เดือน/ปี เกิด",
  Nationality: "สัญชาติ",
  "ID Number": "หมายเลขประจำตัวประชาชน",
  Gender: "เพศ",
  "Mobile number": "หมายเลขโทรศัพท์",
  Passport: "พาสปอาร์ต",
  "Expected salary": "เงินเดือนที่คาดหวัง",
  Clear: "ล้าง",
  Send: "ส่ง",
  Mr: "นาย",
  Mrs: "นาง",
  Miss: "นางสาว",
  Ms: "นาง/นางสาว",
  Thai: "ไทย",
  Male: "ชาย",
  Female: "หญิง",
  "LGBTQ+": "LGBTQ+",
  Unspecified: "ไม่ระบุ",
  Name: "ชื่อ",
  Edit: "แก้ไข",
  Cancel: "ยกเลิก",
  Save: "บันทึก",
  Home: "หน้าหลัก",
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    th: { translation: translationTh },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
