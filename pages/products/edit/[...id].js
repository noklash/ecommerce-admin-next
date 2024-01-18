import Layout from '@/components/Layout'
import ProductsForm from '@/components/ProductsForm';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const EditProductPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [productInfo, setProductInfo] = useState(null)

    useEffect(() => {
      if (!id){
        return;
      }
      axios.get('/api/products?id='+id).then(response => {
        setProductInfo(response.data);
      })
    }, [id])

  return (
    <Layout>
         <h1 className="">Edit Product</h1>
        {productInfo && (
          <ProductsForm {...productInfo} />
        )}
    </Layout>
  )
}

export default EditProductPage