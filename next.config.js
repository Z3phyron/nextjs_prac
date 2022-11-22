/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    MONGO_URI: "mongodb://localhost:27017/notes",
  },
};

module.exports = nextConfig
