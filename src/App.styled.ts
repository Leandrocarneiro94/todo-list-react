import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  gap: 48px;
  padding-top: 7.12rem;
`

export const ItemWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`

export const TitleWrapper = styled.div`
  display: flex;
  gap: 16px;
  color: var(--lightPurple);
  font-weight: 700;
  font-size: 42px;
`
