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




import {v2 as cloudinary} from 'cloudinary';
import { NextResponse } from 'next/server';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET 
});

export default async function POST(request){
    const { path } = await request.body;
    console.log(request.body)

    if (!path){
        return NextResponse.json({ message: "Image path is required"}, {status: 400});
    }

    try {
        const options = {
            use_filename: true,
            unique_filename: false,
            overwrite: true,
            transformation: [{ width: 1000, height: 752, crop: "scale"}],
        };

        const result = await cloudinary.uploader.upload(path, options);
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to upload image on cloudinary"}, { status: 500});
    }
}
