import { nanoid } from "nanoid";

import TestBox from "./TestBox";

import style from "./TestList.module.scss";

export interface Test {
  title: string;
  description: string;
  linkTo: string;
}

function TestList() {
  const test1: Test = {
    title: "Test 1",
    description: "Layout & Style",
    linkTo: "/react-test/layout-style",
  };
  const test2: Test = {
    title: "Test 2",
    description: "Form & Table",
    linkTo: "/react-test/form",
  };
  const list: Test[] = [test1, test2];

  return (
    <div className={style.list}>
      {list.map((item) => (
        <TestBox key={nanoid()} item={item} />
      ))}
    </div>
  );
}

export default TestList;
