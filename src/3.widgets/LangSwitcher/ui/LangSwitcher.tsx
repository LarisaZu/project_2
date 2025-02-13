import { useTranslation } from "react-i18next";

import { Button } from "6.shared/ui-kit/Button/Button";
import { classNames } from "6.shared/lib";
import { memo } from "react";

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(function LangSwitcher(
  props: ILangSwitcherProps
) {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const handleLangChange = () => {
    const lang = i18n.resolvedLanguage === "ru" ? "en" : "ru";
    i18n.changeLanguage(lang);
  };

  return (
    <Button
      className={classNames("", [className])}
      variant="clear"
      onClick={handleLangChange}
    >
      {t("Язык")}
    </Button>
  );
});
