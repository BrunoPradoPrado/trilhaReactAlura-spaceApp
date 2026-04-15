import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  
  max-width: 100%;
`

const LayoutPrincipal = styled.div`
  display: flex;
  gap: 24px; 
`

const ConteudodaGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>

        <Cabecalho />
        <LayoutPrincipal>
          <BarraLateral />
          <ConteudodaGaleria>
            <Banner
              texto={'A galeria mais completa de fotos do espaço!'}
              imagem="/assets/banner.png"
            />
            <Galeria />
          </ConteudodaGaleria>
        </LayoutPrincipal>

      </AppContainer>

    </FundoGradiente>
  )
}

export default App
