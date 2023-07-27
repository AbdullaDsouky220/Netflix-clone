import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import  localFont  from '@next/font/local';

const NetflixFont = localFont({
  src: [
    {
      path: "../public/fonts/NetflixSansRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NetflixSansBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/NetflixSansMedium.ttf",
      weight: "400",
      style: "medium",
    },
  ],
});
export default function App({ Component, pageProps }: AppProps) {

  return  <main 
  className={NetflixFont.className}
  >
  <Component {...pageProps} />
</main>
}
