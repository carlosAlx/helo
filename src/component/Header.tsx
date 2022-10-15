type HeaderProps = {
    text?: string,
    no1?: string;
}

export function Header(props: HeaderProps) {
    return (
        <header className="header">
            <div className="container">
                <nav className="menu__main">
                    <img src="./img/icon.png" alt="" className="nav__icon" />
                    <ul className="menu__nav">
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Categorias</a></li>
                        <li><a href="">Filmes</a></li>
                        <li><a href="">Series</a></li>
                        <li><a href="">Lançamentos</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                    <div className="search__area">
                        <input placeholder="Pesquisar" />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </nav>
            </div>
        </header>
    );
}