import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Spinner from '../../Shared/Spinner/Spinner';

const AddProduct = () => {
    const [tick, setTick] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const category = form.category.value;
        const cpu = form.cpu.value;
        const gpu = form.gpu.value;
        const ssd = form.ssd.value;
        const image1 = form.image1.value;
        const image2 = form.image2.value;
        const image3 = form.image3.value;
        const image4 = form.image4.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        // console.log(productName, category, cpu, gpu, ssd, image1, image2, image3, image4, quantity, price);

        const product = {
            name: productName,
            cpu,
            gpu,
            ssd,
            price,
            category,
            quantity,
            img: [image1, image2, image3, image4]
        }
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}/add-product`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success(`${productName} Added Successfully...`);
                    setLoading(false)
                    form.reset();
                }
            })

        setLoading(false)
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
                        <div className='flex flex-col'>
                            <label className='text-sm text-primary font-medium' htmlFor="category" value="Category">Category</label>
                            <select name="category" id="category" required
                                className='w-full py-1 px-4 focus:outline-primary bg-gray-light'>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Kids">Kids</option>
                                <option value="Accessories">Accessories</option>
                            </select>
                        </div>
                        <div className='flex gap-x-3'>
                            <div>
                                <label className='text-sm text-primary font-medium' htmlFor="cpu" value="CPU">CPU</label>
                                <input
                                    name="cpu"
                                    id="cpu"
                                    type="text"
                                    className='w-full py-1 px-4 focus:outline-primary bg-gray-light'
                                    placeholder="CPU Name"
                                    required={true}
                                />
                            </div>
                            <div>
                                <label className='text-sm text-primary font-medium' htmlFor="gpu" value="GPU">GPU</label>
                                <input
                                    name="gpu"
                                    id="gpu"
                                    type="text"
                                    className='w-full py-1 px-4 focus:outline-primary bg-gray-light'
                                    placeholder="GPU Name"
                                    required={true}
                                />
                            </div>
                            <div>
                                <label className='text-sm text-primary font-medium' htmlFor="ssd" value="SSD">SSD</label>
                                <input
                                    name="ssd"
                                    id="ssd"
                                    type="text"
                                    className='w-full py-1 px-4 focus:outline-primary bg-gray-light'
                                    placeholder="SSD Size"
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='image' className='text-sm text-primary font-medium'>
                                Product Image
                            </label>
                            <div className='flex flex-col gap-y-2'>
                                <input
                                    name='image1'
                                    id='image1'
                                    type='text'
                                    className='w-full py-1 px-4 focus:outline-primary bg-gray-light'
                                    placeholder="img.png"
                                    required={true}
                                />
                            </div>
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
                                    placeholder="BDT 49000"
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
                    {/* {error && <small className="text-red-500 mt-2">{error}</small>} */}
                </div>
            </div>
        </section>
    );
};

export default AddProduct;