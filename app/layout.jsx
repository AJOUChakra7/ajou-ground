import '../styles/global.css'
import React from 'react';

export const metadata = {
  title: '아주그라운드',
  description: '아주대학교의 운동 시설을 한 눈에!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="full:w-[25rem]">
        {children}
      </body>
    </html>
  )
}
