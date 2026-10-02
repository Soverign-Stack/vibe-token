import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 animated-gradient" />

        {/* Floating token decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[var(--gold)]/5 blur-3xl token-float" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-[var(--gold)]/5 blur-3xl token-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Live indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--vibe-green)]/10 border border-[var(--vibe-green)]/30 rounded-full text-[var(--vibe-green)] text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--vibe-green)] animate-pulse" />
            Testnet token on Aptos, $0.01 per VIBE
          </div>

          {/* Token visual */}
          <div className="token-coin mx-auto mb-8 token-float">
            VIBE
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-gold">The Economics</span>
            <br />
            <span className="text-[var(--text-primary)]">of Sovereignty</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
            VIBE is a testnet token on the Aptos testnet, for use inside the Alpha
            Protocol ecosystem. It is not a share or a promise of future value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://go.alphaprotocol.network/vibe" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Buy VIBE in Alpha GO
            </a>
            <Link href="/presale" className="btn-secondary">
              How the demo sale works
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">$0.01</div>
              <div className="text-sm text-[var(--text-muted)]">Demo sale price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">1B</div>
              <div className="text-sm text-[var(--text-muted)]">Maximum Supply</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">Testnet</div>
              <div className="text-sm text-[var(--text-muted)]">Aptos network</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--vibe-green)] mb-2">Alpha GO</div>
              <div className="text-sm text-[var(--text-muted)]">Demo sale, sold here only</div>
            </div>
          </div>
          <div className="mt-10 text-center text-sm text-[var(--text-muted)]">
            <span className="font-semibold text-[var(--text-secondary)]">Verify on-chain:</span>{" "}
            module <code>vibe_token</code> at{" "}
            <a href="https://explorer.aptoslabs.com/account/0x24cb561c64c32942eb8600d5135f0185c23bcd06cd8cf33422ce2f9b77d65388/modules/code/vibe_token?network=testnet" target="_blank" rel="noopener noreferrer" title="0x24cb561c64c32942eb8600d5135f0185c23bcd06cd8cf33422ce2f9b77d65388" className="text-[var(--gold)] hover:underline">0x24cb56...65388</a>{" "}
            on the Aptos testnet explorer. 8 decimals.
          </div>
        </div>
      </section>

      {/* What is VIBE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What is <span className="text-gradient-gold">VIBE</span>?
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              VIBE is the planned economic layer of the Sovereign Stack. Today it is a testnet
              token you can earn and buy in Alpha GO.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--vibe-green)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--vibe-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Earn</h3>
              <p className="text-[var(--text-secondary)]">
                Today you can earn testnet VIBE in Alpha GO for signing up, checking in at events and inviting others. Rewards for running nodes are planned.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--vibe-purple)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--vibe-purple)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Spend</h3>
              <p className="text-[var(--text-secondary)]">
                Today you can spend VIBE on Topsi, the assistant in the Alpha GO app, and send it to other members. Spending it on network services, compute and privacy features is planned.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--vibe-blue)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--vibe-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Govern</h3>
              <p className="text-[var(--text-secondary)]">
                Governance is planned for a later stage and is not live. Details will be published
                when it is ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Utility */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-gold">Utility</span> inside the network
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                VIBE is a testnet token used inside the Alpha Protocol ecosystem. It
                is not a share or a promise of future value.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Network Fees:</strong> Paying for
                    compute, data routing and storage. <span className="inline-block ml-2 align-middle px-2 py-0.5 rounded-full border border-[var(--vibe-orange)]/40 bg-[var(--vibe-orange)]/10 text-[var(--vibe-orange)] text-xs font-medium">Planned</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Node Rewards:</strong> Earning
                    VIBE by relaying traffic and running nodes. <span className="inline-block ml-2 align-middle px-2 py-0.5 rounded-full border border-[var(--vibe-orange)]/40 bg-[var(--vibe-orange)]/10 text-[var(--vibe-orange)] text-xs font-medium">Planned</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Governance:</strong> <span className="inline-block ml-2 align-middle px-2 py-0.5 rounded-full border border-[var(--vibe-orange)]/40 bg-[var(--vibe-orange)]/10 text-[var(--vibe-orange)] text-xs font-medium">Planned</span>
                    Not live, for a later stage
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Token Flow</h3>
              <p className="text-sm text-[var(--text-muted)] mb-6">How VIBE is intended to move. Node rewards and spending are planned.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--vibe-green)]/10 flex items-center justify-center text-[var(--vibe-green)]">
                    &#8593;
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">Earn VIBE</div>
                    <div className="text-sm text-[var(--text-muted)]">Today: Alpha GO rewards. Planned: running nodes</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-[var(--gold)]/30 ml-6" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)]">
                    &#8644;
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">Hold</div>
                    <div className="text-sm text-[var(--text-muted)]">Held in your Alpha GO account today</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-[var(--gold)]/30 ml-6" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--vibe-purple)]/10 flex items-center justify-center text-[var(--vibe-purple)]">
                    &#8595;
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">Spend VIBE</div>
                    <div className="text-sm text-[var(--text-muted)]">Planned: services, priority, features</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sovereign Stack Position */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Part of the <span className="text-gradient-gold">Sovereign Stack</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              VIBE connects all layers of the Sovereign Stack, enabling value exchange
              from hardware to satellites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { name: "Alpha Protocol", desc: "Protocol Foundation", color: "#dc2626" },
              { name: "Omega Wireless", desc: "Hardware Foundation", color: "#f97316" },
              { name: "Vibertas", desc: "Sovereign OS", color: "#eab308" },
              { name: "VIBE Token", desc: "Economics Layer", active: true, color: "#22c55e" },
              { name: "VIBELAND", desc: "Sovereign Metaverse", color: "#3b82f6" },
              { name: "Spectrum Galactic", desc: "LEO Satellites", color: "#8b5cf6" },
              { name: "Pythia AI", desc: "Intelligence Layer", color: "#6366f1" },
            ].map((item) => (
              <div
                key={item.name}
                className={`p-4 rounded-lg border ${
                  item.active
                    ? "bg-[var(--gold)]/10 border-[var(--gold)] glow-gold"
                    : "bg-[var(--dark-card)] border-[var(--dark-border)]"
                }`}
              >
                <div
                  className="w-2 h-2 rounded-full mb-2"
                  style={{ background: item.color }}
                />
                <div className={`font-semibold ${item.active ? "text-[var(--gold)]" : "text-[var(--text-primary)]"}`}>
                  {item.name}
                </div>
                <div className="text-xs text-[var(--text-muted)]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy Now CTA */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--vibe-green)]/10 border border-[var(--vibe-green)]/30 rounded-full text-[var(--vibe-green)] text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--vibe-green)] animate-pulse" />
            Testnet token on Aptos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Buy VIBE at <span className="text-gradient-gold">$0.01</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Buy testnet VIBE in Alpha GO with Bitcoin, USDT (on Ethereum) or Aptos. Spending on
            the Vibertas Dashboard is planned. VIBE is not a share, a security or a promise of future value.
          </p>
          <div className="bg-[var(--dark-card)] border border-[var(--gold)] rounded-lg p-6 max-w-lg mx-auto mb-8 glow-gold">
            <div className="text-sm text-[var(--gold)] mb-4 font-semibold">Demo sale pricing</div>
            <div className="grid grid-cols-2 gap-6 text-left">
              <div>
                <div className="text-3xl font-bold text-[var(--gold)]">$0.01</div>
                <div className="text-sm text-[var(--text-muted)]">Per VIBE Token</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--text-primary)]">100</div>
                <div className="text-sm text-[var(--text-muted)]">VIBE per $1</div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--dark-border)]">
              <div className="text-sm text-[var(--text-secondary)]">
                Spending on the Vibertas Dashboard <span className="inline-block ml-2 align-middle px-2 py-0.5 rounded-full border border-[var(--vibe-orange)]/40 bg-[var(--vibe-orange)]/10 text-[var(--vibe-orange)] text-xs font-medium">Planned</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://go.alphaprotocol.network/vibe" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Buy VIBE in Alpha GO
            </a>
            <Link href="/presale" className="btn-secondary">
              Demo sale details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
