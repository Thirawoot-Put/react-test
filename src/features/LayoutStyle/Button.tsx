import { useTranslation } from "react-i18next";
import style from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  text: string;
  onClick: () => void;
}

function Button({ children, text, onClick }: ButtonProps) {
  const { t } = useTranslation();
  return (
    <button className={style.button} onClick={onClick}>
      {children}
      {text && <p>{t(text)}</p>}
    </button>
  );
}

export default Button;
