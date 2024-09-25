import React from 'react'
import { HiComputerDesktop, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const VoucherList = () => {
    return (


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex justify-between p-3">
                <form className='w-1/5'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Voucher" required />
                    </div>
                </form>
                <Link to={"/sale"} className="flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center">Create Sale <HiComputerDesktop className='ml-2' /></Link>
            </div>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Voucher Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-end">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-end">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-end">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hidden last:table-row">
                        <td colSpan={5} className="px-6 py-4 text-center">
                            There is no Voucher.
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">
                            #1412
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Mg Mg
                        </th>
                        <td className="px-6 py-4 text-end">
                            mgmg@gmail.com
                        </td>
                        <td className="px-6 py-4 text-end">
                            <p className='text-xs'>25 Sep 2024</p>
                            <p className='text-xs'>1:06 PM</p>
                        </td>

                        <td className="px-6 py-4  text-end">
                            <div className="inline-flex rounded-md shadow-lg" role="group">
                                <button
                                    type="button"
                                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-l-lg transition-all  ease-in-out  dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:text-white"
                                >
                                    <HiOutlinePencil className="w-5 h-5" />
                                </button>
                                <button
                                    type="button"
                                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-r-lg transition-all  ease-in-out  dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:text-white"
                                >
                                    <HiOutlineTrash className="w-5 h-5 text-red-500" />
                                </button>
                            </div>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default VoucherList