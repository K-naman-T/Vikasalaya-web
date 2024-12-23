/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '/**',
        },
      ],
      formats: ['image/avif', 'image/webp'],
      localPatterns: [
        {
          pathname: '/images/**',
        },
      ],
    },
  }
  
  export default nextConfig