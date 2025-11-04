// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',           // static export
    images: { unoptimized: true }, // (not using next/image now but safe)
  };
  export default nextConfig;
  