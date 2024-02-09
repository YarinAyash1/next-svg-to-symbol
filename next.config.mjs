/** @type {import('next').NextConfig} */
const nextConfig = {
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/components/*": ["components/*"]
        }
    }
};

export default nextConfig;
