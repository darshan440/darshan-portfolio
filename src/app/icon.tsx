import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Route segment config
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '20%',
        }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '80%', height: '80%' }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 12 20 L 35 20 L 55 40 L 55 80 L 35 100 L 12 100 Z M 25 32 L 25 88 L 31 88 L 42 77 L 42 43 L 31 32 Z"
            fill="#8b5cf6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 45 20 L 92 20 L 92 34 L 75 34 L 75 100 L 62 100 L 62 34 L 45 34 Z"
            fill="#0ea5e9"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
