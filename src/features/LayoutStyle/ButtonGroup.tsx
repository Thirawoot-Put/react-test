import style from "./ButtonGroup.module.scss";
import { useState } from "react";
import LayoutBtnGroup from "./LayoutBtnGroup";
import FunctionalBtnGroup from "./FunctionalBtnGroup";

function ButtonGroup() {
  const [styleList, setStyleList] = useState<string[]>([
    style.square,
    style.circle,
    style.oval,
    style.trapezoid,
    style.rectangle,
    style.parallelogram,
  ]);

  const [upSideDown, setUpSideDown] = useState<boolean>(false);

  const firstList = [...styleList].splice(0, 3);
  const secondList = [...styleList].splice(3, 3);

  const handleClickRight = () => {
    const copyArr = [...styleList];
    const popOut = copyArr.pop();
    copyArr.unshift(popOut!);
    setStyleList(copyArr);
  };

  const handleClickLeft = () => {
    const copyArr = [...styleList];
    const popOut = copyArr.shift();
    copyArr.push(popOut!);
    setStyleList(copyArr);
  };

  const handleClickUpDown = () => {
    setUpSideDown((curr) => !curr);
  };

  return (
    <div className={style.container}>
      <FunctionalBtnGroup
        onClickRight={handleClickRight}
        onClickLeft={handleClickLeft}
        onClickUpDown={handleClickUpDown}
      />
      <LayoutBtnGroup
        upSideDown={upSideDown}
        firstList={firstList}
        secondList={secondList}
      />
    </div>
  );
}

export default ButtonGroup;
