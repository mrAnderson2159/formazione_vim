export default function TabButton({ clickHandler, children }) {
    function handleClick(e) {
        clickHandler(e.target.textContent);
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}
