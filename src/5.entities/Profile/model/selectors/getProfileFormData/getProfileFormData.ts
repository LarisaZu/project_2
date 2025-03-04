import { IStateSchema } from "1.app/providers/StoreProvider";

export const getProfileFormData = (state: IStateSchema) =>
  state?.profile?.formData;
