import styled from "styled-components";
import CampoTexto from "./campoTexto";


const HeaderEstilizado = styled.header`
    padding: 60px 0;
    height: 10vh;
    display: flex;
    justify-content: space-between;
`

export function Cabecalho () {
    return (
        <HeaderEstilizado>
           <img src="/imagens/logo-branco.png" alt="" /> 
           <CampoTexto/>
        </HeaderEstilizado>
    )
}