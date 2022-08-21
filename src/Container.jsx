import Nullstack from 'nullstack';

export default class Container extends Nullstack {

    links = [{
        name: 'Server',
        link: '/server'
    },
    {
        name: 'Client',
        link: '/client'
    }
    ]
    prepare({ project, page }) {
        page.title = `${project.name} - Welcome to CEP teste!`;
        page.description = `${project.name} was made with Nullstack`;
    }

    renderLink({ children, href }) {
        const link = href + '?ref=create-nullstack-app';
        return (
            <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href={link} data-mdb-ripple="true" data-mdb-ripple-color="light" rel="noopener noreferrer">
                {children}
            </a>
        )
    }


    render({ children }) {
        return (
            <>
                <nav class="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-center">
                    <div class="px-6 w-full flex flex-col items-cente">

                        <ul class="navbar-nav lg:flex lg:flex-row  justify-center">
                            {this.links.map(link => (
                                <li class="nav-item">
                                    <Link href={link.link}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                {children}
            </>
        )
    }

}
