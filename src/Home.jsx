import Nullstack from 'nullstack';
import Logo from 'nullstack/logo';
import './Home.css';

class Home extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Welcome to CEP teste!`;
    page.description = `${project.name} was made with Nullstack`;
  }

  renderLink({ children, href }) {
    const link = href + '?ref=create-nullstack-app';
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }


  render({ project }) {
    return (
      <div>
        <Link href="https://nullstack.app/">
          <Logo height={60} light />
        </Link>
        <h1> {project.name} </h1>
        <p>
          We made some examples to help you getting started! Take a look at the
          <Link href="vscode://file//home/victorraton/www/cep-verify/src">
            src folder
          </Link>.
        </p>
      </div>
    )
  }

}

export default Home;