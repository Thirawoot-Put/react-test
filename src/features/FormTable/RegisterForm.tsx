import React, { ChangeEvent, useState } from "react";
import { nanoid } from "nanoid";
import {
  Button,
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Select,
  Space,
} from "antd";

import style from "./RegisterForm.module.scss";
import InputContainer from "./InputContainer";
import { registerData } from "../../redux/store/formSlice";
import { useDispatch } from "react-redux";

const { Option } = Select;

interface InputType {
  prefix: string;
  firstName: string;
  lastName: string;
  birthDate: string | string[];
  nationality: string;
  idNumber: string;
  gender: string;
  mobileCode: string;
  mobile: string;
  passport: string;
  expectedSalary: string;
}

const initial: InputType = {
  prefix: "",
  firstName: "",
  lastName: "",
  birthDate: "",
  nationality: "",
  idNumber: "",
  gender: "",
  mobileCode: "",
  mobile: "",
  passport: "",
  expectedSalary: "",
};

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [input, setInput] = useState<InputType>(initial);

  const onFinish = (values: any) => {
    const data = { ...input, key: nanoid() };
    dispatch(registerData(data));
    setInput(initial);
    form.resetFields();
  };

  const onReset = () => {
    form.resetFields();
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    setInput({ ...input, birthDate: dateString });
  };

  const onChangeSelect = (value: string, name: string) => {
    setInput({ ...input, [name]: value });
  };

  const onChangeRadio = (e: RadioChangeEvent) => {
    setInput({ ...input, gender: e.target.value });
  };

  // const onFill = () => {
  //   form.setFieldsValue({ note: "Hello world!", gender: "male" });
  // };

  return (
    <div className={style.container}>
      <Form
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ width: "100%" }}
      >
        <InputContainer>
          <Form.Item name="prefix" label="Prefix" rules={[{ required: true }]}>
            <Select
              placeholder="Prefix"
              style={{ width: 80 }}
              value={input.prefix}
              onChange={(value) => onChangeSelect(value, "prefix")}
            >
              <Option value="mr">Mr</Option>
              <Option value="mrs">Mrs</Option>
              <Option value="miss">Miss</Option>
              <Option value="ms">Ms</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="firstName"
            label="First name"
            rules={[{ required: true }]}
            style={{ width: "310px" }}
          >
            <Input
              name="firstName"
              onChange={onChangeInput}
              value={input.firstName}
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last name"
            rules={[{ required: true }]}
            style={{ width: "310px" }}
          >
            <Input
              name="lastName"
              onChange={onChangeInput}
              value={input.lastName}
            />
          </Form.Item>
        </InputContainer>

        <InputContainer>
          <Form.Item
            name="birthDate"
            label="Birth date"
            rules={[{ required: true }]}
          >
            <DatePicker name="birthDate" onChange={onChangeDate} />
          </Form.Item>
          <Form.Item
            name="nationality"
            label="Nationality"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Nationality"
              value={input.nationality}
              onChange={(value) => onChangeSelect(value, "nationality")}
            >
              <Option value="th">Thai</Option>
            </Select>
          </Form.Item>
        </InputContainer>

        <Form.Item name="idNumber" label="ID Number">
          <Input
            name="idNumber"
            onChange={onChangeInput}
            style={{ width: "400px" }}
          />
        </Form.Item>

        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Radio.Group onChange={onChangeRadio} value={input.gender}>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="lgbtq">LGBTQ+</Radio>
            <Radio value="unspecified">Unspecified</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="mobile"
          label="Mobile number"
          rules={[{ required: true }]}
        >
          <div style={{ display: "flex" }}>
            <Select
              style={{ width: 100 }}
              value={input.mobileCode}
              onChange={(value) => onChangeSelect(value, "mobileCode")}
            >
              <Option value="66">+66 (TH)</Option>
            </Select>
            <div
              style={{
                paddingInline: "10px",
                display: "flex",
                alignItems: "center",
                fontWeight: "600",
              }}
            >
              -
            </div>
            <Input
              name="mobile"
              value={input.mobile}
              style={{ width: "300px" }}
              onChange={onChangeInput}
            />
          </div>
        </Form.Item>

        <Form.Item name="passport" label="Passport">
          <Input
            name="passport"
            value={input.passport}
            style={{ width: "300px" }}
            onChange={onChangeInput}
          />
        </Form.Item>

        <InputContainer>
          <Form.Item
            name="expectedSalary"
            label="Expected salary"
            rules={[{ required: true }]}
          >
            <Input
              name="expectedSalary"
              value={input.expectedSalary}
              style={{ width: "250px" }}
              onChange={onChangeInput}
            />
          </Form.Item>
          <Space style={{ alignItems: "start" }}>
            <Button
              htmlType="button"
              onClick={onReset}
              style={{ marginLeft: "100px" }}
            >
              Clear
            </Button>
            <Button htmlType="submit" style={{ marginLeft: "50px" }}>
              Send
            </Button>
            {/* <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button> */}
          </Space>
        </InputContainer>
      </Form>
    </div>
  );
};

export default RegisterForm;
