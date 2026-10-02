import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "VIBE Token roadmap, in stages: testnet token on Aptos now, node operator rewards next, mainnet later.",
};

const stages = [
  {
    label: "Now",
    text: "Testnet token on Aptos, used inside Alpha GO and our own tools.",
    current: true,
  },
  {
    label: "Next",
    text: "Rewards for node operators on the seed network.",
  },
  {
    label: "Later",
    text: "Mainnet, and a move to a form of VIBE where amounts and parties are private.",
  },
];

export default function Roadmap() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Roadmap</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            The stages for VIBE, in order. We do not publish dates.
          </p>
        </div>
      </section>

      {/* Stages */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-8">
            {stages.map((stage) => (
              <div
                key={stage.label}
                className={`card ${stage.current ? "border-[var(--vibe-green)] glow-gold" : ""}`}
              >
                <h3 className="text-2xl font-bold text-[var(--gold)] mb-2">{stage.label}</h3>
                <p className="text-[var(--text-secondary)]">{stage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Try <span className="text-gradient-gold">VIBE</span> on testnet
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            VIBE is a testnet token on Aptos. It is not a share or a promise of future value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://go.alphaprotocol.network/vibe" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Buy VIBE in Alpha GO
            </a>
            <Link href="/earn-spend" className="btn-secondary">
              How to Earn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
