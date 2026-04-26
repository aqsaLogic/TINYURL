import { useState } from "react";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import featureImg from "./assets/featureImg.png"

// Header
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-[#054260] py-4 sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#" className="text-2xl font-extrabold text-gray-200 tracking-tight">TINYURL</a>
          <nav className="hidden md:flex gap-8">
            {["Plans", "Features", "Domains", "Resources"].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-gray-200 hover:text-teal-400 transition-colors">{item}</a>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-gray-200 hover:text-teal-400 transition-colors">Log In</a>
          <a href="#" className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors">Sign Up</a>
        </div>
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-gray-200 block"></span>
          <span className="w-6 h-0.5 bg-gray-200 block"></span>
          <span className="w-6 h-0.5 bg-gray-200 block"></span>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-5 pt-4 pb-2 flex flex-col gap-3 bg-[#054260]">
          {["Plans", "Features", "Domains", "Resources"].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-gray-200">{item}</a>
          ))}
          <a href="#" className="text-sm font-medium text-gray-200">Log In</a>
          <a href="#" className="bg-teal-600 text-white px-4 py-2 rounded text-sm font-semibold w-fit">Sign Up</a>
        </div>
      )}
    </header>
  );
}

// Hero 
function Hero() {
  const [activeTab, setActiveTab] = useState("shorten");
  const [longUrl, setLongUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleShorten = (e) => {
    e.preventDefault();
    if (!longUrl) return;
    const code = alias || Math.random().toString(36).substring(2, 8);
    setShortUrl(`https://tinyurl.com/${code}`);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-[#002342] py-16">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row gap-16 items-start">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            URL Shortener, Branded Short Links &amp; Analytics
          </h1>
          <p className="text-base text-white mb-4">
            Welcome to the original link shortener - simplifying the Internet through the power of the URL since 2002.
          </p>
          <p className="text-sm text-white mb-6">
            You can use branded domains for fully custom links, track link analytics, and enjoy other powerful features with our paid plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a href="#" className="inline-block px-6 py-3 rounded border-2 border-white text-white text-sm font-semibold hover:bg-white hover:text-[#1a1a2e] transition-colors text-center">View Plans</a>
            <a href="#" className="inline-block px-6 py-3 rounded bg-teal-600 border-2 border-teal-600 text-white text-sm font-semibold hover:bg-teal-700 hover:border-teal-700 transition-colors text-center">Create Free Account</a>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-400 mb-2">Your Recent Links:</p>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <span className="text-gray-400 text-sm">No links yet in your history</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1 max-w-md w-full bg-white rounded-xl p-6 shadow-xl">
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {["shorten", "qr"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-teal-100 text-teal-700"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {tab === "shorten" ? "Shorten a Link" : "Generate QR Code"}
              </button>
            ))}
          </div>

          <form onSubmit={handleShorten}>
            {/* Long URL */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-600 mb-2">Long URL *</label>
              <input
                type="url"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                placeholder="Paste long URL here"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-teal-500 placeholder-gray-300"
              />
            </div>

            {/* Alias */}
            <div className="flex gap-3 mb-4">
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-600 mb-2">Domain</label>
                <div className="flex items-center border border-gray-200 rounded-md px-3 bg-gray-50">
                  <svg className="text-gray-400 mr-2 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <input type="text" value="tinyurl.com" readOnly className="bg-transparent py-3 text-sm text-gray-700 w-full focus:outline-none" />
                  <span className="text-gray-400 text-base">/</span>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-600 mb-2">Alias (optional)</label>
                <input
                  type="text"
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                  placeholder="Add alias here"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-teal-500 placeholder-gray-300"
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-md text-sm font-semibold transition-colors">
              Shorten URL
            </button>
          </form>

          {/* Result */}
          {shortUrl && (
            <div className="mt-5 pt-5 border-t border-gray-200">
              <p className="text-xs font-medium text-gray-500 mb-2">Your shortened URL:</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={shortUrl}
                  readOnly
                  className="flex-1 px-4 py-3 border border-teal-500 rounded-md text-sm bg-teal-50 text-teal-700 focus:outline-none"
                />
                <button
                  onClick={handleCopy}
                  className="px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm font-semibold transition-colors"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Plans Section
const plans = [
  { title: "Detailed Link Analytics", desc: "Stay on top of your links performance and get insights into the clicks you earn and people you reach.", img: image1 },
  { title: "Fully Branded Domains", desc: "Customize every part of your links with branded domains - say goodbye to default link shortening!", img: image2 },
  { title: "Bulk Short URLs", desc: "Scale your communications with our API and create thousands of unique short links in the blink of an eye.", img: image3 },
  { title: "Link Management", desc: "Take full control of your links: search, edit, and manage thousands at a time from a convenient dashboard.", img: image4 },
];

function PlansSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] text-center mb-12">TinyURL Plans Include:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div key={plan.title} className="p-6">
              <h3 className="text-base font-semibold text-[#1a1a2e] mb-3">{plan.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{plan.desc}</p>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-300 text-xs">  
                <img src={plan.img} alt={plan.title} className="w-full h-full object-contain"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Feature Section
function FeatureSection() {
  return (
    <section className="py-20 bg-[#0D7693]">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 rounded-xl overflow-hidden bg-white/10 h-64 flex items-center justify-center text-white/40 text-sm">
           <img src={featureImg} alt="Link Shortening Feature" className="w-full h-full object-cover"/>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100 leading-tight mb-6">Link Shortening Done Quick and Easy</h2>
          <p className="text-sm text-gray-100 mb-4 leading-relaxed">Our URL shortener is not only among the first-ever link shorteners on the Internet - it is the best out there.</p>
          <p className="text-sm text-gray-100 mb-4 leading-relaxed">Shorten links for social media, blogs, SMS, emails, ads, and almost anything both off- and online.</p>
          <p className="text-sm text-gray-100 mb-6 leading-relaxed">Wave goodbye to long, clunky links and give your audiences the experiences they deserve!</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-block px-6 py-3 rounded border-2 border-white text-white text-sm font-semibold hover:bg-white hover:text-[#1a1a2e] transition-colors text-center">View Plans</a>
            <a href="#" className="inline-block px-6 py-3 rounded border-2 border-white text-white text-sm font-semibold hover:bg-white hover:text-[#1a1a2e] transition-colors text-center">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Solutions Section
const solutions = [
  { title: "Unlimited Tracked Clicks", desc: "We do not believe in making you suffer for your success: track as many clicks as you earn with our Pro plans!" },
  { title: "Fully Custom Links", desc: "Create short links that put your brand front-and-center! Attaching your brand domain to TinyURL is quick and intuitive." },
  { title: "Detailed Link Analytics", desc: "Get actionable, detailed insights into your social media, emails, ads, and any other platform where click-through matters." },
  { title: "Bulk Short URLs", desc: "Need tons of unique, rule-based links quickly? Shorten several links in a single go using our platform or API." },
  { title: "Branded Domains", desc: "Links shortened using your own custom domain are more professional, more trustworthy, and more clickable." },
  { title: "Link Management", desc: "Worried about finding one or two essential links in a side of thousands? We solve that with intuitive management features." },
];

function SolutionsSection() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">Your One-Stop Solution for Branding and Managing Links</h2>
        <p className="text-sm text-gray-500 max-w-xl mx-auto mb-6 leading-relaxed">We offer a comprehensive suite of premium features to allow users to brand and manage links conveniently and confidently.</p>
        <a href="#" className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded text-sm font-semibold transition-colors">View Plans</a>
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
  );
}

// Stats Section
function StatsSection() {
  return (
    <section className="py-20 bg-[#0c2e3c] text-white">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">Transforming the Digital Landscape Since 02</h2>
          <p className="text-sm text-gray-400 leading-relaxed">TinyURL has created billions of short links for marketers, influencers, small business owners, and large businesses.</p>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          {[
            { value: "Billions", label: "of redirects per month" },
            { value: "24 years", label: "of shortening URLs" },
            { value: "31,301,074,396", label: "TinyURLs created" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl font-bold text-white">{stat.value}</span>
              <span className="text-sm text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ
const faqs = [
  { q: "What Is a URL Shortener?", a: "A URL shortener is a tool that creates a short, unique URL that will redirect to the specific website of your choosing." },
  { q: "How Does a URL Shortener Work?", a: "When you create a short link, the URL shortener stores the original URL and generates a unique short code. When someone clicks the short link, the shortener redirects them to the original URL." },
  { q: "What Are the Benefits of Using a Short URL?", a: "Short URLs are easier to share, look cleaner, and can be tracked for analytics. They are perfect for social media, SMS, and any platform with character limits." },
  { q: "What Is a Custom URL Shortener?", a: "A custom URL shortener allows you to use your own branded domain for short links, making them more recognizable and trustworthy." },
  { q: "How Do I Shorten a URL for Free?", a: "Simply paste your long URL into the input field above and click Shorten URL. Your free shortened link will be generated instantly." },
  { q: "How Do I Know Your Service Is Reliable and Scalable?", a: "TinyURL has been operating since 2002 and has shortened over 31 billion URLs. Our infrastructure handles billions of redirects monthly." },
  { q: "Can I Use a Domain I Already Own?", a: "Yes! With our paid plans, you can connect your own domain to create fully branded short links." },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row gap-16">
        <div className="md:w-48 flex-shrink:0 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a2e] leading-snug">Frequently Asked Questions</h2>
        </div>
        <div className="flex-1">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-5 flex justify-between items-center text-left text-sm font-medium text-[#1a1a2e] hover:text-teal-600 transition-colors"
              >
                {faq.q}
                <span className={`text-xl text-gray-400 transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openIndex === i && (
                <p className="pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-[#002342] text-center text-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for Shorter, Smarter Links?</h2>
        <p className="text-sm max-w-lg mx-auto mb-6 opacity-90 leading-relaxed">
          Transform a long link into a short, trackable one using our platform. Create a free account or subscribe to a paid plan today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a href="#" className="inline-block px-6 py-3 rounded border-2 border-gray-300 text-gray-300 text-sm font-semibold hover:bg-gray-300 hover:text-[#002342] transition-colors">View Plans</a>
          <a href="#" className="inline-block px-6 py-3 rounded border-2 border-gray-300 text-gray-300 text-sm font-semibold hover:bg-gray-300 hover:text-[#002342] transition-colors">Create Free Account</a>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const cols = [
    {
      title: "Features",
      links: ["Link Editor", "Link Management", "Branded Links", "Short URL Tracking", "QR Code Generator", "Short URL API"],
    },
    {
      title: "Resources",
      links: ["Blog", "For Developers", "Our Proven Process", "About Us"],
    },
    {
      title: "Contact Us",
      links: ["Help Desk", "Contact Sales", "Contact Support", "Report Abuse"],
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Accessibility Statement", "Privacy Manager"],
    },
  ];

  return (
    <footer className="bg-[#033756] py-16 border-t border-teal-900">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-gray-200 mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}><a href="#" className="text-xs text-gray-300 hover:text-teal-400 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
          {/* Brand col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-center lg:items-end gap-4 mt-6 lg:mt-0">
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-teal-200 hover:text-teal-400 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-teal-200 hover:text-teal-400 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* X/Twitter */}
              <a href="#" aria-label="Twitter" className="text-teal-200 hover:text-teal-400 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
            </div>
            <div className="text-xl font-extrabold text-teal-500">TINYURL</div>
            <p className="text-xs text-teal-100 text-center lg:text-right leading-relaxed">© 2026 TinyURL, LLC<br />All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Page 
export default function TinyURLPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PlansSection />
      <FeatureSection />
      <SolutionsSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
