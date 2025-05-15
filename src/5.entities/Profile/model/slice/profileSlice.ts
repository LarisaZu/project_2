import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProfile, IProfileSchema } from "../types/profile";
import { fetchProfileData } from "../../api/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../../api/updateProfileData/updateProfileData";

const initialState: IProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
  formData: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<IProfile>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    cancelEdit: (state) => {
      state.formData = state.data;
      state.readonly = true;
      state.validateErrors = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      fetchProfileData.fulfilled,
      (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.formData = action.payload;
      }
    );
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(updateProfileData.pending, (state) => {
      state.validateErrors = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      updateProfileData.fulfilled,
      (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.formData = action.payload;
        state.readonly = true;
        state.validateErrors = undefined;
        state.error = undefined;
      }
    );
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.validateErrors = action.payload;
      state.formData = state.data;
    });
  },
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;
