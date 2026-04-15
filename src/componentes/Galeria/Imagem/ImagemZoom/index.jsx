import styled from "styled-components"
import { FaHeart } from "react-icons/fa"
import { CiHeart } from "react-icons/ci"
import { IoClose } from "react-icons/io5"
import { useState } from "react"

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Modal = styled.div`
  background-color: #03122a;
  border-radius: 20px;
  max-width: 650px;
  width: 90%;
  overflow: hidden;
  position: relative;
`

const ImagemExpandida = styled.img`
  width: 100%;
  display: block;
`

const BotaoFechar = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`

const Rodape = styled.div`
  padding: 16px;
  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Infos = styled.div`
  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
  }

  p {
    margin: 4px 0 0;
    font-size: 14px;
    opacity: 0.7;
  }
`

const BotaoFavorito = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 22px;
  cursor: pointer;
`

const ImagemZoom = ({ foto, favorito, onToggleFavorito, onClose }) => {
  if (!foto) return null

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <BotaoFechar onClick={onClose}>
          <IoClose />
        </BotaoFechar>

        <ImagemExpandida src={foto.path} alt={foto.titulo} />

        <Rodape>
          <Infos>
            <h3>{foto.titulo}</h3>
            <p>{foto.fonte} / fotógrafo: Bruno do Prado</p>
          </Infos>


          <BotaoFavorito onClick={onToggleFavorito}>
            {favorito ? <FaHeart /> : <CiHeart />}
          </BotaoFavorito>

        </Rodape>
      </Modal>
    </Overlay>
  )
}

export default ImagemZoom