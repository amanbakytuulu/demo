import { DefaultSeo } from 'next-seo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          title:'Home',
          site_name:'prob.com.net',
          url: 'https://www.url.ie/',
          site_name: 'SiteName',
          images: [
            {
              url: 'https://demo/react.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://demo/react.jpg',
              width: 1600,
              height: 900,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://demo/react.jpg' },
          ]
        }} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
