import { Link } from "react-router-dom";

import style from "./TestBox.module.scss";

interface Props {
  item: {
    title: string;
    description: string;
    linkTo: string;
  };
}

const TestBox = ({ item }: Props) => {
  return (
    <Link to={item.linkTo} className={style.box}>
      <div className={style.title}>{item.title}</div>
      <div>{item.description}</div>
    </Link>
  );
};

export default TestBox;
