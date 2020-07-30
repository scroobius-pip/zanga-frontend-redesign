import '../css/fonts.css'
import '../css/tailwind.css'
import 'react-responsive-modal/styles.css'
import 'react-image-lightbox/style.css'
import { Provider } from 'next-auth/client'

export default function MyApp({ Component, pageProps }) {

  const { session } = pageProps

  return <Provider session={session}>

    <Component key='the-app' {...pageProps} />
    <style jsx>
      {`
  body {
        margin:0
  }
  `}
    </style>
  </Provider>
}
