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
