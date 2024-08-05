/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.bettyblocks.com', 'i.ibb.co'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'assets.bettyblocks.com',
      port: '',
      pathname: '*'
    }]
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
