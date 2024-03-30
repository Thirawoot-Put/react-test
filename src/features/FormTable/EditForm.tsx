import React from "react";
import { nanoid } from "nanoid";
import { Button, DatePicker, Form, Input, Radio, Select, Space } from "antd";

import style from "./EditForm.module.scss";
import InputContainer from "./InputContainer";
import { editData, registerData } from "../../redux/store/formSlice";
import { useDispatch } from "react-redux";

const { Option } = Select;

interface Props {
  edit: any;
  onChange: (e: any) => void;
}

const EditForm: React.FC<Props> = ({ edit, onChange }) => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    // const data = { ...values, key: nanoid() };
    // dispatch(registerData(data));
    // form.resetFields();
    console.log(values);
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
          <div>
            <Select
              placeholder="Prefix"
              value={edit?.prefix}
              onChange={onChange}
              style={{ width: 80 }}
            >
              <Option value="mr">Mr</Option>
              <Option value="mrs">Mrs</Option>
              <Option value="miss">Miss</Option>
              <Option value="ms">Ms</Option>
            </Select>
          </div>
        </Form.Item>
        <Form.Item
          name="firstName"
          label="First name"
          rules={[{ required: true }]}
          style={{ width: "310px" }}
        >
          <div>
            <Input
              name="firstName"
              value={edit?.firstName}
              onChange={onChange}
            />
          </div>
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last name"
          rules={[{ required: true }]}
          style={{ width: "310px" }}
        >
          <div>
            <Input name="lastName" value={edit?.lastName} onChange={onChange} />
          </div>
        </Form.Item>

        <InputContainer>
          <Form.Item
            name="birthDate"
            label="Birth date"
            rules={[{ required: true }]}
          >
            <DatePicker name="birthDate" onChange={onChange} />
          </Form.Item>
          <Form.Item
            name="nationality"
            label="Nationality"
            rules={[{ required: true }]}
          >
            <div>
              <Select
                placeholder="Nationality"
                value={edit?.nationality}
                onChange={onChange}
              >
                <Option value="th">Thai</Option>
              </Select>
            </div>
          </Form.Item>
        </InputContainer>

        <Form.Item name="idNumber" label="ID Number">
          <div>
            <Input
              name="idNumber"
              value={edit?.idNumber}
              onChange={onChange}
              style={{ width: "350px" }}
            />
          </div>
        </Form.Item>

        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <div>
            <Radio.Group value={edit?.gender} onChange={onChange}>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="lgbtq">LGBTQ+</Radio>
              <Radio value="unspecified">Unspecified</Radio>
            </Radio.Group>
          </div>
        </Form.Item>

        <div style={{ display: "flex" }}>
          <Form.Item
            name="mobileCode"
            label="Mobile number"
            rules={[{ required: true }]}
          >
            <div>
              <Select
                value={edit?.mobileCode}
                onChange={onChange}
                style={{ width: 60 }}
              >
                <Option value="66">+66 (TH)</Option>
              </Select>
            </div>
          </Form.Item>
          <div
            style={{
              paddingInline: "10px",
              display: "flex",
              fontWeight: "600",
            }}
          >
            -
          </div>
          <Form.Item name="mobile" rules={[{ required: true }]}>
            <div>
              <Input
                name="mobile"
                value={edit?.mobile}
                onChange={onChange}
                style={{ width: "250px" }}
              />
            </div>
          </Form.Item>
        </div>

        <Form.Item name="passport" label="Passport">
          <div>
            <Input
              name="passport"
              value={edit?.passport}
              onChange={onChange}
              style={{ width: "300px" }}
            />
          </div>
        </Form.Item>

        <InputContainer>
          <Form.Item
            name="expectedSalary"
            label="Expected salary"
            rules={[{ required: true }]}
          >
            <div>
              <Input
                name="expectedSalary"
                value={edit?.expectedSalary}
                onChange={onChange}
                style={{ width: "250px" }}
              />
            </div>
          </Form.Item>
        </InputContainer>
      </Form>
    </div>
  );
};

export default EditForm;
