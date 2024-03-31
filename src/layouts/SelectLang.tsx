import { useTranslation } from "react-i18next";
import style from "./SelectLang.module.scss";
import i18n from "../translation/i18n";
import { useNavigate } from "react-router-dom";

function SelectLang() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <button
        onClick={() => navigate("/react-test/")}
        style={{
          paddingInline: "5px",
          background: "white",
          border: "1px solid black",
          cursor: "pointer",
        }}
      >
        {t("Home")}
      </button>
      <select
        name="lang"
        id="lang"
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">{t("EN")}</option>
        <option value="th">{t("TH")}</option>
      </select>
    </div>
  );
}

export default SelectLang;
