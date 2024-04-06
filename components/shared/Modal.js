"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

// icons/images.
import CloseIcon from "/public/icons/close.svg";

const Modal = ({ children }) => {
  const router = useRouter();
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  const handleClose = () => {
    router.back();
  };

  return (
    <dialog
      ref={modalRef}
      onClose={handleClose}
      className="flex flex-col p-2 border-2 rounded-lg shadow-md border-black/20 dark:border-white/20 dark:shadow-slate-400 shadow-slate-400 dark:bg-black dark:bg-opacity-95 dark:text-gray-100 no-scrollbar dark:backdrop-dark backdrop-light"
    >
      <span
        onClick={handleClose}
        className="fixed z-10 inline-block p-1 transition-all rounded-full cursor-pointer bg-slate-500/80 right-8 top-8 hover:bg-slate-400"
      >
        <Image src={CloseIcon} alt="close" width={22} height={22} />
      </span>
      {children}
    </dialog>
  );
};

export default Modal;
