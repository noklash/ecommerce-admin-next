import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { uploadImage } from "@/lib/action";


const ProductsForm = ({
    title:existingTitle,
    description:existingDescription,
    price:existingPrice,
    _id,
    // images
}) => {
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [price, setPrice] = useState(existingPrice || null);
    const [goToProducts, setGoToProducts] = useState(false)
    const router = useRouter()

    async function saveProduct(ev){
        ev.preventDefault()
        const data = {title, description, price};
        if (_id) {
            // update
            await axios.patch(`https://rest-ecommerce-next.onrender.com/product/${_id}`, {...data}); // , _id
        }else {
            // create
            await axios.post('https://rest-ecommerce-next.onrender.com/product/add', data);
        }
        setGoToProducts(true);
    }

    if(goToProducts){
         router.push('/products')
    }

//     async function uploadImages(e){
        
//         // 
//         // const files = ev.target?.files;
//         // if(files?.length > 0){
//         //    const data = new FormData();
//         //    for (const file of files) {
//         //         data.append('file', file);
//         //    }
//         // 

//         // main   
//         //    await fetch('/api/upload', {
//         //     method: 'POST',
//         //     body: data,
//         //     })

//             // stop

// // Test
        
//         };

            const handleChangeImage = async (e) => {
                e.preventDefault();
                const imageFile = e.target.files?.[0];
                if (!imageFile) return ;
                if (!imageFile.type.includes("image")){
                    alert("upload an image");
                    return
                }
                const reader = new FileReader();
                reader.readAsDataURL(imageFile);
                

                reader.onload = async () => {
                    const result = reader.result
                    // console.log(`result is ${result}`)
                    const res = await uploadImage(result)
                   
                    // handleChange("image", res.url)

                    console.log(`image url is ${res.url}`)
                    return res.url
                };
            };

    return (
            <form onSubmit={saveProduct}>
                <label>Product name</label>
                <input 
                    type="text" 
                    placeholder="product name"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)} 
                />
                <label>
                    Photos
                </label>

                {/* <div className="mb-2">
                    <label className=" cursor-pointer mb-2 w-24 h-24 border flex justify-center text-sm flex-col items-center text-gray-500 gap-1 rounded-lg bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        <div>
                        Upload
                        </div>
                        <input accept='image/*' type="file" onChange={handleChangeImage} className="hidden"/>
                    </label>
                    {!images?.length && (
                        <div>No photos in this product</div>
                    )}
                </div> */}

                <label>Description</label>
                <textarea 
                    placeholder="description"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}

                />

                <label>Price (in USD)</label>
                <input 
                    type="number" 
                    placeholder="price"
                    value={price} 
                    onChange={ev => setPrice(parseInt(ev.target.value))} //PARSEINT CONVERTS STRING TO INTEGER SINCE HTML INPUTS ARE STRINGS BY DEFAULT
                />

                <button type="submit" className="btn-primary">Save</button>
            </form>
    )
}

export default ProductsForm