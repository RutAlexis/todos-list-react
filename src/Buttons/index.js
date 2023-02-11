import { ButtonStyled, ButtonToggleStyled } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <ButtonStyled>
            <ButtonToggleStyled
                onClick={toggleHideDone} >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </ButtonToggleStyled>
            <ButtonToggleStyled
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </ButtonToggleStyled>
        </ButtonStyled>
    )
);

export default Buttons;