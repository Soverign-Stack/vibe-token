import Link from "next/link";

const steps = [
  "Create an Alpha GO account.",
  "Choose a coin and an amount.",
  "Send the exact amount shown.",
  "Paste the transaction ID.",
];

const facts = [
  { label: "Price", value: "$0.01 per VIBE" },
  { label: "Rate", value: "100 VIBE per $1" },
  { label: "Set aside for this event", value: "1,000,000 VIBE" },
  { label: "Limit per person", value: "100,000 VIBE ($1,000)" },
  { label: "Minimum", value: "$25" },
  { label: "Accepted coins", value: "Bitcoin, USDT on Ethereum (ERC-20) only, or APT on Aptos" },
];

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
            This is a demo sale: an early, limited sale of testnet VIBE during the
            TOKEN2049 demo. It is a presale of a testnet token, not of a mainnet token.
          </p>
          <a href="https://go.alphaprotocol.network/vibe" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Buy VIBE in Alpha GO
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-12">
          <div className="card">
            <h2 className="text-2xl font-bold text-[var(--gold)] mb-4">Sale terms</h2>
            <dl className="divide-y divide-[var(--dark-border)]">
              {facts.map((f) => (
                <div key={f.label} className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="text-[var(--text-muted)]">{f.label}</dt>
                  <dd className="text-[var(--text-primary)] sm:text-right">{f.value}</dd>
                </div>
              ))}
            </dl>
            <p className="text-sm text-[var(--text-muted)] mt-4">
              1,000,000 VIBE is set aside for this event. It covers the sale and the rewards for signing up, checking in and inviting people in Alpha GO, so both end when it runs out. Maximum supply of VIBE is 1 billion.
              VIBE can only be bought inside Alpha GO.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-[var(--gold)] mb-4">How to buy</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[var(--text-secondary)]">
              {steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-[var(--gold)] mb-4">What you receive</h2>
            <p className="text-[var(--text-secondary)] mb-3">
              You receive testnet VIBE. When your payment confirms, it goes on your Alpha GO account. Withdrawing it to your own Aptos testnet wallet, and spending it in the app, arrive with the next Alpha GO update.
            </p>
            <p className="text-[var(--text-secondary)]">
              Testnet VIBE is not a share, a security or a promise of future value.
              Allocation and vesting are being finalised and will be published before mainnet.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-[var(--gold)] mb-4">Who sells it</h2>
            <p className="text-[var(--text-secondary)]">
              VIBE is sold by Powerclub Global LLC. Questions:{" "}
              <a href="mailto:apn@powerclubglobal.com" className="text-[var(--gold)] hover:underline">apn@powerclubglobal.com</a>.
            </p>
          </div>

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
