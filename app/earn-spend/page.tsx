import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Earn & Spend",
  description: "What you can do with testnet VIBE today in Alpha GO, and what is planned for later.",
};

function Planned() {
  return (
    <span className="inline-block ml-2 align-middle px-2 py-0.5 rounded-full border border-[var(--vibe-orange)]/40 bg-[var(--vibe-orange)]/10 text-[var(--vibe-orange)] text-xs font-medium">
      Planned
    </span>
  );
}

const earnToday = [
  { title: "Sign up", text: "Create an Alpha GO account and receive testnet VIBE.", amount: "500 testnet VIBE", note: "Per new account" },
  { title: "Check in at events", text: "Check in at an event in Alpha GO.", amount: "100 testnet VIBE", note: "Per event check-in" },
  { title: "Invite others", text: "Invite someone to Alpha GO. You are credited when they create an account.", amount: "250 testnet VIBE", note: "Per person who joins" },
];

const earnPlanned = [
  { title: "Run a node or relay", text: "Rewards for running an Omega Router or Relay on the network are planned. They are not live." },
  { title: "Contribute compute", text: "Rewards for sharing idle compute with Pythia AI are planned." },
  { title: "Developer grants", text: "Grants for people who build on the ecosystem are planned. Amounts are not set." },
  { title: "Bug bounties", text: "Rewards for reporting security vulnerabilities are planned. Amounts are not set." },
];

const spendPlanned = [
  {
    heading: "Network services",
    items: [
      { name: "Priority routing", desc: "Faster data transfer and lower latency" },
      { name: "Enhanced privacy", desc: "Additional encryption layers and mixnets" },
      { name: "Decentralized storage", desc: "Encrypted, redundant data storage" },
      { name: "Satellite backhaul", desc: "Connectivity via Spectrum Galactic" },
    ],
  },
  {
    heading: "AI and compute",
    items: [
      { name: "Pythia AI tasks", desc: "AI inference and data processing" },
      { name: "Model training", desc: "Federated learning compute credits" },
      { name: "GPU rendering", desc: "Distributed graphics processing" },
      { name: "Priority compute", desc: "Faster scheduling for urgent tasks" },
    ],
  },
  {
    heading: "Governance",
    items: [
      { name: "Protocol voting", desc: "Vote on upgrades and parameters" },
      { name: "Treasury proposals", desc: "Propose and vote on fund allocation" },
      { name: "Grant applications", desc: "Apply for development funding" },
    ],
  },
  {
    heading: "Premium features",
    items: [
      { name: "Custom domains", desc: ".alpha domains" },
      { name: "API access", desc: "Developer API rate limits" },
      { name: "Enterprise SLA", desc: "Support terms for enterprise customers" },
      { name: "Vibertas and Vibertas Dashboard", desc: "Paying for services in VIBE" },
      { name: "Omega hardware", desc: "Buying Omega devices with VIBE" },
    ],
  },
];

export default function EarnSpend() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Earn</span> & <span className="text-gradient-gold">Spend</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Today you can earn testnet VIBE and buy it in Alpha GO. Everything
            else on this page is planned and is marked as such.
          </p>
        </div>
      </section>

      {/* Earn Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--vibe-green)]/10 border border-[var(--vibe-green)]/30 rounded-full text-[var(--vibe-green)] text-sm mb-4">
              Live today in Alpha GO
            </div>
            <h2 className="text-3xl font-bold mb-4">How to earn VIBE</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              These rewards are paid in testnet VIBE and credited to your Alpha GO account.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {earnToday.map((e) => (
              <div key={e.title} className="card border-t-4 border-t-[var(--vibe-green)]">
                <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">{e.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4">{e.text}</p>
                <div className="bg-[var(--dark-surface)] rounded-lg p-4">
                  <div className="text-lg text-[var(--vibe-green)]">{e.amount}</div>
                  <div className="text-xs text-[var(--text-muted)]">{e.note}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-center mt-20 mb-8">Planned ways to earn</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {earnPlanned.map((e) => (
              <div key={e.title} className="card border-t-4 border-t-[var(--text-muted)]">
                <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">
                  {e.title}
                  <Planned />
                </h3>
                <p className="text-[var(--text-secondary)]">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spend Section */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--vibe-orange)]/10 border border-[var(--vibe-orange)]/30 rounded-full text-[var(--vibe-orange)] text-sm mb-4">
              Planned
            </div>
            <h2 className="text-3xl font-bold mb-4">How VIBE may be spent</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Today, in the Alpha GO app, you can spend VIBE on Topsi, the in-app assistant, send it to other members, and withdraw bought VIBE to your own Aptos testnet wallet. None of the uses below are live. They describe what we plan to build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {spendPlanned.map((group) => (
              <div key={group.heading} className="card">
                <h3 className="text-xl font-semibold text-[var(--gold)] mb-4">{group.heading}</h3>
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <span className="text-[var(--gold)]">&#9679;</span>
                      <div>
                        <div className="font-medium text-[var(--text-primary)]">
                          {item.name}
                          <Planned />
                        </div>
                        <div className="text-sm text-[var(--text-muted)]">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Try it in <span className="text-gradient-gold">Alpha GO</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Earn or buy testnet VIBE in Alpha GO. VIBE is a testnet token and not a
            share, a security or a promise of future value.
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
