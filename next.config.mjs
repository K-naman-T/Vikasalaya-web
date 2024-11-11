/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Replace with your actual image hostname
          port: '',
          pathname: '/**',
        },
      ],
      formats: ['image/avif', 'image/webp'],
    },
  }
  
  export default nextConfig