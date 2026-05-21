const benefits = [
  { title: "Your Brand, Your Domain", desc: "Use your own custom domain (e.g. go.yourbrand.com) instead of tinyurl.com. Every link becomes a branded asset." },
  { title: "More Trust, More Clicks", desc: "Branded links get up to 34% more clicks than generic short URLs. People trust links they recognize." },
  { title: "Quick & Easy Setup", desc: "Add your domain in minutes with our simple DNS setup guide. No technical expertise required." },
  { title: "Unlimited Branded Links", desc: "Once your domain is connected, create unlimited branded short links for campaigns, social, emails and more." },
];

const steps = [
  { n: "1", title: "Sign up for Pro", desc: "Create a TinyURL Pro account — branded domains are included in all paid plans." },
  { n: "2", title: "Add Your Domain", desc: "Go to Dashboard → Domains → Add Domain. Enter your custom domain name." },
  { n: "3", title: "Update DNS Records", desc: "Add the CNAME record we provide to your domain registrar (GoDaddy, Namecheap, etc.)." },
  { n: "4", title: "Start Shortening", desc: "Within minutes your domain is live. Select it when creating any new short link." },
];

const faqs = [
  { q: "Do I need to buy a new domain?", a: "No! You can use any domain or subdomain you already own. Most users create go.theirbrand.com or link.theirbrand.com." },
  { q: "How many domains can I add?", a: "Pro plan includes 1 custom domain. Bulk 100K plan includes multiple domains. Contact sales for enterprise needs." },
  { q: "Will my old tinyurl.com links still work?", a: "Yes! All existing tinyurl.com short links continue to work indefinitely after you add a custom domain." },
  { q: "Can I use a domain I already own?", a: "Absolutely. Just point your domain's CNAME to our servers. Full instructions are in your dashboard." },
];

export default function DomainsPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      
      <section className="bg-[#002342] py-20 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <button
  onClick={() => onNavigate("home")}
  className="text-xs text-teal-400 hover:text-teal-300 underline mb-4 block"
>
  ← Back to Home
</button>
            <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-3">Branded Domains</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Short Links with <span className="text-teal-400">Your Brand Name</span>
            </h1>
            <p className="text-sm text-gray-300 mb-8 leading-relaxed">
              Replace tinyurl.com with your own domain. Build trust, increase clicks, and reinforce your identity everywhere.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => onNavigate("plans")} className="px-6 py-3 rounded border-2 border-white text-white text-sm font-semibold hover:bg-white hover:text-[#002342] transition-colors">View Plans</button>
              <button className="px-6 py-3 rounded bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold transition-colors">Contact Sales</button>
            </div>
          </div>

          {/* Domain preview card */}
          <div className="flex-1 max-w-sm bg-white/10 rounded-xl p-6 border border-white/20">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Without branded domain</p>
            <div className="bg-white/10 rounded px-4 py-3 mb-4 font-mono text-sm text-gray-400 line-through">
              tinyurl.com/x7k2p9
            </div>
            <p className="text-xs text-teal-400 mb-2 uppercase tracking-wide">✓ With your branded domain</p>
            <div className="bg-teal-600 rounded px-4 py-3 font-mono text-sm font-bold text-white">
              go.yourbrand.com/summer-sale
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">34% more clicks on average</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] text-center mb-12">Why Use a Branded Domain?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 border border-gray-200 rounded-xl">
                <h3 className="text-base font-semibold text-[#1a1a2e] mb-3">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] text-center mb-12">Set Up Your Domain in 4 Steps</h2>
          <div className="space-y-5">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="flex items-start gap-5 bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">{n}</div>
                <div>
                  <h3 className="text-base font-semibold text-[#1a1a2e] mb-1">{title}</h3>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip — same teal as FeatureSection */}
      <section className="py-16 bg-[#0D7693] px-5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-center">
          {[
            { val: "34%", label: "More clicks on branded links" },
            { val: "5 min", label: "Average domain setup time" },
            { val: "99.9%", label: "Uptime SLA" },
          ].map(({ val, label }) => (
            <div key={val}>
              <p className="text-4xl font-bold mb-1">{val}</p>
              <p className="text-sm text-white/80">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row gap-16">
          <div className="md:w-48 shrink-0 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a1a2e] leading-snug">Frequently Asked Questions</h2>
          </div>
          <div className="flex-1">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 py-5">
                <p className="text-sm font-semibold text-[#1a1a2e] mb-2">{faq.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#002342] text-center text-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for Shorter, Smarter Links?</h2>
          <p className="text-sm max-w-lg mx-auto mb-6 opacity-90 leading-relaxed">Transform a long link into a short, trackable one using our platform. Create a free account or subscribe to a paid plan today!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button onClick={() => onNavigate("plans")} className="px-6 py-3 rounded border-2 border-gray-300 text-gray-300 text-sm font-semibold hover:bg-gray-300 hover:text-[#002342] transition-colors">View Plans</button>
            <button className="px-6 py-3 rounded border-2 border-gray-300 text-gray-300 text-sm font-semibold hover:bg-gray-300 hover:text-[#002342] transition-colors">Create Free Account</button>
          </div>
        </div>
      </section>
    </div>
  );
}
