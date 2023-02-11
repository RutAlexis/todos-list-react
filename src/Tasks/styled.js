import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style:  none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    word-break: break-all;

    ${({ hidden }) => hidden && css`
    display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
       text-decoration: line-through;
`}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background: hsl(120, 65%, 32%);
        border: none;
        color: white;
        height: 25px;
        width: 25px;

        &:hover {
            background: hsl(122, 61%, 40%);
        }
    `}
    ${({ remove }) => remove && css`
        background: hsl(350, 83%, 47%);
        border: none;
        color: white;
        height: 25px;
        width: 25px;

        &:hover {
            background: hsl(350, 83%, 52%);
        }

        &:active{
            background: hsl(350, 83%, 57%);
        }
    `}
`;