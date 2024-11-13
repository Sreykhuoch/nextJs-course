

//get dog image on random

export async function getDogService() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random", 
        {
            cache: "no-store",
        }
    ); 

    
    //convert from json to javascript object
    const data = await res.json();
    return data;
}


// get All Product

export async function getProductService() {
    const res = await fetch('https://6731c5a97aaf2a9aff11fb1c.mockapi.io/api/v1/products/products')

    //convvert from json object to js object

    const data = await res.json();
    return data;
    
}

export async function getProductById(id) {

    const res = await fetch('https://6731c5a97aaf2a9aff11fb1c.mockapi.io/api/v1/products/products'+id)  
    //  const res = await fetch(`https://6731c5a97aaf2a9aff11fb1c.mockapi.io/api/v1/products/products/${id}`) 

    const data = await res.json();
    return data;
    
}