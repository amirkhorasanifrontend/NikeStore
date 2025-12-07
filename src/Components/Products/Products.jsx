import React from 'react'
import Product from '../Product/Product'
import { IoIosArrowDown } from "react-icons/io";
import { RiGeminiFill } from "react-icons/ri";

// The products prop should be an array of product objects
const Products = ({ products = [] }) => {
    return (
        <>
        <section className='flex justify-center w-full dark:border-neutral-600 border-gray-400'>
          <div className='mx-8'>
          <div className='w-full border-x-2 border-b-2 dark:border-neutral-600 border-gray-400 max-w-8xl sm:px-6 lg:px-8'>
                {products.length ? (
                    <div className='flex flex-wrap'>
                         <div className='flex flex-wrap sm:-mx-7 justify-center'>
                            {products.map((product) => (
                                <div key={product.id} className='w-full sm:w-150 lg:w-1/3 xl:w-1/4 p-2'>
                                    <Product {...product} />
                                </div>
                            ))}
                         </div>
                    </div>
                ) : (
                    // Center the "No products" message
                    <p className='text-center'>There are no products !!</p>
                )}
            </div>
          </div>
        </section>
        </>
    );
}

export default Products;