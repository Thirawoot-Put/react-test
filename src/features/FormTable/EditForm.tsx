import React from "react";
import { DatePicker, Form, Input, Radio, Select } from "antd";

import style from "./EditForm.module.scss";
import InputContainer from "./InputContainer";
import { useTranslation } from "react-i18next";

const { Option } = Select;

interface Props {
  edit: any;
  onChange: (e: any) => void;
}

const EditForm: React.FC<Props> = ({ edit, onChange }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  return (
    <div className={style.container}>
      <Form form={form} name="edit-form" style={{ width: "100%" }}>
        <Form.Item
          name="prefix"
          label={t("Prefix")}
          rules={[{ required: true }]}
        >
          <div>
            <Select
              placeholder={t("Prefix")}
              value={edit?.prefix}
              onChange={onChange}
              style={{ width: 80 }}
            >
              <Option value="mr">{t("Mr")}</Option>
              <Option value="mrs">{t("Mrs")}</Option>
              <Option value="miss">{t("Miss")}</Option>
              <Option value="ms">{t("Ms")}</Option>
            </Select>
          </div>
        </Form.Item>
        <Form.Item
          name="firstName"
          label={t("First name")}
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
          label={t("Last name")}
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
            label={t("Birth date")}
            rules={[{ required: true }]}
          >
            <DatePicker name="birthDate" onChange={onChange} />
          </Form.Item>
          <Form.Item
            name="nationality"
            label={t("Nationality")}
            rules={[{ required: true }]}
          >
            <div>
              <Select
                placeholder={t("Nationality")}
                value={edit?.nationality}
                onChange={onChange}
              >
                <Option value="th">{t("Thai")}</Option>
              </Select>
            </div>
          </Form.Item>
        </InputContainer>

        <Form.Item name="idNumber" label={t("ID Number")}>
          <div>
            <Input
              name="idNumber"
              value={edit?.idNumber}
              onChange={onChange}
              style={{ width: "250px" }}
            />
          </div>
        </Form.Item>

        <Form.Item
          name="gender"
          label={t("Gender")}
          rules={[{ required: true }]}
        >
          <div>
            <Radio.Group value={edit?.gender} onChange={onChange}>
              <Radio value="male">{t("Male")}</Radio>
              <Radio value="female">{t("Female")}</Radio>
              <Radio value="lgbtq">{t("LGBTQ+")}</Radio>
              <Radio value="unspecified">{t("Unspecified")}</Radio>
            </Radio.Group>
          </div>
        </Form.Item>

        <div style={{ display: "flex" }}>
          <Form.Item
            name="mobileCode"
            label={t("Mobile number")}
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

        <Form.Item name="passport" label={t("Passport")}>
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
            label={t("Expected salary")}
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
