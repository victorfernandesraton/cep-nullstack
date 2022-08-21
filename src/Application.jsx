import Nullstack from 'nullstack';
import FormClientSide from './form/FromClientSide';
import FormServerSide from './form/FormServerSide';
import './styles.css'
import Container from './Container';

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'en-US';
  }

  renderHead() {
    return (
      <head>
        <link
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet" />
      </head>
    )
  }

  render() {
    return (
      <main>
        <Head />
        <Container>
          <FormClientSide route="/" />
          <FormClientSide route="/client" />
          <FormServerSide route="/server" />
        </Container>
      </main>
    )
  }

}

export default Application;