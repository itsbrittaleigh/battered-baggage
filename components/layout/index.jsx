import Alert from '../alert'
import Footer from '../footer'
import Meta from '../meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      {preview && (
        <Alert />
      )}
      <main>{children}</main>
      <Footer />
    </>
  )
}
