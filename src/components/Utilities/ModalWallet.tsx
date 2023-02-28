import React, { useRef, useState } from "react";
import { Wallet } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";
import Modal from "./Modal";

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

  const validateAddress = (inputAddress: string) => {
    // Ethereum address validation logic here
    // Return true if the address is valid, false otherwise
    // For example:
    return inputAddress.startsWith("0x") && inputAddress.length === 42;
  };

  const addNewWalletHandler = (event: React.FormEvent): void => {
    event.preventDefault();

    isTitleValid.current = title.trim().length > 0;
    setIsAddressValid(validateAddress(address));

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
      <form
        className="flex flex-col stylesInputsField"
        onSubmit={addNewWalletHandler}
      >
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
            onChange={({ target }) => setAddress(target.value)}
            className="w-full"
          />
          {!isAddressValid && (
            <span className="text-red-500">Invalid address format</span>
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
