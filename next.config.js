/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // white listed image domains
  images: {
    // no https://
    domains: ['placekitten.com']
  }
}

module.exports = nextConfig
