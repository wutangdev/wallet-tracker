import { configureStore } from "@reduxjs/toolkit";
import tasksReducer, { tasksMiddleware } from "./Tasks.store";
import walletsReducer, { walletsMiddleware } from "./Wallets.store"
import modalReducer from "./Modal.store";
import menuReducer from "./Menu.store";

// const store = configureStore({
//   reducer: { tasks: tasksReducer, modal: modalReducer, menu: menuReducer },
//   middleware: (getDefaultMiddleware: any) =>
//     getDefaultMiddleware().concat(tasksMiddleware),
// });

const store = configureStore({
  reducer: { wallets: walletsReducer, modal: modalReducer, menu: menuReducer },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(walletsMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export default store;
