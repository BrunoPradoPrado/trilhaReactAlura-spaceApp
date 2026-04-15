import styled from "styled-components"
import { useState } from "react"
import { FaHeart } from "react-icons/fa"
import { CiHeart } from "react-icons/ci"
import { BsArrowsAngleContract } from "react-icons/bs"
import { AiOutlineExpandAlt } from "react-icons/ai"
import ImagemZoom from "./ImagemZoom"

const FigureImagemGaleria = styled.figure`
  margin: 0;
  border-radius: 20px;
  overflow: hidden;
  background-color: #03122a;

  img {
    width: 100%;
    display: block;
  }

  figcaption {
    padding: 14px 16px;
    color: #fff;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
  }

  .infos {
    display: flex;
    flex-direction: column;
  }

  .fonte {
    margin-top: 4px;
    font-size: 14px;
    opacity: 0.7;
  }

  
  footer {
    display: flex;
    gap: 12px;
  }


  footer button {
    background: transparent;
    border: none;
    color: #FFF;
    cursor: pointer;
    font-size: 22px;
  }
`

const Imagem = ({ foto }) => {
  const [favorito, setFavorito] = useState(false)
  const [expandido, setExpandido] = useState(false)

  return (
    <>
      <FigureImagemGaleria>
        <img src={foto.path} alt={foto.titulo} />


        <figcaption>
          <div className="infos">
            <h3>{foto.titulo}</h3>

            <p className="fonte">
              {foto.fonte}/Bruno do Prado/viagem{(foto.id + 1 * foto.id - 4)}
            </p>
          </div>

          <footer>
            <button onClick={() => setFavorito(!favorito)}>
              {favorito ? <FaHeart /> : <CiHeart />}
            </button>

            <button onClick={() => setExpandido(true)}>
              <AiOutlineExpandAlt />
            </button>
          </footer>
        </figcaption>

      </FigureImagemGaleria>

      {expandido && (
        <ImagemZoom
          foto={foto}
          favorito={favorito}
          onToggleFavorito={() => setFavorito(!favorito)}
          onClose={() => setExpandido(false)}
        />
      )}

    </>
  )
}

export default Imagem