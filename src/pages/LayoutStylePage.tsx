import { useTranslation } from "react-i18next";
import ButtonGroup from "../features/LayoutStyle/ButtonGroup";

function LayoutStylePage() {
  const { t } = useTranslation();
  return (
    <div style={{ padding: "1rem", height: "100vh" }}>
      <h1 style={{ paddingBottom: "2rem" }}>{t("Layout & Style")}</h1>
      <ButtonGroup />
    </div>
  );
}

export default LayoutStylePage;
