import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The old address for the sale page. VIBE is not an investment product, so it lives at /presale.
    return [{ source: "/invest", destination: "/presale", permanent: true }];
  },
};

export default nextConfig;
