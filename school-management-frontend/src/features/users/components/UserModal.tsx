"use client";

import { ReactNode } from "react";

interface UserModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function UserModal({
  open,
  onClose,
  children,
}: UserModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-lg rounded-xl bg-white p-6">

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">
            User Form
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>
        </div>

        {children}

      </div>
    </div>
  );
}