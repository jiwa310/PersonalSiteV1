import '@/styles/globals.css'

import { League_Spartan } from 'next/font/google';

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '700'], // Include the font weights you need
  variable: '--font-league-spartan',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={leagueSpartan.variable}>
      <Component {...pageProps} />
    </main>
  )
}

