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
    // Read the white canvas logo file directly to avoid satori's transparent PNG outlining/haloing issues
    const filePath = path.join(process.cwd(), 'public/logo.png');
    const imageBuffer = fs.readFileSync(filePath);
    logoDataUri = `data:image/png;base64,${imageBuffer.toString('base64')}`;
  } catch (err) {
    console.error('Failed to load logo image:', err);
    try {
      // Fallback
      const filePath = path.join(process.cwd(), 'public/logo-trans.png');
      const imageBuffer = fs.readFileSync(filePath);
      logoDataUri = `data:image/png;base64,${imageBuffer.toString('base64')}`;
    } catch (fallbackErr) {
      console.error('Failed to load fallback logo:', fallbackErr);
    }
  }

  // Render a clean, pure solid white background with NO borders to prevent any artifacts, corner gaps, or outlines
  // The logo is center-aligned and scaled up to be significantly larger.
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          padding: '40px',
        }}
      >
        {logoDataUri ? (
          <img
            src={logoDataUri}
            alt="Under The Sun Marine"
            style={{
              maxHeight: '550px',
              maxWidth: '1120px',
              objectFit: 'contain',
            }}
          />
        ) : (
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#0A1B3F',
              fontFamily: 'sans-serif',
            }}
          >
            UNDER THE SUN MARINE
          </div>
        )}
      </div>
    ),
    {
      ...size,
    }
  );
}