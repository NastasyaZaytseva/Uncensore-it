import { useState } from 'react';
import Head from 'next/head';

export default function Contribute() {
  const [formData, setFormData] = useState({
    suggestedWord: '',
    category: '',
    reason: '',
    recommendation: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/contribute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          suggestedWord: '',
          category: '',
          reason: '',
          recommendation: '',
          email: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contribute - Text Changer</title>
        <meta name="description" content="Help improve our text transformation tool by suggesting new words and features" />
      </Head>

      <div className="min-h-screen bg-slate-50 relative overflow-hidden">
        {/* Sophisticated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30">

          </div>
        </div>

        <div className="relative z-10">
          {/* Navigation */}
          <nav className="px-6 py-8">
            <div className="max-w-7xl mx-auto">
              <a 
                href="/" 
                className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors duration-200 group"
              >
                <span className="font-medium">← Back to Text Changer</span>
              </a>
            </div>
            <br />
          </nav>

          {/* Header */}
          <header className="px-6 pb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Help Us Improve
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Your suggestions help make our text transformation tool more comprehensive and effective. 
                <span className="block mt-2 text-blue-600 font-medium">Share words that should be included or recommend new features.</span>
              </p>
            </div>
          </header>

          {/* Main Content */}
          <main className="px-6 pb-20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl border border-slate-200/60 overflow-hidden">
                <form onSubmit={handleSubmit} className="divide-y divide-slate-100">
                  
                  {/* Word Suggestion Section */}
                  <section className="p-8 md:p-12">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-slate-900">Suggest a Word</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="form-group">
                        <label htmlFor="suggestedWord" className="form-label">
                          Word or Phrase <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="suggestedWord"
                          name="suggestedWord"
                          value={formData.suggestedWord}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="e.g., transgender, sexuality, etc."
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="category" className="form-label">
                          Category
                        </label>
                        <div className="relative">
                          <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="form-select"
                          >
                            <option value="">Select a category</option>
                            <option value="gender-identity">Gender Identity</option>
                            <option value="sexual-orientation">Sexual Orientation</option>
                            <option value="reproductive-health">Reproductive Health</option>
                            <option value="anatomy">Anatomy</option>
                            <option value="sexual-health">Sexual Health</option>
                            <option value="relationships">Relationships</option>
                            <option value="medical-terms">Medical Terms</option>
                            <option value="other">Other</option>
                          </select>
                          <div className="select-arrow">
                            <span className="text-slate-400">▼</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="reason" className="form-label">
                        Why should this word be included? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        rows={4}
                        className="form-textarea"
                        placeholder="Explain why this word is commonly censored or should be transformed..."
                        required
                      />
                    </div>
                  </section>

                  {/* Recommendations Section */}
                  <section className="p-8 md:p-12">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-slate-900">General Recommendations</h2>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="recommendation" className="form-label">
                        Feature Suggestions or Improvements
                      </label>
                      <textarea
                        id="recommendation"
                        name="recommendation"
                        value={formData.recommendation}
                        onChange={handleInputChange}
                        rows={5}
                        className="form-textarea"
                        placeholder="Share ideas for new features, improvements to the transformation algorithm, UI suggestions, or any other feedback..."
                      />
                    </div>
                  </section>

                  {/* Contact Section */}
                  <section className="p-8 md:p-12">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-slate-900">
                        Contact <span className="text-slate-500 text-lg font-normal">(Optional)</span>
                      </h2>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="your.email@example.com"
                      />
                      <p className="mt-3 text-sm text-slate-500">
                        We'll only use this to ask clarifying questions about your suggestion.
                      </p>
                    </div>
                  </section>

                  {/* Submit Section */}
                  <section className="p-8 md:p-12 bg-slate-50">
                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="submit-button"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Contribution'}
                      </button>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                        <p className="text-green-800 font-medium">
                          ✓ Thank you for your contribution! We'll review your suggestion.
                        </p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                        <p className="text-red-800 font-medium">
                          ⚠ There was an error submitting your contribution. Please try again.
                        </p>
                      </div>
                    )}
                  </section>
                </form>
              </div>

              {/* Guidelines */}
              <div className="mt-16 bg-white rounded-3xl shadow-xl border border-slate-200/60 p-8 md:p-12">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">Contribution Guidelines</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-slate-600 leading-relaxed">Suggest words that are commonly censored on social media platforms</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-slate-600 leading-relaxed">Focus on terms related to health, identity, and education that shouldn't be censored</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-slate-600 leading-relaxed">Provide clear reasoning for why a word should be included</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-slate-600 leading-relaxed">Be respectful and constructive in your suggestions</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-slate-600 leading-relaxed">Check if the word is already in our list before suggesting</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-slate-600 leading-relaxed">Help us build a more inclusive and comprehensive tool</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        <style jsx>{`
          h1, h2, h3 {
            font-family: 'TAN', sans-serif;
          }

          body, p, label, input, textarea, select, button, li, span {
            font-family: 'Grotesk', sans-serif;
          }

          .form-group {
            margin-bottom: 1.5rem;
          }

          .form-label {
            display: block;
            font-size: 0.875rem;
            font-weight: 600;
            color: #374151;
            margin-bottom: 0.5rem;
            letter-spacing: 0.025em;
          }

          .form-input, .form-textarea {
            width: 100%;
            padding: 0.875rem 1rem;
            border: 2px solid #e5e7eb;
            border-radius: 0.75rem;
            background-color: #ffffff;
            color: #111827;
            font-size: 1rem;
            line-height: 1.5;
            transition: all 0.2s ease-in-out;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          .form-input:focus, .form-textarea:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            transform: translateY(-1px);
          }

          .form-input:hover, .form-textarea:hover {
            border-color: #d1d5db;
          }

          .form-select {
            width: 100%;
            padding: 0.875rem 3rem 0.875rem 1rem;
            border: 2px solid #e5e7eb;
            border-radius: 0.75rem;
            background-color: #ffffff;
            color: #111827;
            font-size: 1rem;
            line-height: 1.5;
            transition: all 0.2s ease-in-out;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            appearance: none;
            cursor: pointer;
          }

          .form-select:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            transform: translateY(-1px);
          }

          .form-select:hover {
            border-color: #d1d5db;
          }

          .select-arrow {
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
          }

          .form-textarea {
            resize: vertical;
            min-height: 120px;
          }

          .submit-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 2rem;
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            color: white;
            font-weight: 600;
            font-size: 1rem;
            border: none;
            border-radius: 0.75rem;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            min-width: 200px;
          }

          .submit-button:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }

          .submit-button:active:not(:disabled) {
            transform: translateY(0);
          }

          .submit-button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
          }

          /* Smooth transitions for all elements */
          * {
            transition: all 0.2s ease-in-out;
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }
        `}</style>
      </div>
    </>
  );
} 