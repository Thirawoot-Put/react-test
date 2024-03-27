import React from "react";
import {
  Button,
  DatePicker,
  DatePickerProps,
  Form,
  Input,
  Radio,
  Select,
  Space,
} from "antd";

import style from "./RegisterForm.module.scss";
import InputContainer from "./InputContainer";

const { Option } = Select;

const RegisterForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
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
              // value={}
              // onChange={}
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
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last name"
            rules={[{ required: true }]}
            style={{ width: "310px" }}
          >
            <Input />
          </Form.Item>
        </InputContainer>

        <InputContainer>
          <Form.Item
            name="birthDate"
            label="Birth date"
            rules={[{ required: true }]}
          >
            <DatePicker onChange={onChangeDate} />
          </Form.Item>
          <Form.Item
            name="nationality"
            label="Nationality"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Nationality"
              // value={}
              // onChange={}
            >
              <Option value="th">Thai</Option>
            </Select>
          </Form.Item>
        </InputContainer>

        <Form.Item name="idNumber" label="ID Number">
          <Input style={{ width: "400px" }} />
        </Form.Item>

        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Radio.Group>
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
              // value={}
              // onChange={}
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
            <Input style={{ width: "300px" }} />
          </div>
        </Form.Item>

        <Form.Item name="passport" label="Passport">
          <Input style={{ width: "300px" }} />
        </Form.Item>

        <InputContainer>
          <Form.Item
            name="expectedSalary"
            label="Expected salary"
            rules={[{ required: true }]}
          >
            <Input style={{ width: "250px" }} />
          </Form.Item>
          <Space style={{ alignItems: "start" }}>
            <Button
              htmlType="button"
              onClick={onReset}
              style={{ marginLeft: "100px" }}
            >
              Reset
            </Button>
            <Button htmlType="submit" style={{ marginLeft: "50px" }}>
              Submit
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
