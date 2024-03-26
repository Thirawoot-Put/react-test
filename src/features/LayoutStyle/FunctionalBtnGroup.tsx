import { Col, Divider, Row } from "antd";

import Button from "./Button";
import ButtonUpDown from "./ButtonUpDown";

import style from "./FunctionalBtnGroup.module.scss";

interface Props {
  onClickRight: () => void;
  onClickLeft: () => void;
  onClickUpDown: () => void;
}

function FunctionalBtnGroup({
  onClickRight,
  onClickLeft,
  onClickUpDown,
}: Props) {
  return (
    <Row gutter={16}>
      <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
        <Button text="Move shape" onClick={onClickLeft}>
          <div className={style.triangleLeft}></div>
        </Button>
      </Col>
      <Col span={12} style={{ display: "flex", justifyContent: "center" }}>
        <ButtonUpDown text="Move position" onClick={onClickUpDown}>
          <div className={style.triangleUp}></div>
          <div className={style.triangleDown}></div>
        </ButtonUpDown>
      </Col>
      <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
        <Button text="Move shape" onClick={onClickRight}>
          <div className={style.triangleRight}></div>
        </Button>
      </Col>
      <Divider orientation="left"></Divider>
    </Row>
  );
}

export default FunctionalBtnGroup;
