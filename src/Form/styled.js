import styled from "styled-components";

export const Button = styled.button`
    padding: 10px;
    background: teal;
    color: white;
    border: none;

    &:hover {
        background: hsl(180, 100%, 30%);
        transform: scale(1.1);
    }

    &:active {
        background: hsl(180, 100%, 35%);
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
`;

export const FormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 10px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;