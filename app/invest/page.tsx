import { Metadata } from "next";
import BuyVibe from "@/components/BuyVibe";

export const metadata: Metadata = {
  title: "Buy VIBE",
  description: "Buy testnet VIBE in Alpha GO with Bitcoin, USDT or Aptos at $0.01 per VIBE.",
};

export default function Invest() {
  return <BuyVibe heading="Buy VIBE in Alpha GO" />;
}
