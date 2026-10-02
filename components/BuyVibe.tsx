import Link from "next/link";

export default function BuyVibe({ heading }: { heading: string }) {
  return (
    <div className="pt-16">
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--vibe-orange)]/10 border border-[var(--vibe-orange)]/30 rounded-full text-[var(--vibe-orange)] text-sm mb-6">
            Testnet token on Aptos
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">{heading}</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-6">
            You can buy testnet VIBE in Alpha GO with Bitcoin, Ether or Aptos.
            The presale price is $0.01 per VIBE.
          </p>
          <p className="text-[var(--text-secondary)] mb-8">
            VIBE is a testnet token on the Aptos testnet, for use inside the Alpha
            Protocol ecosystem. It is not a share or a promise of future value.
            Alpha GO is the only place to buy it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://go.alphaprotocol.network/vibe" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Buy VIBE in Alpha GO
            </a>
            <Link href="/tokenomics" className="btn-secondary">
              View Tokenomics
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
