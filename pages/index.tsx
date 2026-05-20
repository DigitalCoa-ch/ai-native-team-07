import Head from 'next/head'

const workflowSteps = [
  { icon: 'upload', label: 'Input', description: 'Upload listing link, property details, or documents' },
  { icon: 'psychology', label: 'AI Processing', description: 'Extract property information and cross-reference data' },
  { icon: 'search', label: 'Risk Detection', description: 'Check for fake images, duplicates, suspicious pricing' },
  { icon: 'manage_accounts', label: 'Human Review', description: 'High-risk cases validated by expert reviewer' },
  { icon: 'verified', label: 'Recommendation', description: 'Clear fraud-risk report with actionable advice' },
]

const aiChecks = [
  { label: 'Price Comparison', detail: 'Compared with Geneva market data', status: 'analyzed' },
  { label: 'Image Authenticity', detail: 'Reverse image search + duplication check', status: 'analyzed' },
  { label: 'Document Verification', detail: 'Legal document pattern analysis', status: 'analyzed' },
  { label: 'Owner Verification', detail: 'SwissID & Land Registry cross-check', status: 'pending' },
]

const percheItems = [
  { category: 'Assumptions', icon: 'lightbulb', color: 'bg-primary/10 text-primary border-primary/20', items: ['AI can accurately detect price anomalies vs Geneva market data', 'Image duplicate detection catches most stolen listing photos', 'SwissID verification provides reliable identity confirmation', 'Land Registry records are sufficiently up-to-date'] },
  { category: 'Risks', icon: 'warning', color: 'bg-tertiary/10 text-tertiary border-tertiary/20', items: ['Sophisticated scammers may bypass AI detection', 'Market data may not reflect real-time pricing fluctuations', 'False positives could discourage valid listings', 'Legal responsibility if AI misses a scam'] },
  { category: 'Missing Data', icon: 'database', color: 'bg-outline/10 text-outline border-outline/20', items: ['Historical fraud case database (training data)', 'Complete Geneva Land Registry coverage', 'Real-time SwissID verification API access', 'Listing history across all Geneva platforms'] },
  { category: 'Human Oversight', icon: 'security', color: 'bg-secondary/10 text-secondary border-secondary/20', items: ['All HIGH risk verdicts require human validation', 'Legal inconsistencies trigger mandatory review', 'Price anomalies >40% below market go to expert', 'Final recommendations can be appealed'] },
]

