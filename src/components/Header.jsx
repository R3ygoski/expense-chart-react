import logo from '../assets/logo.svg'

export default function Header() {

    return (
        <header className="card__header">
            <div className="card__header__wrapper">
            <h1>My balance</h1>
            <p>$921.48</p>
            </div>
            <figure className="card__header__image">
                <img src={logo} alt="Logo" />
            </figure>
        </header>
    )
}
