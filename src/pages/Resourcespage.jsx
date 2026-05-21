
const resourceCols = [
  {
    title: "Blog",
    links: ["How Branded Links Increase Click-Through Rates", "Top 10 URL Shortener Use Cases for Marketers", "Understanding Click Analytics: A Beginner's Guide", "How to Use QR Codes in Your Marketing Campaigns"],
  },
  {
    title: "For Developers",
    links: ["API Reference Documentation", "REST API Quick Start Guide", "Authentication & API Tokens", "Bulk URL Creation via API", "Webhooks & Click Events"],
  },
  {
    title: "Our Proven Process",
    links: ["How Link Shortening Works", "Our Redirect Infrastructure", "Analytics Data Collection", "Security & Malware Scanning", "Uptime & Reliability"],
  },
  {
    title: "About Us",
    links: ["Our Story Since 2002", "Mission & Values", "Leadership Team", "Press & Media Kit", "Careers at TinyURL"],
  },
];

const blogPosts = [
  { tag: "Marketing", title: "How Branded Links Increase Click-Through Rates by 34%", date: "May 12, 2026" },
  { tag: "Tutorial",  title: "Getting Started with TinyURL API: A Step-by-Step Guide", date: "Apr 28, 2026" },
  { tag: "Analytics", title: "Understanding Your Link Analytics Dashboard",             date: "Apr 10, 2026" },
];

export default function ResourcesPage({ onNavigate }) {
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
        <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-3">Resources</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to Succeed</h1>
        <p className="text-sm text-gray-300 max-w-xl mx-auto">
          Guides, API docs, blog posts, and developer tools — all in one place.
        </p>
      </section>

      {/* Resource columns — matches footer style */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {resourceCols.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-[#1a1a2e] mb-4">{col.title}</h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-gray-500 hover:text-teal-600 transition-colors leading-snug block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer API section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-3">Developer Documentation</h2>
            <p className="text-sm text-gray-500">Integrate TinyURL into your app with our simple REST API.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { tag: "Popular",   title: "API Quick Start",       desc: "Get your first shortened URL in under 5 minutes." },
              { tag: "Essential", title: "Authentication",         desc: "How to create and manage API tokens securely." },
              { tag: "API",       title: "Create Short URL",       desc: "POST /create — parameters, examples, responses." },
              { tag: "API",       title: "Bulk Shortening",        desc: "Create hundreds of links at once via batch endpoint." },
              { tag: "Pro",       title: "Analytics Endpoints",    desc: "Fetch click data, device breakdown, geographic stats." },
              { tag: "Pro",       title: "Custom Domains API",     desc: "Manage branded domains programmatically via API." },
            ].map(({ tag, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer">
                <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">{tag}</span>
                <h3 className="text-sm font-semibold text-[#1a1a2e] mt-3 mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://tinyurl.com/app/dev" target="_blank" rel="noreferrer"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded text-sm font-semibold transition-colors">
              Full API Documentation ↗
            </a>
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8">Latest from the Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {blogPosts.map(({ tag, title, date }) => (
              <div key={title} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer group">
                <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">{tag}</span>
                <h3 className="text-sm font-semibold text-[#1a1a2e] mt-3 mb-2 leading-snug group-hover:text-teal-600 transition-colors">{title}</h3>
                <p className="text-xs text-gray-400">{date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#002342] text-center text-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for Shorter, Smarter Links?</h2>
          <p className="text-sm max-w-lg mx-auto mb-6 opacity-90 leading-relaxed">
            Transform a long link into a short, trackable one using our platform. Create a free account or subscribe to a paid plan today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button onClick={() => onNavigate("plans")} className="px-6 py-3 rounded border-2 border-gray-300 text-gray-300 text-sm font-semibold hover:bg-gray-300 hover:text-[#002342] transition-colors">View Plans</button>
            <button className="px-6 py-3 rounded border-2 border-gray-300 text-gray-300 text-sm font-semibold hover:bg-gray-300 hover:text-[#002342] transition-colors">Create Free Account</button>
          </div>
        </div>
      </section>
    </div>
  );
}
