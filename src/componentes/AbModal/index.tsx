import { ReactNode } from "react"
import styled from "styled-components"

export interface AbModalProps {
  children: ReactNode
  titulo: string
  aberta: boolean
  onClose: () => void
}

const JanelaModal = styled.div`
  position: fixed;
  padding: 64px;
  background: white;
  box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const FundoModal = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: rgba(101, 101, 101, 0.85);
`

const TituloModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: sans-serif;
  align-items: center;
`

const TituloModal = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #eb9b00;
  margin: 0;
`

const BotaoFecharModal = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #002f52;
`

export const AbModal = ({ children, aberta, titulo, onClose }: AbModalProps) => {
  if (!aberta) {
    return <></>
  }

  return (
    <>
      <FundoModal onClick={onClose}/>
      <JanelaModal>
        <TituloModalWrapper>
          <TituloModal>{titulo}</TituloModal>
          <BotaoFecharModal onClick={onClose}>X</BotaoFecharModal>
        </TituloModalWrapper>
        {children}
      </JanelaModal>
    </>
  )
}