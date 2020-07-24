import '../css/fonts.css'
import '../css/tailwind.css'
import 'react-responsive-modal/styles.css'
import 'react-image-lightbox/style.css'

export default function MyApp({ Component, pageProps }) {
  return <>

    <Component key='the-app' {...pageProps} />
    <style jsx>
      {`
  body {
        margin:0
  }
  `}
    </style>
  </>
}
