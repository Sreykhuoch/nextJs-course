"use client";

import { deleteCustomerAction } from "@/app/actions/customerAction";

const DeleteComponent = ({CustomerId}) => {
  return (
    <div>
      <button 
      onClick={() => deleteCustomerAction(CustomerId)}
      className="font-medium text-red-500 hover:underline">
        Delete
      </button>
    </div>
  );
};

export default DeleteComponent;
