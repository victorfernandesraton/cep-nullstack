import Nullstack from 'nullstack';
import Logo from 'nullstack/logo';
import './Home.css';

class Home extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Welcome to Nullstack!`;
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
  renderThing({ children }) {
    return (
      <div>
        <p>OK</p>
        {children}
      </div>
    )
  }

  render({ project }) {
    return (
      <section>
        <article>
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

          <Thing>
            <span>
              Hint: we have a
              <Link href="vscode:extension/ChristianMortaro.vscode-nullstack">
                VS Code Extension
              </Link>
            </span>
          </Thing>
          <ul>
            <li>
              <Link href="https://nullstack.app/stateless-components">
                🎉 Create your first component
              </Link>
            </li>
            <li>
              <Link href="https://nullstack.app/routes-and-params">
                ✨ Set your first route
              </Link>
            </li>
            <li>
              <Link href="https://nullstack.app/context">
                ⚡ Define your context
              </Link>
            </li>
            <li>
              <Link href="https://github.com/nullstack/nullstack/stargazers">
                ⭐ Leave a star on github
              </Link>
            </li>
            <li>
              <Link href="https://youtube.com/nullstack">
                🎬 Subscribe to our Youtube Channel
              </Link>
            </li>
          </ul>
        </article>
        <aside>
          <Link href="https://nullstack.app/waifu">
            <img src="/nulla-chan.webp" alt="Nulla-Chan: Nullstack's official waifu" />
          </Link>
        </aside>
      </section>
    )
  }

}

export default Home;