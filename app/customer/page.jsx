// this is segment. 

import React from 'react'
import TableCustomerComponennt from './_components/TableComponent'
import FormCustomerComponent from './_components/FormCustomerComponent'
import { getAllCustomerService } from './services/CustomerService'

const CustomerPage = async () => {

    const CustomerData  =  await getAllCustomerService();
  return (
    <main>
        <h1 className='font-bold  text-center mt-10 text-3xl text-red-500
        '>
          Customer List
        </h1>
        <section className='flex justify-evenly mt-10
        '> 

            {/* Form compoent */}

            <FormCustomerComponent />
                {/*Table components  */}
             <div>
                <TableCustomerComponennt CustomerData ={CustomerData}/>
             </div>
                </section>
    </main>
  )
}

export default CustomerPage
