import styled from "styled-components";

export const SectionStyled = styled.section`
    margin: 10px 0;
    background: white;
    box-shadow: 0 0 5px #ddd ;
    font-family: Open Sans, sans-serif;
`;

export const HeaderStyled = styled.header`
    font-size: 20px;
    padding: 15px;
    border-bottom: 1px solid #ddd;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;