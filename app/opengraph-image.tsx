import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Klik Finance - Launch an Ethereum coin in seconds'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #4F46E5, #8B5CF6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'white',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '24px',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4F46E5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </div>
          <div style={{ fontSize: '64px', fontWeight: 'bold' }}>klik</div>
        </div>
        <div
          style={{
            fontSize: '32px',
            marginTop: '16px',
            maxWidth: '800px',
            textAlign: 'center',
          }}
        >
          Launch an Ethereum coin in seconds
        </div>
      </div>
    ),
    { ...size }
  )
} 