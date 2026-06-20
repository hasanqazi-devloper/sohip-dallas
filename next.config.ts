import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  
  // Ye line 'out' folder banaye gi
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;