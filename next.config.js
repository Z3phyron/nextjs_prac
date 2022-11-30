/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    MONGO_URI:
      "mongodb+srv://z3phyr:Betty234@practice.szl06ss.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig
