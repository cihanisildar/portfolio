/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip ESLint during build — run `npm run lint` separately for faster builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Tree-shake large icon/component libs so bundler doesn't pull everything
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
