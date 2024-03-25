import { Link } from "react-router-dom";

import style from "./TestBox.module.scss";
import { useTranslation } from "react-i18next";

interface Props {
  item: {
    title: string;
    description: string;
    linkTo: string;
  };
}

const TestBox = ({ item }: Props) => {
  const { t } = useTranslation();
  return (
    <Link to={item.linkTo} className={style.box}>
      <div className={style.title}>{t(item.title)}</div>
      <div>{t(item.description)}</div>
    </Link>
  );
};

export default TestBox;
