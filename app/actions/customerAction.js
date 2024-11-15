"use server"; //so that  it will be execute on server side component

import { revalidateTag } from "next/cache";
import { deleteCustomerService, insertCustomerService } from "../customer/services/CustomerService";

export async function handleCustomer(customerInput) {
   

    //define object structure :

    const newCustomer = {
      customerName: customerInput.get("customerName"),
      address: customerInput.get("address"),
    };

    console.log("new customer : ", newCustomer);


    //calling server for insert customer : 
    await insertCustomerService(newCustomer);

     //calling revalidate tags 

     revalidateTag('customer');

  }        
  


  //delete  custommer aciton to make  it real time

  export async function deleteCustomerAction(customerId) {

  //callinng service

  await deleteCustomerService(customerId);

  // calling revalidate tags 
  revalidateTag('customer')
    
  }