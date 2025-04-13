import styled from "styled-components"


const IconeLista = styled.li`
font-size: 24px;
margin-bottom: 30px;
`

const ImgLista = styled.img`
width: 32px;
height: 32px;
margin: 0 12px 0 0;
`

const BtnEstilizado = styled.button<{ ativo: boolean, conteudo: string }>`
width: 12vw;
height: 5vh;
cursor: pointer;
background-color: transparent;
border: none;
display: flex;
align-items: center;
color: ${(props) => (props.ativo ? "#7B78E5" : "#D9D9D9")};
font-family: ${(props) => (props.conteudo === "Inicio" ? "Gand-Bold" : "Gand-Begular")}, sans-serif;
`


function ItemNavegação({conteudo ,url, onClick, ativo }: {conteudo:string ,url: string, onClick: () => void, ativo: boolean }) {

    return (
        <IconeLista>
            <BtnEstilizado disabled={ativo} onClick={onClick} ativo={ativo} conteudo={conteudo}>
                <ImgLista src={url} alt="" />
                <p>{conteudo}</p>
            </BtnEstilizado>
        </IconeLista>
    )
}

export default ItemNavegação