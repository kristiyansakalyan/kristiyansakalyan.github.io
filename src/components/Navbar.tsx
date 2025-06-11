const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

const Navbar = () => (
    <nav className="navbar">
        <span onClick={() => scrollTo("header")}>/home</span>
        <span onClick={() => scrollTo("about")}>/about</span>
        <span onClick={() => scrollTo("publications")}>/publication</span>
        <span onClick={() => scrollTo("education")}>/education</span>
        <span onClick={() => scrollTo("research")}>/research</span>
        <span onClick={() => scrollTo("work")}>/work</span>
        <span onClick={() => scrollTo("contact")}>/contact</span>
    </nav>
);

export default Navbar;