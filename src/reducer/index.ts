import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./AuthReducer";
import {useDispatch} from "react-redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

export type AppDispatch = ThunkDispatch<typeof rootReducer, any, AnyAction>
export type AppAction<T> = ThunkAction<Promise<T>, any, any, AnyAction>

export const useAppDispatch = (): AppDispatch => useDispatch()

const rootReducer = combineReducers(authReducer)

export default rootReducer
