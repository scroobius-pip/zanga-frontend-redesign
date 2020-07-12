import '../css/fonts.css'
import '../css/tailwind.css'

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
