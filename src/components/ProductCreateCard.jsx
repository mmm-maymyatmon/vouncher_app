import React from 'react';
import { Link } from 'react-router-dom';

const ProductCreateCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full md:w-1/2 mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Create New Product</h1>
            <p className="mb-6 text-gray-600">
                Please fill in the details below to create a new product. Ensure all information is correct.
            </p>
            <form action="">
                <div className="mb-6">
                    <label htmlFor="product_name" className="block mb-2 text-sm font-medium text-gray-700">Product Name</label>
                    <input
                        type="text"
                        id="product_name"
                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-200 ease-in-out"
                        placeholder="e.g., Apple"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        id="price"
                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-200 ease-in-out"
                        placeholder="e.g., 1000"
                        required
                    />
                </div>
                <div className="flex items-center mb-6">
                    <input
                        id="remember"
                        type="checkbox"
                        className="w-5 h-5 border border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-blue-300"
                        required
                    />
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-600">
                        Make sure all fields are correct
                    </label>
                </div>
                <div className="flex justify-between">
                    <Link to={"/product"} className="py-2 px-4 text-sm font-medium text-blue-600 bg-transparent border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out">
                        Cancel
                    </Link>
                    <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 transition duration-200 ease-in-out">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductCreateCard;
