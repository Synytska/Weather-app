/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['openweathermap.org'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'openweathermap.org',
          port: '',
          pathname: '/icon/**',
        },
      ],
    },
  };

export default nextConfig;
