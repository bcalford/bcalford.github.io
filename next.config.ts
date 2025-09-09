/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // enables `next export`
  images: { unoptimized: true },
  trailingSlash: true         // helps with GH Pages routing
};
export default nextConfig;
