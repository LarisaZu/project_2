import { useDispatch } from "react-redux";
import { AppDispatch } from "1.app/providers/StoreProvider";

export const useAppDispatch = () => useDispatch<AppDispatch>();
