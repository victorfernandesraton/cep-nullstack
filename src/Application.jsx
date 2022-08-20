import Nullstack from 'nullstack';
import './Application.css';
import Home from './Home';
import FormClientSide from './form/FromClientSide';
import FormServerSide from './form/FormServerSide';

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
        <Home route="/" />
        <FormClientSide route="/client" />
        <FormServerSide route="/server" />
      </main>
    )
  }

}

export default Application;