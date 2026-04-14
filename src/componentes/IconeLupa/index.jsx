import styled from "styled-components"
import { CiSearch } from "react-icons/ci"

const Lupa = styled(CiSearch)`
  font-size: 24px;
  color: #bfa8ff;
  cursor: pointer;
  position: relative;
  z-index: 1;
`

const IconeLupa = () => {
  return <Lupa />
}

export default IconeLupa