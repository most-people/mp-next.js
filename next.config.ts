import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // 导出为静态站点
  images: {
    unoptimized: true,
  },
}

export default nextConfig
