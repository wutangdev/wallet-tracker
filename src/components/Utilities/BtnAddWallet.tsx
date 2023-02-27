import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";

const BtnAddWallet: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useAppDispatch();

  const onOpenModal = () => {
    dispatch(modalActions.openModalCreateWallet());
  };
  return (
    <>
      <button className={`btn  ${className}`} onClick={onOpenModal}>
        Add new wallet
      </button>
    </>
  );
};

export default BtnAddWallet;
