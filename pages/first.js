import Layout from "@/components/Layout";
import axios from "axios";
// import AuthProvider from "@/components/AuthProvider";
import  AuthProvider from "@/components/AuthProvider";
import { useEffect, useState } from "react";
import Login from "@/components/Login";


export default function Home(){
  // const { token }  = useAuth();
  // const token = localStorage.getItem("token")
  // console.log(token)
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njg0MTY3ZmIwZjQ5ZjdlODU0YWMxZmQiLCJ1c2VybmFtZSI6InRlZSIsImlhdCI6MTcxOTk5NTg2MywiZXhwIjoxNzE5OTk5NDYzfQ.Xms132Yct7JewEJejg-8tvTZLUKbmFMGvKCZjYT7zNY"

  const [getUser, setGetUser] = useState({})
  // const [token, setToken] = useState("")
  useEffect(() => {
    const token = localStorage.getItem("token")
    // setToken(token)
  console.log(token)
    if (token) {
      axios
        .get("https://rest-ecommerce-next.onrender.com/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const user = res.data.data;
          setGetUser(user);
          console.log(user);
        })
        .catch((error) => {
          console.error("Failed to fetch user", error);
        });
    }
  }, []);

//  console.log(getUser)

  // if (!token) {
  //   return <Login />;
  // }

  return (
    <AuthProvider>
         <Layout>
          <div className="text-blue-900 flex justify-between">
            <h2>
              Hello, <b>{getUser?.username}</b>
            </h2>

            <div className="flex bg-gray-300 text-black gap-1 rounded-lg overflow-hidden">
              <span className="px-2">{getUser?.firstName}</span>
            </div>
          </div>
        </Layout>
    </AuthProvider>
   
  );
}
