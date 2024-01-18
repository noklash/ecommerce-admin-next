import Layout from "@/components/Layout"
import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react"

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then(response => {
     setProducts(response.data);
    })
  }, []);

  return (
    <Layout>
        <Link className="bg-blue-900 rounded-md text-white py-1 px-2" href={'/products/new'}>Add new product</Link>

        <table className="basic">
          <thead>
            <tr>
              <td>Product Name</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr>
                <td>{product.title || product.name }</td>
                <td>
                  buttons
                </td>
              </tr>
            ))}
          </tbody>
        </table>

    </Layout>
  )
}

export default Product