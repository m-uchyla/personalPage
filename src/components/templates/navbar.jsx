import logo from "../../assets/logo.png";

export default function Navbar() {

    return(
        <nav className="flex justify-between mx-[20rem]">
            <div className="flex items-center">
                <img src={logo} className="h-[40px]"/>
            </div>
            <div>
                <ul className="flex">
                    <li>   
                        <a href="/">
                            O mnie
                            <div className="dot"></div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Umiejętności
                            <div className="dot"></div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Projekty
                            <div className="dot"></div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Kontakt
                            <div className="dot"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}