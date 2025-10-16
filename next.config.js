const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,

  // Performance settings
  compress: true,
  poweredByHeader: false,



  // Next.js 15 optimizations
  bundlePagesRouterDependencies: true,
  // Optimize server external packages
  serverExternalPackages: [],

  // Enable modern JavaScript features
  transpilePackages: [],



  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          minSize: 20000, // Don't create a chunk if it's smaller than 20KB
          chunks: "all",
        },
        components: {
          test: /[\\/]src[\\/]components[\\/]/,
          name: "components",
          chunks: "all",
        },
        // Separate Three.js and related libraries
        threejs: {
          test: /[\\/]node_modules[\\/](@react-three|three)[\\/]/,
          name: "threejs",
          chunks: "all",
          enforce: true, // Always create this chunk
          priority: 10,
        },
        // Separate heavy animation libraries
        animations: {
          test: /[\\/]node_modules[\\/](framer-motion|react-spring|@react-spring)[\\/]/,
          name: "animations",
          chunks: "all",
          enforce: true,
          priority: 10,
        },
      };
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
