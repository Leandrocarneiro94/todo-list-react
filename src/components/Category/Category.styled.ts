import styled from 'styled-components'

const Item = styled.li<{ isActive: boolean }>`
  align-items: center;
  background-color: ${(props) => props.isActive ? `var(--white)` : `var(--lightPurple)`}; 
  border-radius: 1rem 0rem 0rem 1rem;
  color: ${(props) => props.isActive ? 'var(--lightPurple)' : 'var(--white)'};
  cursor: pointer;
  display: flex;
  font-size: 1.25rem;
  font-weight: 700;
  gap: 0.625rem;
  height: 3.3125rem;
  justify-content: flex-start;
  padding-left: 2.75rem;
  padding-right: 0.5rem;
  position: relative;
  width: 18.75rem;
  position: relative;

  ${(props)=> props.isActive && `
    &::before, &::after {
      background-image: url('/roundedCorner.svg');
      content: '';
      height: 1rem;
      position: absolute;
      right: 0;
      width: 1rem;
    }

    &::before {
        top: -1rem;
    }

    &::after {
        bottom: -1rem;
        transform: rotate(-90deg);
        z-index: 1;
    }
  `}
`

const Input = styled.input`
  background-color: transparent;
  outline: none;
  font-size: 1.25rem;
  font-weight: 700;
  width: 70%;
  color: inherit;
`

const Counter = styled.div<{ isActive: boolean }>`
  background-color: ${(props) => props.isActive ? 'var(--lightPurple)' : 'var(--white)'};
  border-radius: 0.25rem;
  color: var(--purple);
  font-size: 0.75rem;
  padding: 0.125rem 0.625rem;
`

const Image = styled.img`
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
`

const CloseButton = styled.button`
  background-color: transparent;
  height: 20px;
  cursor: pointer;
`

export default {
  Item,
  Input,
  Counter,
  Image,
  CloseButton,
}