const whyAIEssential = [
  { icon: 'speed', title: 'Fast', desc: 'Analyzes listings in seconds vs hours manually' },
  { icon: 'auto_fix_high', title: 'Pattern Detection', desc: 'Spots subtle correlations across thousands of data points' },
  { icon: 'consistency', title: 'Consistent', desc: 'Applies same rigorous checks to every listing' },
  { icon: 'scale', title: 'Scalable', desc: 'Handles unlimited listings without human bottlenecks' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Head>
        <title>Geneva Real Estate Scam Detector | AI-Powered Fraud Prevention</title>
        <meta name="description" content="Protect yourself from rental fraud in Geneva. Our AI analyzes listings, detects scams, and validates property authenticity before you pay or sign." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <header className="bg-primary text-on-primary sticky top-0 z-50 border-b border-primary-container">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-secondary rounded flex items-center justify-center">
                <span className="material-icons text-on-secondary text-sm">shield</span>
              </div>
              <div>
                <span className="text-lg font-semibold tracking-tight">Geneva Fraud Detector</span>
                <span className="block text-xs text-on-primary/60">by GBS(TM) Team</span>
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#workflow" className="text-on-primary/80 hover:text-on-primary text-sm font-medium transition-colors">How it Works</a>
              <a href="#evidence" className="text-on-primary/80 hover:text-on-primary text-sm font-medium transition-colors">Evidence</a>
              <a href="#verify" className="bg-secondary text-on-secondary px-4 py-2 rounded text-sm font-semibold hover:bg-secondary/90 transition-colors">Verify Property</a>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section className="bg-primary text-on-primary py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-3 py-1.5 rounded-full mb-6">
                  <span className="material-icons text-sm">warning</span>
                  <span className="text-sm font-medium">Geneva Housing Scam Crisis</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">Don&apos;t Get Scammed.<br /><span className="text-secondary">Verify Before You Pay.</span></h1>
                <p className="text-lg text-on-primary/80 mb-6 max-w-xl">Geneva renters and buyers face fake listings, stolen photos, suspicious prices, and missing legal documents. Our AI analyzes every listing to detect fraud before you lose money or personal information.</p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-secondary text-on-secondary px-5 py-3 rounded font-semibold hover:bg-secondary/90 transition-colors flex items-center gap-2">
                    <span className="material-icons text-sm">search</span>Check a Listing
                  </button>
                  <button className="border border-on-primary/30 text-on-primary px-5 py-3 rounded font-medium hover:bg-white/10 transition-colors">Learn About Risks</button>
                </div>
              </div>
              <div className="bg-primary-container rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-icons text-error text-xl">gpp_bad</span>
                  <span className="font-semibold text-on-primary">AI Fraud Alert</span>
                </div>
                <div className="bg-surface-dim/30 rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-tertiary text-sm mt-0.5">location_on</span>
                    <div>
                      <p className="text-sm text-on-primary/90">2BR apartment in Eaux-Vives at CHF 1,200/mo</p>
                      <p className="text-xs text-on-primary/50 mt-1">Market rate: CHF 2,400 - 3,200/mo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-tertiary text-sm mt-0.5">photo</span>
                    <div>
                      <p className="text-sm text-on-primary/90">Photos match a property in Zurich</p>
                      <p className="text-xs text-on-primary/50 mt-1">Same images found on 3 other platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-tertiary text-sm mt-0.5">person</span>
                    <div>
                      <p className="text-sm text-on-primary/90">Owner has no SwissID verification</p>
                      <p className="text-xs text-on-primary/50 mt-1">No Land Registry record found</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between bg-error/20 border border-error/30 rounded-lg px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="material-icons text-error text-lg">gpp_bad</span>
                    <span className="font-semibold text-error">HIGH RISK: 87%</span>
                  </div>
                  <span className="text-xs text-on-primary/60">AI confidence: Very High</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold text-primary text-center mb-8">Who Is This For?</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-swiss flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0"><span className="material-icons text-primary">home</span></div>
                <div><h3 className="font-semibold text-primary mb-1">Property Renters</h3><p className="text-sm text-on-surface-variant">Looking for apartments in Geneva? Verify listings before paying deposits or sharing personal documents.</p></div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-swiss flex gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0"><span className="material-icons text-secondary">key</span></div>
                <div><h3 className="font-semibold text-primary mb-1">Property Buyers</h3><p className="text-sm text-on-surface-variant">Searching to purchase? Detect fake listings and verify ownership before signing any contract.</p></div>
              </div>
            </div>
          </div>
        </section>
        <section id="workflow" className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary-fixed text-primary-fixed-dim px-3 py-1.5 rounded-full mb-4">
                <span className="material-icons text-sm">route</span>
                <span className="text-sm font-medium">AI Workflow</span>
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">How Our AI Detects Fraud</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Input - AI Processing - Risk Detection - Human Review - Final Recommendation</p>
            </div>
            <div className="grid md:grid-cols-5 gap-4 mb-12">
              {workflowSteps.map((step, i) => (
                <div key={i} className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant shadow-swiss h-full text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="material-icons text-primary">{step.icon}</span>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">Step {i + 1}</span>
                  <h3 className="font-semibold text-primary mt-2 mb-1">{step.label}</h3>
                  <p className="text-xs text-on-surface-variant">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"><span className="material-icons text-primary text-sm">psychology</span></div>
                <div><h3 className="font-semibold text-primary">AI Analysis Breakdown</h3><p className="text-xs text-on-surface-variant">What our AI checks for each listing</p></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {aiChecks.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-surface-container-lowest rounded-lg p-4 border border-outline-variant">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.status === 'analyzed' ? 'bg-secondary/20' : 'bg-outline/20'}`}>
                      <span className={`material-icons text-sm ${item.status === 'analyzed' ? 'text-secondary' : 'text-outline'}`}>{item.status === 'analyzed' ? 'check_circle' : 'pending'}</span>
                    </div>
                    <div><p className="text-sm font-medium text-primary">{item.label}</p><p className="text-xs text-on-surface-variant">{item.detail}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-3 py-1.5 rounded-full mb-4">
                  <span className="material-icons text-sm">security</span>
                  <span className="text-sm font-medium">Human-in-the-Loop</span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Why Humans Still Matter</h2>
                <p className="text-on-surface-variant mb-6">Real estate decisions involve legal, financial, and personal risks. Our AI flags suspicious patterns, but human experts validate high-stakes recommendations before you see them.</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-surface-container-lowest rounded-lg p-4 border border-secondary/30">
                    <span className="material-icons text-secondary mt-0.5">verified_user</span>
                    <div><p className="text-sm font-medium text-primary">High-risk cases go to human review</p><p className="text-xs text-on-surface-variant">AI flags suspicious patterns, expert validates before final verdict</p></div>
                  </div>
                  <div className="flex items-start gap-3 bg-surface-container-lowest rounded-lg p-4 border border-secondary/30">
                    <span className="material-icons text-secondary mt-0.5">balance</span>
                    <div><p className="text-sm font-medium text-primary">Legal inconsistencies trigger mandatory review</p><p className="text-xs text-on-surface-variant">Contract terms that don&apos;t add up get expert scrutiny</p></div>
                  </div>
                  <div className="flex items-start gap-3 bg-surface-container-lowest rounded-lg p-4 border border-secondary/30">
                    <span className="material-icons text-secondary mt-0.5">appeal</span>
                    <div><p className="text-sm font-medium text-primary">You can appeal any recommendation</p><p className="text-xs text-on-surface-variant">Final verdicts can be reviewed by a human supervisor</p></div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-swiss">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-icons text-primary">rate_review</span>
                  <h3 className="font-semibold text-primary">Human Review Flow</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center"><span className="material-icons text-tertiary text-sm">gpp_bad</span></div>
                    <span className="text-sm text-primary">AI detects HIGH risk (87% scam probability)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><span className="material-icons text-primary text-sm">double_arrow</span></div>
                    <span className="text-sm text-primary">Case queued for expert review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center"><span className="material-icons text-secondary text-sm">manage_accounts</span></div>
                    <span className="text-sm text-primary">Human expert validates verdict</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center"><span className="material-icons text-secondary text-sm">check_circle</span></div>
                    <span className="text-sm text-primary">Final report delivered to user</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-6">          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-tertiary/10 text-tertiary px-3 py-1.5 rounded-full mb-4">
                <span className="material-icons text-sm">auto_awesome</span>
                <span className="text-sm font-medium">Why AI is Essential</span>
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">AI is the Core, Not a Feature</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Without AI, scam detection becomes slower, more expensive, and weaker.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {whyAIEssential.map((item, i) => (
                <div key={i} className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-swiss text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons text-primary">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 justify-center">
                <span className="material-icons text-primary">oxygen</span>
                <span className="text-primary font-medium">Oxygen Test: If AI is removed, fast scam detection becomes difficult.</span>
              </div>
            </div>
          </div>
        </section>
        <section id="evidence" className="py-16 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary-fixed text-primary-fixed-dim px-3 py-1.5 rounded-full mb-4">
                <span className="material-icons text-sm">fact_check</span>
                <span className="text-sm font-medium">Evidence & Risks</span>
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">PERCH Analysis</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Assumptions, Risks, Missing Data, and Human Oversight requirements.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {percheItems.map((item, i) => (
                <div key={i} className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-swiss overflow-hidden">
                  <div className={`px-4 py-3 ${item.color} border-b`}>
                    <div className="flex items-center gap-2">
                      <span className="material-icons text-sm">{item.icon}</span>
                      <span className="font-semibold text-sm">{item.category}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2">
                      {item.items.map((text, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="material-icons text-xs mt-1">circle</span>
                          <span className="text-xs text-on-surface-variant">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="verify" className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Try It Now</h2>
              <p className="text-on-surface-variant">Enter a Geneva property URL or details to get an instant fraud risk assessment.</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-swiss">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="material-icons text-secondary">shield</span>
                  </div>
                  <div><h3 className="font-semibold text-primary">Property Verification</h3><p className="text-xs text-on-surface-variant">AI-powered fraud detection for Geneva listings</p></div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">Listing URL or Address</label>
                    <div className="flex gap-3">
                      <input type="text" placeholder="e.g. https://... or Rue de Rive 12, Geneva" className="flex-1 px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:border-primary outline-none text-sm" />
                      <button className="bg-secondary text-on-secondary px-6 py-3 rounded font-semibold hover:bg-secondary/90 transition-colors">Analyze</button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="material-icons text-primary text-lg">psychology</span>
                      </div>
                      <p className="text-xs text-on-surface-variant">AI Analysis</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="material-icons text-secondary text-lg">manage_accounts</span>
                      </div>
                      <p className="text-xs text-on-surface-variant">Human Review</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary-fixed/30 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="material-icons text-primary-fixed-dim text-lg">verified</span>
                      </div>
                      <p className="text-xs text-on-surface-variant">Risk Report</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-on-primary py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center">
                <span className="material-icons text-on-secondary text-xs">shield</span>
              </div>
              <div><span className="font-semibold">Geneva Fraud Detector</span><span className="block text-xs text-on-primary/60">by GBS(TM) Team</span></div>
            </div>
            <div className="flex items-center gap-6 text-sm text-on-primary/60">
              <span>2025 Geneva Real Estate Scam Detector</span>
              <a href="#" className="hover:text-on-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-on-primary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
