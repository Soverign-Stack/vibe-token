import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tokenomics",
  description: "VIBE is a testnet token on Aptos. Maximum supply is 1 billion. Allocation and vesting are being finalised and will be published before mainnet. Not a share, a security or a promise of future value.",
};

export default function Tokenomics() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--vibe-orange)]/10 border border-[var(--vibe-orange)]/30 rounded-full text-[var(--vibe-orange)] text-sm mb-6">
            Testnet token on Aptos
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Tokenomics</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            VIBE is a testnet token for use inside the Alpha Protocol ecosystem.
            It is not a share or a promise of future value.
          </p>
        </div>
      </section>

      {/* Supply Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Token Supply</h2>
          </div>

          <div className="max-w-md mx-auto">
            <div className="card text-center">
              <div className="text-4xl font-bold text-gradient-gold mb-2">1,000,000,000</div>
              <div className="text-lg text-[var(--text-primary)] mb-1">Intended maximum at mainnet</div>
              <div className="text-sm text-[var(--text-muted)]">On the Aptos testnet today 1,002,000,000 VIBE exist, and the testnet contract does not enforce a cap. The maximum is a policy we keep to, not a rule the code enforces. About 88.6% is in the contract&apos;s admin account and about 11% in a second company-controlled wallet; the admin key can create and remove VIBE and upgrade the contract. We will publish how those powers are limited before mainnet.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Verify on-chain */}
      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Verify on-chain</h2>
          <p className="text-[var(--text-secondary)] mb-2">
            VIBE is live on the Aptos testnet. Contract module <code>vibe_token</code>, 8 decimals.
          </p>
          <a href="https://explorer.aptoslabs.com/account/0x24cb561c64c32942eb8600d5135f0185c23bcd06cd8cf33422ce2f9b77d65388/modules/code/vibe_token?network=testnet" target="_blank" rel="noopener noreferrer" title="0x24cb561c64c32942eb8600d5135f0185c23bcd06cd8cf33422ce2f9b77d65388" className="text-[var(--gold)] hover:underline">
            0x24cb56...65388
          </a>
        </div>
      </section>

      {/* What VIBE is used for */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What VIBE is used for</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Today, testnet VIBE is earned and bought in Alpha GO. Paying for network
              services and rewarding node operators are planned.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Earn</h3>
              <p className="text-[var(--text-secondary)]">
                Today you can earn testnet VIBE in Alpha GO for signing up (500), event check-ins (100 each) and invites (250 each). Rewards for relaying traffic or running nodes are planned.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Spend</h3>
              <p className="text-[var(--text-secondary)]">
                Spending VIBE on network services, priority compute and our own tools is planned. It is not live. Governance is also planned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Allocation and vesting */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Allocation and vesting</h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Allocation and vesting are being finalised and will be published before mainnet.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to <span className="text-gradient-gold">participate</span>?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            See what is live today and what is planned.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/earn-spend" className="btn-primary">
              How to Earn
            </Link>
            <a href="https://go.alphaprotocol.network/vibe" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Buy VIBE in Alpha GO
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
