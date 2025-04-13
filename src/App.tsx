import styled from "styled-components"
import { Cabecalho } from "./components/cabecalho"
import BarraLateral from "./components/barra-lateral"
import { GlobalStyles } from "./components/global-styles"
import Banner from "./components/banner/banner"

const FundoGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer

function App() {

  return (
    <>
      <FundoGradient>
        <GlobalStyles/>
        <Cabecalho />
        <BarraLateral />
        <Banner/>
      </FundoGradient>
    </>
  )
}

export default App
