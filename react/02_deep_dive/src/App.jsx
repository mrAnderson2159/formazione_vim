import Header from "./components/Header/Header";
import Section from "./components/UI elements/Section";
import MainList from "./components/MainList/MainList";
import Example from "./components/Example/Example";

function App() {
    return (
        <>
            <Header />
            <main>
                <Section title="Core Concepts" id="core-concepts">
                    <MainList />
                </Section>
                <Section title="Examples" id="examples">
                    <Example />
                </Section>
            </main>
        </>
    );
}

export default App;
