/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'es', 'ja', 'zh'],
  },
};

module.exports = nextConfig;
