import type { NextConfig } from 'next'

const config: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lanhu-oss-2537-2.lanhuapp.com',
                port: '',
                pathname: '/**',
                search: '',
            },
        ],
    },
    output: "standalone",
}

export default config