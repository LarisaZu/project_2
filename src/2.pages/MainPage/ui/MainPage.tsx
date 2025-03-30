import { useTranslation } from "react-i18next";

import { BugButton } from "1.app/providers/ErrorBoundary/ui/BugButton";
import { Page } from "6.shared/ui-kit/Page/Page";
import imagePng from "6.shared/lib/assets/image_png.png";

const MainPage = () => {
  const { t } = useTranslation("main");

  return (
    <Page>
      <div>{t("Главная")}</div>
      <img src={imagePng} alt="logo" />
      <BugButton />
    </Page>
  );
};

export default MainPage;
