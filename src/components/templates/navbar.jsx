

export default function Navbar() {

    return(
        <nav className="flex justify-between mx-[20rem]">
            <div className="text-center flex items-center">
                <h1>Logo</h1>
            </div>
            <div>
                <ul className="flex">
                    <li>   
                        <a href="/">
                            Link
                            <div className="dot"></div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Link
                            <div className="dot"></div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Link
                            <div className="dot"></div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Link
                            <div className="dot"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}