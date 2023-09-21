import styled from 'styled-components'

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 6px;
`

const Checkbox = styled.input`
  display: none;
`

const Label = styled.label<{ isActive: boolean }>`
  align-items: center;
  background-color: ${(props) => props.isActive ? 'var(--lightGrey)' : 'var(--purple)'};
  border-radius: 12px;
  color: ${(props) => props.isActive ? 'var(--darkGrey)': 'var(--white)'};
  text-decoration: ${(props) => props.isActive ? 'line-through': 'none'};
  display: flex;
  gap: 8px;
  width: 300px;
  padding: 16px;
`

const CheckmarkWrapper = styled.div<{ isActive: boolean }>`
  align-items: center;
  background-color: var(--white);
  border-radius: 4px;
  display: flex;
  height: 16px;
  justify-content: center;
  width: 16px;
  background-color: ${(props) => props.isActive ? 'var(--grey)' : 'var(--white)'};
`

const Checkmark = styled.img<{ isActive: boolean }>`
  ${(props) => !props.isActive && 'opacity:0;'};
`

const InputText = styled.input`
  background-color: transparent;
  flex-grow: 1;
  border: 0;
  outline: 0;
  color: inherit;
`

const RemoveButton = styled.button`
  background-color: transparent;
  border-style: none;
  cursor: pointer;
  display: block;
  margin-left: auto;
`

export default {
  ListItem,
  Checkbox,
  Label,
  CheckmarkWrapper,
  Checkmark,
  InputText,
  RemoveButton
}
