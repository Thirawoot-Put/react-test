import { useTranslation } from "react-i18next";
import style from "./SelectLang.module.scss";
import i18n from "../translation/i18n";

function SelectLang() {
  const { t } = useTranslation();

  return (
    <select
      name="lang"
      id="lang"
      className={style.select}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      <option value="en">{t("EN")}</option>
      <option value="th">{t("TH")}</option>
    </select>
  );
}

export default SelectLang;
