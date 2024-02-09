/** @type {import('next').NextConfig} */
const nextConfig = {
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/components/*": ["components/*"]
        }
    },
    reactStrictMode: true,
    swcMinify: true,

    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
            };
        }

        return config;
    },
};

export default nextConfig;
