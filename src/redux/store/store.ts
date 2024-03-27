import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import { formReducer } from "../reducers/formReducer";

const rootMiddleWare = composeWithDevTools(applyMiddleware());

export const store = createStore(formReducer, rootMiddleWare);
