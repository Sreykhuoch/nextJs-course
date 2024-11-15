import { handleCustomer } from "@/app/actions/customerAction";
import React from "react";


const FormCustomerComponent = () => {
  

  //this is without customerAction
  // async function handleCustomer(customerInput) {
  //   "use server"; //so that  it will be execute on server side component

  //   //define object structure :

  //   const newCustomer = {
  //     customerName: customerInput.get("customerName"),
  //     address: customerInput.get("address"),
  //   };

  //   console.log("new customer : ", newCustomer);


  //   //calling server for insert customer : 
  //   await insertCustomerService(newCustomer);

  //    //calling revalidate tags 

  //    revalidateTag('customer');

  // }


  return (
    <div>
      <form className="max-w-sm mx-auto" action={handleCustomer}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Customer Name
          </label>
          <input
            type="text"
            name="customerName" //dak  tam api
            id="customerName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add customer
        </button>
      </form>
    </div>
  );
};

export default FormCustomerComponent;
