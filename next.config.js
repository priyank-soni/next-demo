/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader:"akamai",
    path:"",
  },
  basePath: "/next-demo",
  assetPrefix:"/next-demo"
}

module.exports = nextConfig
