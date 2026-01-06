"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{ background: '#000000', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'center' }}>
            <Image
              src="/logo.svg"
              alt="Pulse.io Logo"
              width={160}
              height={160}
              className="logo logo-glow"
              priority
            />
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: '#FF6A00',
            letterSpacing: '-0.02em'
          }}>
            PULSE.IO
          </h1>
          
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#ffffff',
            lineHeight: '1.2'
          }}>
            The Operating System for Real-Time Intelligence
          </h2>
          
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: '#888888',
            marginBottom: '1.5rem',
            fontWeight: '400'
          }}>
            Transform signals into decisions — instantly.
          </p>
          
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#aaaaaa',
            maxWidth: '900px',
            margin: '0 auto 3rem',
            lineHeight: '1.7'
          }}>
            Pulse.io is a real-time intelligence platform built to process signals, data, and events at the speed of reality.
            We don't analyze the past. We power decisions in the present.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">Request Early Access</a>
            <a href="#contact" className="btn-secondary">Request a Demo</a>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          opacity: 0.1,
          zIndex: 1
        }}>
          <div className="pulse-animation" style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: '2px solid #FF6A00',
            borderRadius: '50%'
          }} />
        </div>
      </section>

      {/* What is Pulse.io */}
      <section id="what-is" className="section" style={{ background: '#000000' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '2rem',
            color: '#ffffff'
          }}>
            What is Pulse.io
          </h2>
          
          <p style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
            color: '#aaaaaa',
            marginBottom: '2rem',
            lineHeight: '1.7'
          }}>
            Pulse.io is a real-time decision engine designed for systems that cannot wait.
          </p>
          
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#888888',
            marginBottom: '3rem',
            lineHeight: '1.8'
          }}>
            From financial markets to health signals, from smart infrastructure to enterprise operations, 
            Pulse.io captures, processes, and transforms live data into actionable intelligence — instantly.
          </p>
          
          <div style={{ fontSize: '1.3rem', lineHeight: '2', color: '#ffffff', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>No latency.</p>
            <p style={{ marginBottom: '0.5rem' }}>No delay.</p>
            <p style={{ marginBottom: '0.5rem' }}>No noise.</p>
          </div>
          
          <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FF6A00' }}>
            Just clarity.
          </p>
        </div>
      </section>

      {/* How Pulse.io Works */}
      <section id="how-it-works" className="section" style={{ background: '#0a0a0a' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '4rem',
            textAlign: 'center',
            color: '#ffffff'
          }}>
            How Pulse.io Works
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
            marginBottom: '4rem'
          }}>
            {[
              { 
                num: '1', 
                title: 'Capture', 
                desc: 'Ingest real-time signals from any source — data streams, devices, systems, or events.' 
              },
              { 
                num: '2', 
                title: 'Process', 
                desc: 'Our AI-native core analyzes signals continuously, detecting patterns, risks, and opportunities as they happen.' 
              },
              { 
                num: '3', 
                title: 'Decide', 
                desc: 'Pulse.io delivers immediate, reliable insights so systems and teams can act without hesitation.' 
              }
            ].map((step, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '4rem',
                  fontWeight: '800',
                  color: '#FF6A00',
                  opacity: '0.3',
                  marginBottom: '1rem'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#ffffff' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#888888', lineHeight: '1.6' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.2rem', color: '#888888', marginBottom: '0.5rem' }}>
              Real time is not fast enough.
            </p>
            <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FF6A00' }}>
              Pulse.io is faster.
            </p>
          </div>
        </div>
      </section>

      {/* Why Pulse.io */}
      <section id="why" className="section" style={{ background: '#000000' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '4rem',
            textAlign: 'center',
            color: '#ffffff'
          }}>
            Why Pulse.io
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem'
          }}>
            {[
              { 
                title: 'Built for Real Time', 
                desc: 'Designed from the ground up for ultra-low latency environments.' 
              },
              { 
                title: 'AI at the Core', 
                desc: 'Artificial intelligence is not a feature — it is the foundation.' 
              },
              { 
                title: 'Enterprise-Grade Security', 
                desc: 'End-to-end encryption, zero-trust architecture, compliance-ready.' 
              },
              { 
                title: 'Scalable by Design', 
                desc: 'From startups to global infrastructure, Pulse.io scales without friction.' 
              },
              { 
                title: 'Decision-First Architecture', 
                desc: 'We do not generate dashboards. We generate decisions.' 
              }
            ].map((item, i) => (
              <div key={i} style={{
                padding: '2.5rem',
                border: '1px solid rgba(255, 106, 0, 0.2)',
                borderRadius: '12px',
                background: 'rgba(255, 106, 0, 0.02)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF6A00';
                e.currentTarget.style.background = 'rgba(255, 106, 0, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 106, 0, 0.2)';
                e.currentTarget.style.background = 'rgba(255, 106, 0, 0.02)';
              }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1rem', color: '#FF6A00' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#888888', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="section" style={{ background: '#0a0a0a' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '4rem',
            textAlign: 'center',
            color: '#ffffff'
          }}>
            Use Cases
          </h2>
          
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              { title: 'Finance & Trading', desc: 'React to market signals in milliseconds.' },
              { title: 'Health & BioSignals', desc: 'Monitor and respond to critical signals instantly.' },
              { title: 'Smart Cities & Infrastructure', desc: 'Turn live data into autonomous decisions.' },
              { title: 'IoT & Industry', desc: 'Control, predict, and optimize operations in real time.' },
              { title: 'Enterprise Intelligence', desc: 'Move from reports to action — now.' }
            ].map((useCase, i) => (
              <div key={i} style={{
                padding: '2rem',
                marginBottom: '1.5rem',
                borderLeft: '4px solid #FF6A00',
                background: 'rgba(255, 106, 0, 0.02)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 106, 0, 0.05)';
                e.currentTarget.style.paddingLeft = '2.5rem';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 106, 0, 0.02)';
                e.currentTarget.style.paddingLeft = '2rem';
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: '#ffffff' }}>
                  {useCase.title}
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#888888' }}>
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="section" style={{ background: '#000000' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '2rem',
            color: '#ffffff'
          }}>
            Technology
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            color: '#aaaaaa',
            marginBottom: '3rem',
            lineHeight: '1.7'
          }}>
            Pulse.io is built on a modern, distributed, cloud-native architecture.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {[
              'Real-time signal processing',
              'Distributed systems at scale',
              'AI-driven predictive models',
              'Edge and cloud ready'
            ].map((tech, i) => (
              <div key={i} style={{
                padding: '1.5rem',
                border: '1px solid rgba(255, 106, 0, 0.3)',
                borderRadius: '8px',
                color: '#FF6A00',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                {tech}
              </div>
            ))}
          </div>
          
          <div>
            <p style={{ fontSize: '1.1rem', color: '#888888', marginBottom: '0.5rem' }}>
              This is not analytics software.
            </p>
            <p style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FF6A00' }}>
              This is real-time intelligence infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section id="security" className="section" style={{ background: '#0a0a0a' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '2rem',
            color: '#ffffff'
          }}>
            Security & Trust
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            color: '#aaaaaa',
            marginBottom: '3rem',
            lineHeight: '1.7'
          }}>
            Security is not optional. It is fundamental.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              'End-to-end encryption',
              'Zero-trust architecture',
              'Enterprise-grade compliance',
              'Designed for mission-critical systems'
            ].map((feature, i) => (
              <div key={i} style={{
                padding: '2rem 1.5rem',
                border: '1px solid rgba(255, 106, 0, 0.2)',
                borderRadius: '8px',
                color: '#FF6A00',
                fontSize: '1.05rem',
                fontWeight: '600'
              }}>
                {feature}
              </div>
            ))}
          </div>
          
          <p style={{ fontSize: '1.2rem', color: '#888888' }}>
            Pulse.io is built for environments where failure is not an option.
          </p>
        </div>
      </section>

      {/* About Pulse.io */}
      <section id="about" className="section" style={{ background: '#000000' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '4rem',
            color: '#ffffff'
          }}>
            About Pulse.io
          </h2>
          
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#FF6A00' }}>
              Our Mission
            </h3>
            <p style={{ fontSize: '1.2rem', color: '#aaaaaa', lineHeight: '1.8' }}>
              To empower systems and organizations to make decisions at the speed of reality.
            </p>
          </div>
          
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#FF6A00' }}>
              Our Vision
            </h3>
            <p style={{ fontSize: '1.2rem', color: '#aaaaaa', lineHeight: '1.8' }}>
              A world where intelligence is instantaneous, adaptive, and always ahead.
            </p>
          </div>
          
          <p style={{ fontSize: '1.2rem', color: '#888888', fontStyle: 'italic' }}>
            Pulse.io exists to remove delay from decision-making.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="section" style={{ background: '#0a0a0a', minHeight: '80vh' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: '#ffffff',
            lineHeight: '1.3'
          }}>
            The Future Reacts in Real Time
          </h2>
          
          <p style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: '700',
            color: '#FF6A00',
            marginBottom: '3rem'
          }}>
            So should your systems.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:contact@pulse.io" className="btn-primary">Request Early Access</a>
            <a href="mailto:contact@pulse.io" className="btn-secondary">Contact Pulse.io</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#000000',
        borderTop: '1px solid rgba(255, 106, 0, 0.1)',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FF6A00' }}>Pulse.io</span>
            <p style={{ fontSize: '0.9rem', color: '#888888', marginTop: '0.5rem' }}>
              Real-Time Intelligence Infrastructure
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <a href="#" style={{ color: '#888888', textDecoration: 'none', transition: 'color 0.3s' }}
               onMouseEnter={(e) => e.currentTarget.style.color = '#FF6A00'}
               onMouseLeave={(e) => e.currentTarget.style.color = '#888888'}>Privacy Policy</a>
            <a href="#" style={{ color: '#888888', textDecoration: 'none', transition: 'color 0.3s' }}
               onMouseEnter={(e) => e.currentTarget.style.color = '#FF6A00'}
               onMouseLeave={(e) => e.currentTarget.style.color = '#888888'}>Terms of Service</a>
            <a href="mailto:contact@pulse.io" style={{ color: '#888888', textDecoration: 'none', transition: 'color 0.3s' }}
               onMouseEnter={(e) => e.currentTarget.style.color = '#FF6A00'}
               onMouseLeave={(e) => e.currentTarget.style.color = '#888888'}>Contact</a>
          </div>
          
          <p style={{ color: '#888888', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Pulse.io
          </p>
        </div>
      </footer>
    </>
  );
}

