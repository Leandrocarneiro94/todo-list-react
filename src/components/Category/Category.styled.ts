import styled from 'styled-components'

const Item = styled.li<{ isActive: boolean }>`
  align-items: center;
  background-color: ${(props) => props.isActive ? `var(--white)` : `var(--purple)`}; 
  border-radius: 1rem 0rem 0rem 1rem;
  color: var(--white);
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
`
const Input = styled.input`
  background-color: transparent;
  outline: none;
  font-size: 1.25rem;
  font-weight: 700;
  width: 70%;
  color: inherit;
`
const Counter = styled.div`
  background-color: var(--white);
  border-radius: 0.25rem;
  color: var(--purple);
  font-size: 0.75rem;
  padding: 0.125rem 0.625rem;
`
export default {
  Item,
  Input,
  Counter,
}
