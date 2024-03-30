import React from "react";
import { nanoid } from "nanoid";
import { Button, DatePicker, Form, Input, Radio, Select, Space } from "antd";

import style from "./EditForm.module.scss";
import InputContainer from "./InputContainer";
import { registerData } from "../../redux/store/formSlice";
import { useDispatch } from "react-redux";

const { Option } = Select;

const EditForm: React.FC = () => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    // const data = { ...values, key: nanoid() };
    // dispatch(registerData(data));
    // form.resetFields();
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className={style.container}>
      <Form
        form={form}
        name="edit-form"
        onFinish={onFinish}
        style={{ width: "100%" }}
      >
        <Form.Item name="prefix" label="Prefix" rules={[{ required: true }]}>
          <Select placeholder="Prefix" style={{ width: 80 }}>
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
          <Input name="firstName" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last name"
          rules={[{ required: true }]}
          style={{ width: "310px" }}
        >
          <Input name="lastName" />
        </Form.Item>

        <InputContainer>
          <Form.Item
            name="birthDate"
            label="Birth date"
            rules={[{ required: true }]}
          >
            <DatePicker name="birthDate" />
          </Form.Item>
          <Form.Item
            name="nationality"
            label="Nationality"
            rules={[{ required: true }]}
          >
            <Select placeholder="Nationality">
              <Option value="th">Thai</Option>
            </Select>
          </Form.Item>
        </InputContainer>

        <Form.Item name="idNumber" label="ID Number">
          <Input name="idNumber" style={{ width: "350px" }} />
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
            <Select style={{ width: 70 }}>
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
            <Input name="mobile" style={{ width: "200px" }} />
          </div>
        </Form.Item>

        <Form.Item name="passport" label="Passport">
          <Input name="passport" style={{ width: "300px" }} />
        </Form.Item>

        <InputContainer>
          <Form.Item
            name="expectedSalary"
            label="Expected salary"
            rules={[{ required: true }]}
          >
            <Input name="expectedSalary" style={{ width: "250px" }} />
          </Form.Item>
        </InputContainer>
      </Form>
    </div>
  );
};

export default EditForm;
