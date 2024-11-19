import { useTranslation } from "react-i18next";
import imagePng from "6.shared/lib/assets/image_png.png";

const MainPage = () => {
  const { t } = useTranslation("main");

  return (
    <div>
      <div>{t("Главная")}</div>
      <img src={imagePng} alt="logo" />
    </div>
  );
};

export default MainPage;
