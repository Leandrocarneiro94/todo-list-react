import checkmark from '../../assets/checkmark.png'
import deletebutton from '../../assets/deleteButton.svg'
import Item from './Item.styled'

type ItemComponentProps = {
  id: string,
  checked: boolean,
  onCheck: () => void,
  text: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onDelete: () => void,
  onSaveItemChange: (value: string | boolean, key: 'checked' | 'text') => void
}

const ItemComponent = (props: ItemComponentProps): JSX.Element => {
  console.log(props)

  return (
    <Item.ListItem>
      <Item.Checkbox
        type="checkbox"
        id={props.id}
        checked={props.checked}
        onChange={(e) => {
          props.onCheck()
          props.onSaveItemChange(e.target.checked, 'checked')
        }}
      />

      <Item.Label htmlFor={props.id} isActive={props.checked}>
        <Item.CheckmarkWrapper isActive={props.checked}>
          <Item.Checkmark isActive={props.checked} src={checkmark}/>
        </Item.CheckmarkWrapper>

        <Item.InputText type="text" autoFocus value={props.text} onChange={props.onChange} onBlur={(e) => props.onSaveItemChange(e.target.value, 'text')}/>

        <Item.RemoveButton type="button" onClick={props.onDelete}>
          <img src={deletebutton} />
        </Item.RemoveButton>
      </Item.Label>
    </Item.ListItem>
  )
}

export default ItemComponent
