import styled from "styled-components"
import IconeLupa from "../IconeLupa"

const CampoTextoEstilizado = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  width: 100%;
  max-width: 602px;
  height: 56px;

  padding: 0 24px;

  background: linear-gradient(
    180deg,
    #061b38 0%,
    #041833 100%
  );

  border-radius: 15px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: 15px;
    background: linear-gradient(
        90deg,
        #C98CF1,
        #7B78E5
    );

    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);

    mask-composite: exclude;
    -webkit-mask-composite: xor;
    }

  input {
    flex: 1;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 20px;
    color: #ffffff;
    position: relative;
    z-index: 1;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.75);
  }
`

const CampoTexto = () => {
  return (
    <CampoTextoEstilizado>
      <input type="text" placeholder="O que você procura?" />
      <IconeLupa />
    </CampoTextoEstilizado>
  )
}

export default CampoTexto