

export default function Navbar() {

    return(
        <nav className="flex w-full justify-evenly">
            <div className="text-center flex items-center">
                <h1>Logo</h1>
            </div>
            <div>
                <ul className="flex">
                    <li>
                        <a href="/">Link 1</a>
                    </li>
                    <li>
                        <a href="/">Link 2</a>
                    </li>
                    <li>
                        <a href="/">Link 3</a>
                    </li>
                    <li>
                        <a href="/">Link 4</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}