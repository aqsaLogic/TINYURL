
const mainFeatures = [
  { title: "Detailed Link Analytics", desc: "Stay on top of your links' performance and get insights into the clicks you earn and people you reach." },
  { title: "Fully Branded Domains", desc: "Customize every part of your links with branded domains — say goodbye to default link shortening!" },
  { title: "Bulk Short URLs", desc: "Scale your communications with our API and create thousands of unique short links in the blink of an eye." },
  { title: "Link Management", desc: "Take full control of your links: search, edit, and manage thousands at a time from a convenient dashboard." },
];

const solutions = [
  { title: "Unlimited Tracked Clicks", desc: "We don't believe in making you suffer for your success: track as many clicks as you earn with our Pro plans!" },
  { title: "Fully Custom Links", desc: "Create short links that put your brand front-and-center! Attaching your brand domain to TinyURL is quick and intuitive." },
  { title: "Detailed Link Analytics", desc: "Get actionable, detailed insights into your social media, emails, ads, and any other platform where click-through matters." },
  { title: "Bulk Short URLs", desc: "Need tons of unique, rule-based links quickly? Shorten several links in a single go using our platform or API." },
  { title: "Branded Domains", desc: "Links shortened using your own custom domain are more professional, more trustworthy, and more clickable." },
  { title: "Link Management", desc: "Worried about finding one or two essential links in a tide of thousands? We solve that with intuitive management features." },
];

export default function FeaturesPage({ onNavigate }) {
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
        <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-3">Features</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to Manage Your Links</h1>
        <p className="text-sm text-gray-300 max-w-xl mx-auto mb-8">
          Our URL shortener is not only among the first-ever link shorteners on the Internet — it's the best out there.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <button onClick={() => onNavigate("plans")} className="px-6 py-3 rounded border-2 border-white text-white text-sm font-semibold hover:bg-white hover:text-[#002342] transition-colors">View Plans</button>
          <button className="px-6 py-3 rounded bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold transition-colors">Contact Sales</button>
        </div>
      </section>

      {/* TinyURL Plans Include */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] text-center mb-12">TinyURL Plans Include:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainFeatures.map((f) => (
              <div key={f.title} className="p-4">
                <h3 className="text-base font-semibold text-[#1a1a2e] mb-3">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Banner — same as FeatureSection in TinyURL.jsx */}
      <section className="py-20 bg-[#0D7693]">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 rounded-xl bg-white/10 h-64 flex items-center justify-center text-white/40 text-sm">
            Link Shortening Preview
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100 leading-tight mb-6">Link Shortening Done Quick and Easy</h2>
            <p className="text-sm text-gray-100 mb-4 leading-relaxed">Our URL shortener is not only among the first-ever link shorteners on the Internet — it is the best out there.</p>
            <p className="text-sm text-gray-100 mb-4 leading-relaxed">Shorten links for social media, blogs, SMS, emails, ads, and almost anything both off- and online.</p>
            <p className="text-sm text-gray-100 mb-6 leading-relaxed">Wave goodbye to long, clunky links and give your audiences the experiences they deserve!</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => onNavigate("plans")} className="px-6 py-3 rounded border-2 border-white text-white text-sm font-semibold hover:bg-white hover:text-[#1a1a2e] transition-colors">View Plans</button>
              <button className="px-6 py-3 rounded border-2 border-white text-white text-sm font-semibold hover:bg-white hover:text-[#1a1a2e] transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions — same as SolutionsSection in TinyURL.jsx */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">Your One-Stop Solution for Branding and Managing Links</h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto mb-6 leading-relaxed">We offer a comprehensive suite of premium features to allow users to brand and manage links conveniently and confidently.</p>
          <button onClick={() => onNavigate("plans")} className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded text-sm font-semibold transition-colors">View Plans</button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
            {solutions.map((s) => (
              <div key={s.title} className="p-6">
                <h3 className="text-base font-semibold text-[#1a1a2e] mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — same as StatsSection */}
      <section className="py-20 bg-[#0c2e3c] text-white">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">Transforming the Digital Landscape Since '02</h2>
            <p className="text-sm text-gray-400 leading-relaxed">TinyURL has created billions of short links for marketers, influencers, small business owners, and large businesses.</p>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            {[
              { value: "Billions", label: "of redirects per month" },
              { value: "24 years", label: "of shortening URLs" },
              { value: "31,301,074,396", label: "TinyURLs created" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col border-b border-white/10 pb-4">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-gray-400">{stat.label}</span>
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
