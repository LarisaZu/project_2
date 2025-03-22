import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Input } from "6.shared/ui-kit/Input/Input";
import { Button } from "6.shared/ui-kit/Button/Button";
import { classNames } from "6.shared/lib";
import {
  DynamicModuleLoader,
  TReducersList,
} from "6.shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "6.shared/lib/hooks";

import {
  commentFormActions,
  commentFormReducer,
} from "../../model/slice/addCommentFormSlice";
import { getCommentFormText } from "../../model/selectors/getCommentForm/getCommentForm";

import cls from "./AddCommentForm.module.scss";

export interface IAddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: TReducersList = {
  commentForm: commentFormReducer,
};

const AddCommentForm = memo(function AddCommentForm(
  props: IAddCommentFormProps
) {
  const { className, onSendComment } = props;

  const dispatch = useAppDispatch();
  const text = useSelector(getCommentFormText);

  const { t } = useTranslation("comments");

  const handleChange = useCallback(
    (value: string) => {
      dispatch(commentFormActions.setComment(value));
    },
    [dispatch]
  );

  const handleSendComment = useCallback(() => {
    onSendComment(text || "");
    handleChange("");
  }, [handleChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls["addComment-form"], [className])}>
        <Input
          id="comment"
          value={text}
          onChange={handleChange}
          label={t("Введите текст комментария")}
          className={cls.input}
        />
        <Button onClick={handleSendComment}>{t("Отправить")}</Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
