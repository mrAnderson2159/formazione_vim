export default function Tabs({ children, buttons, buttonsContainer }) {
    const ButtonsContainer = buttonsContainer || "menu";
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}
