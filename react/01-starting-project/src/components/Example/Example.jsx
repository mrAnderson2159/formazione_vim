import { useState, useEffect } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../UI elements/TabButton";
import "./Example.css";

export default function Example() {
    const [activeTab, setActiveTab] = useState("Components");
    const [exemple, setExemple] = useState({});

    useEffect(() => {
        setExemple(EXAMPLES[activeTab.toLowerCase()]);
    }, [activeTab]);

    return (
        <div id="examples">
            <h2>Examples</h2>
            <menu>
                {Object.keys(EXAMPLES).map((example) => (
                    <TabButton clickHandler={setActiveTab} key={example}>
                        {example}
                    </TabButton>
                ))}
            </menu>
            <div id="tab-content">
                <h3>{exemple.title}</h3>
                <p>{exemple.description}</p>
                <pre>
                    <code>{exemple.code}</code>
                </pre>
            </div>
        </div>
    );
}
