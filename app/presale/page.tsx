import { Metadata } from "next";
import BuyVibe from "@/components/BuyVibe";

export const metadata: Metadata = {
  title: "Buy VIBE",
  description: "Buy testnet VIBE in a demo sale inside Alpha GO at $0.01 per VIBE, with Bitcoin, USDT (on Ethereum) or Aptos.",
};

export default function PresalePage() {
  return <BuyVibe heading="Buy VIBE in Alpha GO" />;
}
