import { useState } from 'react'
import styled       from 'styled-components'
import tags         from './tags.json'

const TagDiv = styled.div`
  display    : flex;
  align-items: center;
  gap        : 16px;
  margin     : 3rem 0;
`

const ListaTags = styled.div`
  display: flex;
  gap    : 12px;
`

const TituloTags = styled.h2`
    color       : #d9d9d9;
    font-family : 'GandhiSansRegular';
    font-weight : 300;
    margin-right: 3rem;
`

const TagButton = styled.button`
  background-color: rgba(217, 217, 217, 0.3);
  color           : #fff;

  border: 2px solid ${({ $ativo }) => ( $ativo ? '#C98CF1' : 'transparent' ) };

  border-radius: 10px;
  padding      : 8px 16px;
  cursor       : pointer;

  &:hover {
    background-color: rgba(201, 140, 241, 0.6);
  }
`

const Tags = ({ tagSelecionada, onSelecionarTag }) => {
  return (
    <TagDiv>
      <TituloTags>Busque por tags:</TituloTags>

      <ListaTags>
        {tags.map(tag => (
          <TagButton
            key={tag.id}
            $ativo={tag.id === tagSelecionada}
            onClick={() => onSelecionarTag(tag.id)}
          >
            {tag.titulo}
          </TagButton>
        ))}
      </ListaTags>
    </TagDiv>
  )
}


export default Tags