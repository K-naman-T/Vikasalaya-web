/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['www.facebook.com'],
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