import Button from "./Button";
import ButtonUpDown from "./ButtonUpDown";
import style from "./ButtonGroup.module.scss";
import { Col, Divider, Row } from "antd";
import { useState } from "react";

function ButtonGroup() {
  const [styleList, setStyleList] = useState<string[]>([
    style.square,
    style.circle,
    style.oval,
    style.trapezoid,
    style.rectangle,
    style.parallelogram,
  ]);

  const handleClickRight = () => {
    const copyArr = [...styleList];
    const popOut = copyArr.pop();
    copyArr.unshift(popOut!);
    setStyleList(copyArr);
  };

  return (
    <div className={style.container}>
      <Row gutter={16}>
        <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
          <Button text="Move shape">
            <div className={style.triangleLeft}></div>
          </Button>
        </Col>
        <Col span={12} style={{ display: "flex", justifyContent: "center" }}>
          <ButtonUpDown text="Move position">
            <div className={style.triangleUp}></div>
            <div className={style.triangleDown}></div>
          </ButtonUpDown>
        </Col>
        <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
          <Button text="Move shape" onClick={handleClickRight}>
            <div className={style.triangleRight}></div>
          </Button>
        </Col>
        <Divider orientation="left"></Divider>
      </Row>
      <Row gutter={16} justify="center">
        <Col
          style={{ display: "flex", justifyContent: "center" }}
          span={6}
          offset={6}
        >
          <Button text="">
            <div className={styleList[0]}></div>
          </Button>
        </Col>
        <Col style={{ display: "flex", justifyContent: "center" }} span={6}>
          <Button text="">
            <div className={styleList[1]}></div>
          </Button>
        </Col>
        <Col style={{ display: "flex", justifyContent: "center" }} span={6}>
          <Button text="">
            <div className={styleList[2]}></div>
          </Button>
        </Col>
      </Row>
      <Row gutter={16} justify="center" style={{ paddingTop: "1rem" }}>
        <Col style={{ display: "flex", justifyContent: "center" }} span={6}>
          <Button text="">
            <div className={styleList[3]}></div>
          </Button>
        </Col>
        <Col style={{ display: "flex", justifyContent: "center" }} span={6}>
          <Button text="">
            <div className={styleList[4]}></div>
          </Button>
        </Col>
        <Col style={{ display: "flex", justifyContent: "center" }} span={6}>
          <Button text="">
            <div className={styleList[5]}></div>
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ButtonGroup;
