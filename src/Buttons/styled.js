import styled from "styled-components";

export const ButtonStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ButtonToggleStyled = styled.button`
    background: transparent;
    color: teal;
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.3s;

    &:disabled {
        color: #ccc;
    }
    
    &:hover {
        color: hsl(180, 100%, 35%);
    }

    @media(max-width: 767px) {
        flex-basis: 100px;
        margin: 10px auto;
         }
`;