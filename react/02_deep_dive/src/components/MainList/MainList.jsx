import CoreConcept from "../UI elements/CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import "./MainList.css";

export default function MainList() {
    return (
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
    );
}
