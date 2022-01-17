import styled from "styled-components";

export const ButtonContainer = styled.div`
 margin-bottom: 12px;   
`

export const Button = styled.button`
border: 1px solid black;
border-radius: 3px;
cursor: pointer;
background-color: rgb(240, 228, 228);
padding: 3px;

&:not(:last-child){
    margin-right: 10px;
 
}
   &:hover{
        background-color: blue;
        color: white;
        border: none;
    }
` 
