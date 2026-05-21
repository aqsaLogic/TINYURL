const plans = [
  {
    name: "Free", price: "$0", period: "forever",
    features: ["5 Short URLs/month", "Basic Analytics", "tinyurl.com domain", "QR Code Generator"],
    popular: false,
  },
  {
    name: "Pro", price: "$9.99", period: "per month",
    features: ["Unlimited Short URLs", "Detailed Analytics", "Custom Branded Domains", "Custom Aliases", "Bulk URL Shortening", "Full API Access", "Priority Support"],
    popular: true,
  },
  {
    name: "Bulk 100K", price: "$99", period: "per month",
    features: ["100,000 URLs/month", "Full Analytics Suite", "Multiple Custom Domains", "Team Management", "Advanced API Access", "Dedicated Support"],
    popular: false,
  },
];

const tableRows = [
  { feature: "Short URLs/month", free: "5",         pro: "Unlimited", bulk: "100,000" },
  { feature: "Custom Aliases",   free: "✗",         pro: "✓",         bulk: "✓" },
  { feature: "Branded Domains",  free: "✗",         pro: "✓",         bulk: "✓" },
  { feature: "Analytics",        free: "Basic",     pro: "Detailed",  bulk: "Full Suite" },
  { feature: "API Access",       free: "✗",         pro: "✓",         bulk: "Advanced" },
  { feature: "Support",          free: "Community", pro: "Priority",  bulk: "Dedicated" },
];

export default function PlansPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-[#002342] py-20 text-center px-5">
        <button
  onClick={() => onNavigate("home")}
  className="text-xs text-teal-400 hover:text-teal-300 underline mb-4 block"
>
  ← Back to Home
</button>
        <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-3">Pricing</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
        <p className="text-sm text-gray-300 max-w-xl mx-auto">Start free, upgrade when you need more. No hidden fees, cancel anytime.</p>
      </section>

      {/* Plan Cards */}
      <section className="max-w-5xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 flex flex-col relative border-2 ${plan.popular ? "border-teal-500 shadow-2xl md:-mt-4" : "border-gray-200"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              <h2 className="text-lg font-bold text-[#1a1a2e] mb-1">{plan.name}</h2>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-extrabold text-teal-600">{plan.price}</span>
                <span className="text-gray-400 text-sm mb-1.5">/{plan.period}</span>
              </div>
              <ul className="space-y-2.5 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-teal-500 mt-0.5 shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded text-sm font-semibold transition-colors ${
                  plan.popular
                    ? "bg-teal-600 hover:bg-teal-700 text-white"
                    : "border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
                }`}
              >
                {plan.name === "Free" ? "Get Started Free" : plan.name === "Pro" ? "Start Pro Plan" : "Contact Sales"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-4xl mx-auto px-5 pb-20">
        <h2 className="text-2xl font-bold text-center text-[#1a1a2e] mb-8">Compare All Plans</h2>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-600">Feature</th>
                <th className="text-center p-4 font-semibold text-gray-400">Free</th>
                <th className="text-center p-4 font-semibold text-teal-600">Pro</th>
                <th className="text-center p-4 font-semibold text-gray-600">Bulk 100K</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={row.feature} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <td className="p-4 text-gray-700 font-medium">{row.feature}</td>
                  <td className="p-4 text-center text-gray-400">{row.free}</td>
                  <td className="p-4 text-center text-teal-600 font-medium">{row.pro}</td>
                  <td className="p-4 text-center text-gray-600">{row.bulk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA — same as TinyURL.jsx CTASection */}
      <section className="py-20 bg-[#002342] text-center text-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for Shorter, Smarter Links?</h2>
          <p className="text-sm max-w-lg mx-auto mb-6 opacity-90 leading-relaxed">
            Transform a long link into a short, trackable one using our platform. Create a free account or subscribe to a paid plan today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button onClick={() => onNavigate("home")} className="inline-block px-6 py-3 rounded border-2 border-gray-300 text-gray-300 text-sm font-semibold hover:bg-gray-300 hover:text-[#002342] transition-colors">View Plans</button>
            <button className="inline-block px-6 py-3 rounded border-2 border-gray-300 text-gray-300 text-sm font-semibold hover:bg-gray-300 hover:text-[#002342] transition-colors">Create Free Account</button>
          </div>
        </div>
      </section>
    </div>
  );
}
