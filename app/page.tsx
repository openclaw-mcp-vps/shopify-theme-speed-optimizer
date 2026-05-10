export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Performance
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Auto-optimize your Shopify theme{" "}
          <span className="text-[#58a6ff]">without writing a line of code</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your store, scan for speed bottlenecks, and apply one-click fixes for unused CSS, unoptimized images, and render-blocking resources — in minutes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Optimizing — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No coding required. Cancel anytime.</p>

        {/* Social proof bar */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-[#8b949e]">
          <div><span className="text-white font-bold text-xl">2.4s</span><br />avg load time saved</div>
          <div><span className="text-white font-bold text-xl">+18%</span><br />conversion lift</div>
          <div><span className="text-white font-bold text-xl">500+</span><br />stores optimized</div>
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-6">
        {[
          { icon: "⚡", title: "Lighthouse Scan", desc: "Full PageSpeed audit on every page type in your store." },
          { icon: "🖼️", title: "Image Compression", desc: "Auto-convert and lazy-load images to cut payload size." },
          { icon: "🧹", title: "CSS Cleanup", desc: "Strip unused CSS rules that bloat your theme files." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited store scans",
              "One-click performance fixes",
              "Image optimization",
              "Unused CSS removal",
              "Render-blocking resource fixes",
              "Shopify theme file management",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Do I need to know how to code?",
              a: "No. Everything is handled through our dashboard. Connect your Shopify store with one click and we handle all theme modifications automatically."
            },
            {
              q: "Will this break my store's design?",
              a: "No. We create a backup of your theme before applying any changes. You can revert to the original at any time with a single click."
            },
            {
              q: "Which Shopify plans are supported?",
              a: "All Shopify plans are supported, including Basic, Shopify, Advanced, and Plus. You just need API access enabled on your store."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Shopify Theme Speed Optimizer. All rights reserved.
      </footer>
    </main>
  );
}
