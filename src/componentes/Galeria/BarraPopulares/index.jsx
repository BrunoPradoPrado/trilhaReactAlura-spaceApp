import styled from "styled-components"
import Titulo from "../../Titulo"


const fotosPopulares = [
  "foto-1.png",
  "foto-2.png",
  "foto-3.png",
  "foto-4.png",
  "foto-5.png",
]


const ColunaFotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    align-items: center;
  }
`


const Imagem = styled.img`
  max-width: 212px;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
  }
`

const Botao = styled.button`
    background-color: transparent;
    color           : #fff;
    border          : 2px solid;
    border-color    : #C98CF1;
    padding         : 12px 20px;
    font-size       : 20px;
    border-radius   : 10px;
    cursor          : pointer;
    width           : 100%;
    margin-top      : 16px;
    
    &:hover {
    background-color: rgba(201, 140, 241, 0.6);
  }
`

const Populares = () => {
    return (
        <section>
            <Titulo $alinhamento='center'>Populares</Titulo>
            <ColunaFotos>
                {fotosPopulares.map((foto, index) => (
                    <Imagem
                        key={index}
                        src={`/imagens/populares/${foto}`}
                        alt={`Imagem popular - ${index}`}
                    />
                ))}
            </ColunaFotos>
            <Botao>Ver mais</Botao>
        </section>
    )
}

export default Populares