"use client";

import { Edit, Trash2 } from "lucide-react";

interface UserActionsProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function UserActions({
  onEdit,
  onDelete,
}: UserActionsProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={onEdit}
        className="rounded-lg bg-yellow-500 p-2 text-white hover:bg-yellow-600"
      >
        <Edit size={18} />
      </button>

      <button
        onClick={onDelete}
        className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}