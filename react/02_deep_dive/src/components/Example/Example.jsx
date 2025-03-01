import { useState, useEffect } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../UI elements/TabButton";
import "./Example.css";

export default function Example() {
    const [activeTab, setActiveTab] = useState("");
    const [exemple, setExemple] = useState({});

    useEffect(() => {
        setExemple(EXAMPLES[activeTab.toLowerCase()]);
    }, [activeTab]);

    return (
        <>
            <menu>
                {Object.keys(EXAMPLES).map((example) => (
                    <TabButton
                        isSelected={activeTab === example}
                        clickHandler={setActiveTab}
                        key={example}
                    >
                        {example}
                    </TabButton>
                ))}
            </menu>
            <div id="tab-content">
                {!activeTab ? (
                    <p>Select an example to see its details.</p>
                ) : null}
                {exemple && (
                    <>
                        <h3>{exemple.title}</h3>
                        <p>{exemple.description}</p>
                        <pre>
                            <code>{exemple.code}</code>
                        </pre>
                    </>
                )}
            </div>
        </>
    );
}
