import { DefaultSeo } from 'next-seo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          title:'Home',
          site_name:'demo-list',
          url: 'https://demo-list-amanbakytuulu.vercel.app/',
          description:'example for opengraph',
          images: [
            {
              url: 'https://demo-list-amanbakytuulu.vercel.app/logo.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://demo-list-amanbakytuulu.vercel.app/logo.jpg',
              width: 1600,
              height: 900,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://demo-list-amanbakytuulu.vercel.app/logo.jpg' },
          ]
        }} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
