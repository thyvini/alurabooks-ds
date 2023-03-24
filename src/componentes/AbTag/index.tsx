import styled from "styled-components"

export interface AbTagProps {
  texto: string
}

const Tag = styled.div`
  padding: 24px 32px;
  color: #ffffff;
  background: #eb9b00;
  font-weight: 700;
  font-size: 24px;
  display: inline-block;
  font-family: sans-serif;
`

export const AbTag = ({texto}: AbTagProps) => {
  return (
    <Tag>{texto}</Tag>
  )
}