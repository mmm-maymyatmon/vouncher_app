import React, { useState } from 'react'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2'
import { useSWRConfig } from 'swr';
import { bouncy } from 'ldrs'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

bouncy.register()

const ProductRow = ({ product: { id, product_name, price, created_at } }) => {

    const { mutate } = useSWRConfig();
    const [isDeleting, setIsDeleting] = useState(false);

    const date = new Date(created_at);
    const currentDate = date.toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric' });
    const currentTime = date.toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit', hour12: true });

    const handleDeleteBtn = async () => {
        setIsDeleting(true);
        if (window.confirm('Are you sure you want to delete this product?')) {
            await fetch(import.meta.env.VITE_API_URL + '/products/' + id, {
                method: 'DELETE',
            })
            toast.success('Product deleted successfully');
            mutate(import.meta.env.VITE_API_URL + '/products');
        }
    }

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">
                {id}
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product_name}
            </th>
            <td className="px-6 py-4 text-end">
                {price}
            </td>
            <td className="px-6 py-4 text-end">
                <p className='text-xs'>{currentDate}</p>
                <p className='text-xs'>{currentTime}</p>
            </td>
            <td className="px-6 py-4 text-end">
                <div className="inline-flex rounded-md shadow-lg" role="group">
                    <Link to={'/product/edit/' + id}
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-l-lg transition-all  ease-in-out  dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:text-white"
                    >
                        <HiOutlinePencil className="w-5 h-5" />
                    </Link>
                    <button onClick={handleDeleteBtn}
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-r-lg transition-all  ease-in-out  dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:text-white"
                    >
                        {isDeleting ?

                            <l-bouncy
                                size="20"
                                speed="1.75"
                                color="red"
                            ></l-bouncy> : <HiOutlineTrash className="w-5 h-5 text-red-500" />}

                    </button>
                </div>
            </td>
        </tr>
    )
}

export default ProductRow