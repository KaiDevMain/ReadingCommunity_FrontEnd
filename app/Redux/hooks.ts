import { TypeDispatch, TypeState } from "./store";
import { UseDispatch, useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

export const useAppDispatch: () => TypeDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TypeState> = useSelector;



