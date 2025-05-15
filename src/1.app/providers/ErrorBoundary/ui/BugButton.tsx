import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "6.shared/ui-kit/Button/Button";

// для имитации ошибки
export const BugButton = () => {
  const [isError, setIsError] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (isError) {
      throw new Error();
    }
  }, [isError]);

  const handleThrowError = () => {
    setIsError(true);
  };

  return <Button onClick={handleThrowError}>{t("Вызвать ошибку")}</Button>;
};
