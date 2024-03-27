import { useTranslation } from "react-i18next";

import RegisterForm from "../features/FormTable/RegisterForm";

function FormTablePage() {
  const { t } = useTranslation();
  return (
    <div style={{ padding: "1rem", height: "100vh" }}>
      <h1 style={{ paddingBottom: "2rem" }}>{t("Form & Table")}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RegisterForm />
      </div>
    </div>
  );
}

export default FormTablePage;
