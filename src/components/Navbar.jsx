import reactLogo from "../assets/react-logo.png"
export default function Navbar () {
    return (
        <header>
            <nav>
                <img src={reactLogo} alt="React Logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}