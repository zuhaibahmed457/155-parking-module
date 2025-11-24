import { RootState } from "@/store/store";
import { useSelector, TypedUseSelectorHook } from "react-redux";
// Create a typed selector hook for your state
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
