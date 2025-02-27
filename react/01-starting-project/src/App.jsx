import Header from "./components/Header/Header";
import MainList from "./components/MainList/MainList";
import Example from "./components/Example/Example";

function App() {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <MainList />
                </section>
                <section style={{ marginTop: "2rem" }}>
                    <Example />
                </section>
            </main>
        </div>
    );
}

export default App;
