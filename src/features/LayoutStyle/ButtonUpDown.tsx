import { useTranslation } from "react-i18next";
import style from "./ButtonUpDown.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  text: string;
}

function ButtonUpDown({ children, text }: ButtonProps) {
  const { t } = useTranslation();
  return (
    <button className={style.buttonUpDown}>
      {children}
      <p>{t(text)}</p>
    </button>
  );
}

export default ButtonUpDown;
