import Navbar from "./components/Navbar.tsx";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero.tsx"

function App() {
    return (
        <BrowserRouter>
        <Navbar />
        <Hero />
        </BrowserRouter>
    );
}

export default App;
