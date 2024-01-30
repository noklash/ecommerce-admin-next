
// export const adapter = {
//     name: 'node-express-api',
//     signIn: async (req, res) => {
//       const username = req.body.username;
//       const password = req.body.password;
  
//       const response = await fetch(`https://rest-ecommerce-next.onrender.com/api/login`, {
//         method: 'POST',
//         body: JSON.stringify({ username, password})
//       });
  
//       if (response.ststus === 200) {
//         const user = await response.json();
//         console.log(user)
//       }else {
//         res.status(401).send('Authentication failed')
//       }
//     }
//   }

