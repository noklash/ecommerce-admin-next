// import multiparty from 'multiparty';



// export default async function handle(req,res) {
//     const form = new  multiparty.Form();
//     const {fields, files} = await new Promise((resolve, reject) => {
//         form.parse(req, async (err, fields, files) => {
//             if (err) reject( err);
//             resolve({fields, files});
            
//         });
//     })
//     console.log(files.file.length);
//     return res.json('ok');
// }

// export const config = {
//     api: {bodyParser: false},
// }




// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({ 
//   cloud_name: process.env.CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_KEY, 
//   api_secret: process.env.CLOUDINARY_SECRET 
// });

// const handler = async (req, res) => {
//     // console.log(req.body);
//   try {
//     const { path } = await req.body
//     // console.log(path);
//     if (!path) {
//       return res.status(400).json({ message: "Image path is required" });
//     }

//     const options = {
//       use_filename: true,
//       unique_filename: false,
//       overwrite: true,
//       transformation: [{ width: 1000, height: 752, crop: "scale" }],
//     };

//     const result = await cloudinary.uploader.upload(path, options);

//     return res.status(200).json(result);
//   } catch (error) {
//     console.error("Failed to upload image on Cloudinary:", error);
//     return res.status(500).json({ message: "Failed to upload image on Cloudinary" });
//   }
// };

// export default handler;

// // Set runtime: "edge" in the configuration
// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: '1mb',
//     },
//     runtime: 'edge', // Add this line to use the "edge" runtime
//   },
// };
