import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";

// Create a custom hook that returns the typed dispatch function
const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
