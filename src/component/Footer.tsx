export const Footer = () => {
    return (
        <footer>
            <div className="container background__color footer__list">
                <div>
                    <img src="./img/icon.png" className="nav__icon" />
                    <p>Filmes e Series</p>
                </div>
                <div className="list">
                    <p className="footer__title">Navegação</p>
                    <a href="">Inicio</a>
                    <a href="">Categorias</a>
                    <a href="">Filmes</a>
                    <a href="">Series</a>
                    <a href="">Lançamentos</a>
                    <a href="">Contato</a>
                </div>
                <div className="list">
                    <p className="footer__title">Parceiros</p>
                    <a href="">Site.com.br</a>
                    <a href="">Site2.com.br</a>
                    <a href="">site3.com.br</a>
                    <a href="">site4.com.br</a>
                    <a href="">site5.com.br</a>
                    <a href="">site6.com.br</a>
                </div>
            </div>
        </footer>

    );
}