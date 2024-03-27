import { useTranslation } from "react-i18next";

import RegisterForm from "../features/FormTable/RegisterForm";
import TableData from "../features/FormTable/TableData";

function FormTablePage() {
  const { t } = useTranslation();
  return (
    <div style={{ padding: "1rem", height: "100vh" }}>
      <h1 style={{ paddingBottom: "10px" }}>{t("Form & Table")}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "10px",
        }}
      >
        <RegisterForm />
      </div>
      <TableData />
    </div>
  );
}

export default FormTablePage;
