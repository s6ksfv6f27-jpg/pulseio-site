import Image from "next/image";

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #0d0d1a 50%, #0a0a0a 100%)',
      color: '#ffffff',
      padding: '1rem',
      position: 'relative'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '56rem',
        margin: '0 auto'
      }}>
        {/* Logo */}
        <div style={{
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Image
            src="/logo.svg"
            alt="Pulseio Logo"
            width={200}
            height={200}
            className="logo logo-glow"
            priority
          />
        </div>

        {/* Main Heading */}
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 4.5rem)',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          background: 'linear-gradient(to right, #00d4ff, #0066ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Pulseio
        </h1>

        {/* Tagline */}
        <p style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
          marginBottom: '1rem',
          color: '#d1d5db',
          fontWeight: '300'
        }}>
          Decentralized Infrastructure for Real-Time Public Perception
        </p>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          marginBottom: '3rem',
          color: '#9ca3af',
          maxWidth: '42rem',
          margin: '0 auto 3rem',
          lineHeight: '1.7'
        }}>
          Building the next generation of intelligent systems powered by decentralized technology.
          Experience real-time insights with unparalleled reliability and transparency.
        </p>

        {/* Call to Action */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <a
            href="#get-started"
            style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(to right, #00d4ff, #0066ff)',
              borderRadius: '9999px',
              fontWeight: '600',
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 212, 255, 0.5)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            style={{
              padding: '1rem 2rem',
              border: '2px solid #00d4ff',
              borderRadius: '9999px',
              fontWeight: '600',
              color: '#00d4ff',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              background: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#00d4ff';
              e.currentTarget.style.color = 'black';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#00d4ff';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        position: 'absolute',
        bottom: '2rem',
        color: '#6b7280',
        fontSize: '0.875rem'
      }}>
        <p>&copy; 2026 Pulseio. All rights reserved.</p>
      </footer>
    </main>
  );
}

