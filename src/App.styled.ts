import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`;

export const ItemContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 7.12rem;
  gap: 48px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 16px;
  color: var(--lightPurple);
  font-weight: 700;
  font-size: 42px;
`;

export const AddItemButton = styled.button`
  background-color: transparent;
`
