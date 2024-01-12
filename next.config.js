/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: "export",
    assetPrefix: isProd ? 'https://dawood95.github.io' : undefined,
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
