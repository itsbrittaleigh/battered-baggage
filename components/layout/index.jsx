import Alert from '../alert'
import Header from '../header';
import Meta from '../meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      {preview && (
        <Alert />
      )}
      <Header />
      <main>{children}</main>
    </>
  )
}
