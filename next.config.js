/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["https://3ystudio.vercel.app"]
    },
    env: {
        EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || "123456"
    }
};

module.exports = nextConfig;
