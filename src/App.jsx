import styled           from "styled-components"
import EstilosGlobais   from "./componentes/EstilosGlobais"
import Cabecalho        from "./componentes/Cabecalho"
import BarraLateral     from "./componentes/BarraLateral"
import Banner           from "./componentes/Banner"
import Galeria          from "./componentes/Galeria"
import bannerBackground from "/assets/banner.png"
import fotos            from "./fotos.json"
import { useState }     from "react"
import BarraPopulares   from "./componentes/Galeria/BarraPopulares"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height: 100vh;
  padding   : 1rem 1.5rem;
`

const AppContainer = styled.div`
  width : 1440px;
  margin: 0 auto;
  
  max-width: 100%;
`

const LayoutPrincipal = styled.div`
  display: flex;
  gap    : 24px; 
`

const ConteudodaGaleria = styled.section`
  display       : flex;
  flex-direction: column;
  flex-grow     : 1;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)

  return (
    
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>

        <Cabecalho />
        <LayoutPrincipal>
          <BarraLateral />
          <ConteudodaGaleria>
            <Banner
              texto  = {'A galeria mais completa de fotos do espaço!'}
              imagem = {bannerBackground}
            />
            <Galeria fotos = {fotosDaGaleria} />
          </ConteudodaGaleria>
        </LayoutPrincipal>

      </AppContainer>

    </FundoGradiente>
  )
}

export default App
