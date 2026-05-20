import Head from 'next/head'
import { useState } from 'react'

// ============================================================
// Mock data for demo — in production, AI would analyze real listing data
// ============================================================
const mockResults = [
  {
    score: 87,
    risk: 'HIGH',
    verdict: 'Likely Scam',
    color: '#ba1a1a',
    reasons: [
      'Price is 52% below market rate for this area',
      'Listing photos appear on 3 other platforms (Zürich, Basel)',
      'Owner has no SwissID verification',
      'Land Registry shows no record at this address',
    ],
    recommendation: 'Do NOT proceed. Do not send money or personal documents.',
  },
  {
    score: 34,
    risk: 'MEDIUM',
    verdict: 'Suspicious — Verify',
    color: '#b54708',
    reasons: [
      'Price is 15% below market rate',
      'Some photos could not be verified',
      'Owner ID verification is pending',
    ],
    recommendation: 'Request owner verification before proceeding.',
  },
  {
    score: 12,
    risk: 'LOW',
    verdict: 'Appears Legitimate',
    color: '#006d37',
    reasons: [
      'Price aligns with market rates (+/- 5%)',
      'Photos verified — no duplicates found',
      'Owner SwissID verified',
      'Land Registry record confirmed',
    ],
    recommendation: 'Looks trustworthy but always exercise caution.',
  },
]

// ============================================================
// Main page component
// ============================================================
export default function Home() {
  const [input, setInput] = useState('')
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState<typeof mockResults[0] | null>(null)

  function handleAnalyze() {
    if (!input.trim()) return
    setAnalyzing(true)
    setResult(null)
    // Simulate AI processing delay (2 seconds)
    setTimeout(() => {
      const chosen = mockResults[Math.floor(Math.random() * mockResults.length)]
      setResult(chosen)
      setAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-surface">

      <Head>
        <title>Geneva Real Estate Fraud Detector | GBS(TM)</title>
        <meta name="description" content="AI-powered fraud detection for Geneva property listings. Paste a listing URL or address to get an instant risk assessment." />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      {/* ---- HEADER ---- */}
      <header className="bg-primary text-on-primary sticky top-0 z-50 border-b border-primary-container">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-secondary rounded flex items-center justify-center">
              <span className="material-icons text-on-secondary text-sm">shield</span>
            </div>
            <div>
              <span className="font-semibold text-lg">Geneva Fraud Detector</span>
              <span className="block text-xs text-on-primary/60">by GBS(TM)</span>
            </div>
          </div>
        </div>
      </header>

      <main>

        {/* ---- HERO ---- */}
        <section className="bg-primary text-on-primary py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-3 py-1.5 rounded-full mb-4 text-sm font-medium">
              <span className="material-icons text-sm">warning</span>
              Geneva Housing Scam Crisis
            </div>
            <h1 className="text-4xl font-bold mb-4 tracking-tight">
              Don&apos;t Get Scammed.<br />
              <span className="text-secondary">Verify Before You Pay.</span>
            </h1>
            <p className="text-lg text-on-primary/80 mb-6 max-w-xl">
              Paste any Geneva property listing URL or address below. Our AI analyzes it for fraud signals and gives you an instant risk report — in seconds.
            </p>
          </div>
        </section>

        {/* ---- DEMO FORM ---- */}
        <section className="py-12 px-6 bg-surface-container-low">
          <div className="max-w-4xl mx-auto">

            {/* Input card */}
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-swiss mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="material-icons text-secondary text-sm">search</span>
                </div>
                <div>
                  <h2 className="font-semibold text-primary">Property Fraud Check</h2>
                  <p className="text-xs text-on-surface-variant">Paste a listing URL or address</p>
                </div>
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="e.g. https://www.immoscout.ch/listing/12345 or Rue de Rive 12, Geneva"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAnalyze()}
                  className="flex-1 px-4 py-3 rounded-lg border border-outline-variant bg-surface text-sm focus:border-primary outline-none"
                />
                <button
                  onClick={handleAnalyze}
                  disabled={!input.trim() || analyzing}
                  className="bg-secondary text-on-secondary px-6 py-3 rounded font-semibold disabled:opacity-50 hover:bg-secondary/90 transition-colors flex items-center gap-2"
                >
                  {analyzing ? (
                    <>
                      <span className="material-icons text-sm animate-spin">progress_activity</span>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <span className="material-icons text-sm">psychology</span>
                      Analyze
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* ---- RESULTS ---- */}
            {result && (
              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-swiss overflow-hidden">
                {/* Risk badge header */}
                <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between" style={{ backgroundColor: result.color + '15' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: result.color + '25' }}>
                      <span className="material-icons text-lg" style={{ color: result.color }}>gpp_bad</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{result.verdict}</p>
                      <p className="text-xs text-on-surface-variant">AI confidence: {100 - result.score}%</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold" style={{ color: result.color }}>{result.score}%</p>
                    <p className="text-xs text-on-surface-variant">Fraud Risk Score</p>
                  </div>
                </div>

                {/* Reasons */}
                <div className="px-6 py-4 border-b border-outline-variant">
                  <h3 className="font-semibold text-primary mb-3 text-sm">Why this score?</h3>
                  <ul className="space-y-2">
                    {result.reasons.map((reason, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-on-surface">
                        <span className="material-icons text-sm mt-0.5" style={{ color: result.color }}>cancel</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommendation */}
                <div className="px-6 py-4 bg-surface-container-low">
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-primary text-sm mt-0.5">lightbulb</span>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Recommendation</p>
                      <p className="text-sm text-on-surface-variant">{result.recommendation}</p>
                    </div>
                  </div>
                </div>

                {/* User decision */}
                <div className="px-6 py-4 border-t border-outline-variant flex items-center justify-between">
                  <p className="text-xs text-on-surface-variant">
                    This is an AI prediction. <strong>You decide</strong> whether to proceed.
                  </p>
                  <button
                    onClick={() => { setResult(null); setInput('') }}
                    className="text-sm text-primary font-medium hover:underline"
                  >
                    Try another listing
                  </button>
                </div>
              </div>
            )}

            {/* Loading skeleton */}
            {analyzing && (
              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-swiss p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-outline/20 rounded-full animate-pulse"></div>
                  <div>
                    <div className="h-4 w-32 bg-outline/20 rounded animate-pulse mb-2"></div>
                    <div className="h-3 w-48 bg-outline/20 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-outline/20 rounded animate-pulse"></div>
                  <div className="h-3 w-5/6 bg-outline/20 rounded animate-pulse"></div>
                  <div className="h-3 w-4/6 bg-outline/20 rounded animate-pulse"></div>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ---- HOW IT WORKS ---- */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-primary text-center mb-8">How It Works</h2>
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: 'upload', title: '1. Paste Listing', desc: 'Enter a URL or address from any Geneva platform' },
                { icon: 'psychology', title: '2. AI Analyzes', desc: 'Checks price, photos, documents, and owner records' },
                { icon: 'verified', title: '3. You Decide', desc: 'See the risk report and choose to proceed or walk away' },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="material-icons text-primary">{step.icon}</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-1 text-sm">{step.title}</h3>
                  <p className="text-xs text-on-surface-variant">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- FOOTER ---- */}
        <footer className="bg-primary text-on-primary py-6 px-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-on-primary/60">
            <div className="flex items-center gap-2">
              <span className="material-icons text-xs">shield</span>
              Geneva Fraud Detector — GBS(TM)
            </div>
            <span>Demo prototype — not legal advice</span>
          </div>
        </footer>

      </main>
    </div>
  )
}