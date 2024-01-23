/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // | "lh3.googleusercontent.com",
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname:  "lh3.googleusercontent.com",
        port: '',
        pathname: '/a/**',
      },
      {
        protocol: 'https',
        hostname:  "res.cloudinary.com",
        port: '',
        pathname: '/dpavzzjnv/**',
      },
    ],
  }
}

