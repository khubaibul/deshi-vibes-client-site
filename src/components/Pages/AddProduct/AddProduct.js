import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useAddProductMutation } from '../../../features/products/productsSlice';
import Spinner from '../../Shared/Spinner/Spinner';

const AddProduct = () => {
    const [tick, setTick] = useState(false);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState("Men");
    const [postProduct, { data, isError, error, isLoading, isSuccess }] = useAddProductMutation();
    const { user } = useSelector(state => state.auth);

    console.log(data);

    useEffect(() => {
        if (isLoading) {
            toast.loading("Adding Product...", { id: "addProduct" })
        }
        if (isSuccess) {
            toast.success("Product Added", { id: "addProduct" });

        }
    }, [isLoading, isSuccess, loading]);


    const handleAddProduct = e => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const category = form.category.value;
        const lineup = form.lineup.value;
        const image = form.image.files[0];
        const material = form.material.value;
        const size = form.size.value;
        const quantity = parseInt(form.quantity.value);
        const price = parseInt(form.price.value);
        const description = form.description.value;


        // Upload Image Into Cloudinary
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "Deshi_Vibes");
        data.append("cloud_name", "dou96vwyp");

        fetch("https://api.cloudinary.com/v1_1/dou96vwyp/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                if (data.asset_id) {

                    const product = {
                        name: productName,
                        category,
                        lineup,
                        quantity,
                        sell: 0,
                        price,
                        image: data.secure_url,
                        material,
                        size,
                        description
                    }
                    postProduct(product)
                    setLoading(false);
                    form.reset();
                }
            })
    }


    return (
        <section className="lg:w-1/3 md:w-2/3 w-full px-4 lg:px-0 md:px-0 mx-auto md:my-16 overflow-hidden">
            <div className="border border-primary shadow-md">
                <div className="flex">
                    <h4 className='bg-primary text-center py-2 text-white w-full'>Add Product</h4>
                </div>
                <div className="p-10">
                    <form onSubmit={handleAddProduct} className="flex flex-col gap-4">
                        <div>
                            <label className='text-sm text-primary font-medium' htmlFor="productName" value="Product Name">Product Name</label>
                            <input
                                name="productName"
                                id="productName"
                                type="productName"
                                className='w-full py-1 px-4 focus:outline-primary bg-gray-light'
                                placeholder="Product Name"
                                required={true}
                            />
                        </div>
                        <div className='flex gap-x-3'>
                            <div className='flex flex-col w-full'>
                                <label className='text-sm text-primary font-medium' htmlFor="category" value="Category">Category</label>
                                <select
                                    onChange={(e) => setCategory(e.target.value)}
                                    name="category"
                                    id="category"
                                    className='w-full py-1 px-2 focus:outline-primary bg-gray-light'
                                    required={true}
                                >
                                    <option value="Men">Men</option>
                                    <option value="Women">Women</option>
                                    <option value="Kids">Kids</option>
                                    <option value="Accessories">Accessories</option>
                                </select>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label className='text-sm text-primary font-medium' htmlFor="lineup" value="Lineup">Lineup</label>
                                {
                                    category === "Men" &&
                                    <select
                                        name="lineup"
                                        id="lineup"
                                        className='w-full py-1 px-2 focus:outline-primary bg-gray-light'
                                        required={true}
                                    >
                                        <option value="T-Shirt">T-Shirt</option>
                                        <option value="Hoodie">Hoodie</option>
                                        <option value="Pant">Pant</option>
                                        <option value="Shoes">Shoes</option>
                                    </select>
                                }
                                {
                                    category === "Women" &&
                                    <select
                                        name="lineup"
                                        id="lineup"
                                        className='w-full py-1 px-2 focus:outline-primary bg-gray-light'
                                        required={true}
                                    >
                                        <option value="Tops">Tops</option>
                                        <option value="Shoes">Shoes</option>
                                    </select>
                                }
                                {
                                    category === "Kids" &&
                                    <select
                                        name="lineup"
                                        id="lineup"
                                        className='w-full py-1 px-2 focus:outline-primary bg-gray-light'
                                        required={true}
                                    >
                                        <option value="Tops">Tops</option>
                                        <option value="Shirt">Shirt</option>
                                        <option value="Pant">Pant</option>
                                        <option value="Shoes">Shoes</option>
                                    </select>
                                }
                                {
                                    category === "Accessories" &&
                                    <select
                                        name="lineup"
                                        id="lineup"
                                        className='w-full py-1 px-2 focus:outline-primary bg-gray-light'
                                        required={true}
                                    >
                                        <option value="Watch">Watch</option>
                                        <option value="Hat">Hat</option>
                                        <option value="Bracelet">Bracelet</option>
                                    </select>
                                }
                            </div>
                        </div>
                        <div className='flex gap-x-3'>
                            <div className='w-full'>
                                <label className='text-sm text-primary font-medium' htmlFor="material" value="Material">Material</label>
                                <input
                                    name="material"
                                    id="material"
                                    type="text"
                                    className='w-full py-1 px-4 focus:outline-primary bg-gray-light'
                                    placeholder="Cotton"
                                    required={true}
                                />
                            </div>
                            <div className='w-full'>
                                <label className='text-sm text-primary font-medium' htmlFor="size" value="Size">Size</label>
                                <select
                                    name="size"
                                    id="size"
                                    className='w-full py-1 px-2 focus:outline-primary bg-gray-light'
                                    required={true}
                                >
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="2XL">2XL</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='image' className='text-sm text-primary font-medium'>
                                Product Image
                            </label>
                            <input
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                className='w-full px-2 py-1 focus:outline-primary bg-gray-light'
                                required={true}
                            />
                        </div>
                        <div className='flex gap-x-3'>
                            <div>
                                <label className='text-sm text-primary font-medium' htmlFor="quantity" value="Product Quantity">Product Quantity</label>
                                <input
                                    name="quantity"
                                    id="quantity"
                                    type="number"
                                    className='w-full py-1 px-4 focus:outline-primary bg-gray-light'
                                    placeholder="12"
                                    required={true}
                                />
                            </div>
                            <div>
                                <label className='text-sm text-primary font-medium' htmlFor="price" value="Price">Price</label>
                                <input
                                    name="price"
                                    id="price"
                                    type="number"
                                    className='w-full py-1 px-4 focus:outline-primary bg-gray-light'
                                    placeholder="$99"
                                    required={true}
                                />
                            </div>
                        </div>
                        <div>
                            <label className='text-sm text-primary font-medium' htmlFor="description" value="Price">Description</label>
                            <input
                                name="description"
                                id="description"
                                type="text"
                                className='w-full py-1 px-4 focus:outline-primary bg-gray-light'
                                placeholder="String caps extend the lifespan on every Core Hoodie."
                                required={true}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                name="tick"
                                id="tick"
                                type="checkbox"
                                onChange={() => setTick(!tick)}
                                className="accent-primary"
                                required={true}
                            />
                            <label className='text-sm text-primary font-medium' htmlFor="tick">Every information are accurate</label>
                        </div>
                        <button
                            className={`bg-[#183661] hover:bg-[#183675] py-1 px-4 cursor-pointer font-medium text-white ${!tick && "cursor-not-allowed opacity-50"}`}
                            type="submit"
                            value="Add Product"
                            disabled={!tick}
                        >
                            {loading ? <Spinner borderColor={"primary"} /> : "Add Product"}
                        </button>
                    </form>
                    {isError && <small className="text-red-500 mt-2">{error}</small>}
                </div>
            </div>
        </section>
    );
};

export default AddProduct;