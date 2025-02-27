import logoImage from "../../assets/react-core-concepts.png";
import "./Header.css";

export default function Header() {
    function randomWorld() {
        const words = ["Fundamental", "Core", "Crucial"];

        return words[Math.round(Math.random() * (words.length - 1))];
    }

    const description = randomWorld();

    return (
        <header>
            <img src={logoImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app
                you are going to build! Let's get started!
            </p>
        </header>
    );
}
