import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  modalCreateWalletOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModalCreateWallet(state) {
      state.modalCreateWalletOpen = true;
    },
    closeModalCreateWallet(state) {
      state.modalCreateWalletOpen = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
