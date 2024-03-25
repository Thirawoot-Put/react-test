import style from "./SelectLang.module.scss";

function SelectLang() {
  return (
    <select name="lang" id="lang" className={style.select}>
      <option value="Thai">TH</option>
      <option value="English">EN</option>
    </select>
  );
}

export default SelectLang;
