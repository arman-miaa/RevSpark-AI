// src/redux/hooks.js
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { setUser, clearUser } from "./features/auth/authSlice";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export const useAuthActions = () => {
  const dispatch = useAppDispatch();
  const setAuthUser = useCallback(
    (user) => dispatch(setUser(user)),
    [dispatch]
  );
  const logoutUser = useCallback(() => dispatch(clearUser()), [dispatch]);
  return { setAuthUser, logoutUser };
};
