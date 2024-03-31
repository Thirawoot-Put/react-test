import React from "react";
import { nanoid } from "nanoid";
import { Button, DatePicker, Form, Input, Radio, Select, Space } from "antd";

import style from "./RegisterForm.module.scss";
import InputContainer from "./InputContainer";
import { registerData } from "../../redux/store/formSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const { Option } = Select;

const RegisterForm: React.FC = () => {
  const { t } = useTranslation();

  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    const data = { ...values, key: nanoid() };
    dispatch(registerData(data));
    form.resetFields();
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className={style.container}>
      <Form
        form={form}
        name="register-form"
        onFinish={onFinish}
        style={{ width: "100%" }}
      >
        <InputContainer>
          <Form.Item
            name="prefix"
            label={t("Prefix")}
            rules={[{ required: true }]}
          >
            <Select placeholder={t("Prefix")} style={{ width: 80 }}>
              <Option value="mr">{t("Mr")}</Option>
              <Option value="mrs">{t("Mrs")}</Option>
              <Option value="miss">{t("Miss")}</Option>
              <Option value="ms">{t("Ms")}</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="firstName"
            label={t("First name")}
            rules={[{ required: true }]}
            style={{ width: "310px" }}
          >
            <Input name="firstName" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label={t("Last name")}
            rules={[{ required: true }]}
            style={{ width: "310px" }}
          >
            <Input name="lastName" />
          </Form.Item>
        </InputContainer>

        <InputContainer>
          <Form.Item
            name="birthDate"
            label={t("Birth date")}
            rules={[{ required: true }]}
          >
            <DatePicker name="birthDate" />
          </Form.Item>
          <Form.Item
            name="nationality"
            label={t("Nationality")}
            rules={[{ required: true }]}
          >
            <Select placeholder={t("Nationality")}>
              <Option value="th">{t("Thai")}</Option>
            </Select>
          </Form.Item>
        </InputContainer>

        <Form.Item name="idNumber" label={t("ID Number")}>
          <Input name="idNumber" style={{ width: "400px" }} />
        </Form.Item>

        <Form.Item
          name="gender"
          label={t("Gender")}
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value="male">{t("Male")}</Radio>
            <Radio value="female">{t("Female")}</Radio>
            <Radio value="lgbtq">{t("LGBTQ+")}</Radio>
            <Radio value="unspecified">{t("Unspecified")}</Radio>
          </Radio.Group>
        </Form.Item>

        <div style={{ display: "flex" }}>
          <Form.Item
            name="mobileCode"
            label={t("Mobile number")}
            rules={[{ required: true }]}
          >
            <Select style={{ width: 100 }}>
              <Option value="66">+66 (TH)</Option>
            </Select>
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
          <Form.Item name="mobile">
            <Input name="mobile" style={{ width: "300px" }} />
          </Form.Item>
        </div>

        <Form.Item name="passport" label={t("Passport")}>
          <Input name="passport" style={{ width: "300px" }} />
        </Form.Item>

        <InputContainer>
          <Form.Item
            name="expectedSalary"
            label={t("Expected salary")}
            rules={[{ required: true }]}
          >
            <Input name="expectedSalary" style={{ width: "250px" }} />
          </Form.Item>
          <Space style={{ alignItems: "start" }}>
            <Button
              htmlType="button"
              onClick={onReset}
              style={{ marginLeft: "100px" }}
            >
              {t("Clear")}
            </Button>
            <Button htmlType="submit" style={{ marginLeft: "50px" }}>
              {t("Send")}
            </Button>
          </Space>
        </InputContainer>
      </Form>
    </div>
  );
};

export default RegisterForm;
