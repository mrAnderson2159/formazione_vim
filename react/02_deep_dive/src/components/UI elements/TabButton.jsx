export default function TabButton({ clickHandler, children, isSelected }) {
    function handleClick(e) {
        clickHandler(e.target.textContent);
    }

    const className = isSelected ? "active" : "";

    return (
        <li>
            <button className={className} onClick={handleClick}>
                {children}
            </button>
        </li>
    );
}
