import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AmbientBackground from "./components/AmbientBackground";

function App() {
    return (
        <div className="relative min-h-screen bg-primary">
            <AmbientBackground />

            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Skills />
                <Projects />
                <Education />
                <Contact />
                <ScrollToTopButton />
            </div>
        </div>
    );
}

export default App;
