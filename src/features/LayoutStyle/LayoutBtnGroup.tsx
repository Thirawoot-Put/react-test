import { nanoid } from "nanoid";

import { Col, Row } from "antd";
import Button from "./Button";

import style from "./LayoutBtnGroup.module.scss";

interface Props {
  upSideDown: boolean;
  firstList: string[];
  secondList: string[];
}

function LayoutBtnGroup({ upSideDown, firstList, secondList }: Props) {
  const className = upSideDown
    ? style.container_up_down
    : style.container_normal;
  return (
    <div className={className}>
      <Row gutter={16} justify="center">
        <Col span={6}></Col>
        {firstList.map((el) => (
          <Col
            key={nanoid()}
            style={{ display: "flex", justifyContent: "center" }}
            span={6}
          >
            <Button text="">
              <div className={el}></div>
            </Button>
          </Col>
        ))}
      </Row>
      <Row gutter={16} justify="center">
        {secondList.map((el) => (
          <Col
            key={nanoid()}
            style={{ display: "flex", justifyContent: "center" }}
            span={6}
          >
            <Button text="">
              <div className={el}></div>
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default LayoutBtnGroup;
