/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://172.17.0.3:8080/:path*', // URL вашего бэкенда
            },
        ]
    },
};

export default nextConfig;
