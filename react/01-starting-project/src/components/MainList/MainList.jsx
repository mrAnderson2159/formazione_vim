import CoreConcept from "../UI elements/CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import "./MainList.css";

export default function MainList() {
    return (
        <div id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((concept, index) => (
                    <CoreConcept
                        key={index}
                        image={concept.image}
                        title={concept.title}
                        description={concept.description}
                    />
                ))}
            </ul>
        </div>
    );
}
