import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

// Image metadata
export const alt = 'Under The Sun Marine Services';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  let logoDataUri = '';
  try {
    // Try to read the transparent logo first
    const filePath = path.join(process.cwd(), 'public/logo-trans.png');
    const imageBuffer = fs.readFileSync(filePath);
    logoDataUri = `data:image/png;base64,${imageBuffer.toString('base64')}`;
  } catch (e) {
    try {
      // Fallback to regular logo
      const filePath = path.join(process.cwd(), 'public/logo.png');
      const imageBuffer = fs.readFileSync(filePath);
      logoDataUri = `data:image/png;base64,${imageBuffer.toString('base64')}`;
    } catch (err) {
      console.error('Failed to load logo image:', err);
    }
  }

  // Create a stunning premium design for the social card:
  // Clean, white-to-light-blue gradient background, a nice solid navy border frame,
  // highlighted branding message, and our centered logo styled prominent and tight.
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          backgroundImage: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 15%, #f8fafc 50%, #f1f5f9 100%)',
          padding: '40px',
          position: 'relative',
          border: '14px solid #0A1B3F',
        }}
      >
        {/* Abstract wave/sea-accent circles in corners */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            right: '-150px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            backgroundImage: 'radial-gradient(circle, rgba(10, 27, 63, 0.05) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            backgroundImage: 'radial-gradient(circle, rgba(242, 106, 33, 0.06) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Small brand subtitle line */}
        <span
          style={{
            fontFamily: 'sans-serif',
            fontSize: '15px',
            fontWeight: 'bold',
            color: '#F26A21',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            marginBottom: '10px',
          }}
        >
          DOCKSIDE BOAT SERVICE &amp; MAINTENANCE
        </span>

        {/* Centered Logo Container */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '340px',
            width: '100%',
            marginBottom: '10px',
          }}
        >
          {logoDataUri ? (
            <img
              src={logoDataUri}
              alt="Under The Sun Marine"
              style={{
                maxHeight: '330px',
                maxWidth: '750px',
                objectFit: 'contain',
              }}
            />
          ) : (
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#0A1B3F',
                fontFamily: 'sans-serif',
              }}
            >
              UNDER THE SUN MARINE
            </div>
          )}
        </div>

        {/* Bottom textual description to accompany social visual */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: '34px',
              fontWeight: '800',
              color: '#0A1B3F',
              fontFamily: 'sans-serif',
              textAlign: 'center',
              letterSpacing: '-0.5px',
            }}
          >
            Under The Sun Marine Services
          </div>
          <div
            style={{
              fontSize: '18px',
              fontWeight: '500',
              color: '#475569',
              fontFamily: 'sans-serif',
              marginTop: '5px',
              textAlign: 'center',
            }}
          >
            Professional Dockside Support • South Florida • Call Jack (561) 560-5050
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
