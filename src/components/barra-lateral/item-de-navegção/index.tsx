import styled from "styled-components"


const IconeLista = styled.li`
width: 5vw;
height: 10vh;
`

const ImgLista = styled.img`
width: 32px;
height: 32px;
margin: 0 12px 0 0;
`

const BtnEstilizado = styled.button<{ ativo: boolean }>`
width: 11vw;
height: 5vh;
cursor: pointer;
background-color: transparent;
border: none;
display: flex;
align-items: center;
color: ${(props) => (props.ativo ? "#7B78E5" : "#D9D9D9")};
font-family: "Gand-regular", sans-serif;
`


function ItemNavegação({conteudo ,url, onClick, ativo }: {conteudo:string ,url: string, onClick: () => void, ativo: boolean }) {

    return (
        <IconeLista>
            <BtnEstilizado disabled={ativo} onClick={onClick} ativo={ativo}>
                <ImgLista src={url} alt="" />
                <p>{conteudo}</p>
            </BtnEstilizado>
        </IconeLista>
    )
}

export default ItemNavegação