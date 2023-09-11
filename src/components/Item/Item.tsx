import './Item.styled'
import Item from './Item.styled'
import checkmark from '../../assets/checkmark.png'

type ItemComponentProps = {
  id: string,
  checked: boolean;
  onCheck: () => void,
  text: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onDelete: () => void,
}

const ItemComponent = (props: ItemComponentProps): JSX.Element => {
  console.log(props)
  
  return (
    <Item.ListItem>
      <Item.Checkbox
        type="checkbox"
        id={props.id}
        checked={props.checked}
        onChange={props.onCheck}
      />     

      <Item.Label htmlFor={props.id} isActive={props.checked}>
        <Item.CheckmarkWrapper>
          <Item.Checkmark src={checkmark}/>
        </Item.CheckmarkWrapper>

        <Item.InputText type="text" value={props.text} onChange={props.onChange} />

        <Item.RemoveButton type="button" onClick={props.onDelete}>X</Item.RemoveButton>
      </Item.Label>
    </Item.ListItem>
  )
}

export default ItemComponent
