import { useTranslation } from "react-i18next";
import style from "./ButtonUpDown.module.scss";

interface Props {
  children: React.ReactNode;
  text: string;
  onClick: () => void;
}

function ButtonUpDown({ children, text, onClick }: Props) {
  const { t } = useTranslation();
  return (
    <button className={style.buttonUpDown} onClick={onClick}>
      {children}
      <p>{t(text)}</p>
    </button>
  );
}

export default ButtonUpDown;
