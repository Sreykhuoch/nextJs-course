export const getAllCustomerService = async () => {
    const  res = await fetch('https://6731c5a97aaf2a9aff11fb1c.mockapi.io/api/v1/products/customer', {
        cache: "no-store",
        next: {tags: ['customer']}
    });

    const  data = await res.json();
    return data;
}



export const insertCustomerService  = async (customerData) => {
    const res = await fetch(
        'https://6731c5a97aaf2a9aff11fb1c.mockapi.io/api/v1/products/customer', {
        method: 'POST',
        body: JSON.stringify(customerData),  //CONVERT  javascrippt object to json
        headers: {
            "Content-type": "application/json"
        }
    });

    const data =  res.json
    return data;
}


export const deleteCustomerService  = async(customerId) => {
    const res =  await fetch(
        `https://6731c5a97aaf2a9aff11fb1c.mockapi.io/api/v1/products/customer/${customerId}`, {
            method: 'DELETE',
        }

    );

    const data =  res.json();
    return data;
}