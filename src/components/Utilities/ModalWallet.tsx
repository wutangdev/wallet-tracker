import React, { useRef, useState } from "react";
import { Wallet } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";
import Modal from "./Modal";

const isValidAddress = (address: string): boolean => {
  if (!address.match(/^0x[0-9a-fA-F]{40}$/)) {
    // Address is not the right length or format
    return false;
  }

  return true;
};


const ModalCreateWallet: React.FC<{
  onClose: () => void;
  wallet?: Wallet;
  nameForm: string;
  onConfirm: (wallet: Wallet) => void;
}> = ({ onClose, wallet, nameForm, onConfirm }) => {
  const [description, setDescription] = useState<string>(() => {
    if (wallet) {
      return wallet.description;
    }
    return "";
  });
  const [title, setTitle] = useState<string>(() => {
    if (wallet) {
      return wallet.title;
    }
    return "";
  });
  const [address, setAddress] = useState<string>(() => {
    if (wallet) {
      return wallet.address;
    }
    return "";
  });
  const [isAddressValid, setIsAddressValid] = useState<boolean>(false);
  const isTitleValid = useRef<boolean>(false);

  const handleAddressChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAddress(value);
    setIsAddressValid(await isValidAddress(value));
  };

  const addNewWalletHandler = (event: React.FormEvent) => {
    event.preventDefault();

    isTitleValid.current = title.trim().length > 0;

    if (isTitleValid.current && isAddressValid) {
      const newWallet: Wallet = {
        title: title,
        description: description,
        address: address,
        id: wallet?.id ? wallet.id : Date.now().toString(),
      };
      onConfirm(newWallet);
      onClose();
      console.log(newWallet);
    }
  };

  return (
    <Modal onClose={onClose} title={nameForm}>
      <form className="flex flex-col stylesInputsField" onSubmit={addNewWalletHandler}>
        <label>
          Title
          <input
            type="text"
            placeholder="Steve's Wallet"
            required
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            className="w-full"
          />
        </label>
        <label>
          Address
          <input
            type="text"
            placeholder="0x000..."
            required
            value={address}
            onChange={handleAddressChange}
            className="w-full"
          />
          {address && !isAddressValid && (
            <span className="text-red-500">Invalid Ethereum address</span>
          )}
        </label>
        <label>
          Description (optional)
          <textarea
            placeholder="The wallet of Steve"
            className="w-full"
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          ></textarea>
        </label>
        <button type="submit" className="btn mt-5" disabled={!isAddressValid}>
          {nameForm}
        </button>
      </form>
    </Modal>
  );
};

export default ModalCreateWallet;
