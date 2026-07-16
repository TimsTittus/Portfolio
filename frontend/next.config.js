/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    // Disable Webpack cache in development to prevent stale compiler states and stuck error caches
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;