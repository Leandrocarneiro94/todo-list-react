import { Item } from '../../types/types'
import Category from './Category.styled'
import deleteButton from '../../assets/addButtonP.svg'

type CategoryComponentProps = {
  text: string,
  active: boolean,
  items: Item[],
  onUpdateCategoryValue: (categoryIndex: number,  value: string) => void,
  index: number,
  handleActiveCategory: () => void,
  onSaveCategoryChange: (text: string) => void,
}

const CategoryComponent = (props: CategoryComponentProps) => (
  <Category.Item isActive={props.active} onClick={props.handleActiveCategory}>
    <Category.CloseButton>
      <Category.Image src={deleteButton}/>
    </Category.CloseButton>
    
    <Category.Input
      value={props.text}
      autoFocus
      onChange={(e) => props.onUpdateCategoryValue(props.index, e.target.value)}
      onBlur={() => props.onSaveCategoryChange(props.text)}
    />

    <Category.Counter isActive={props.active}>
      {props.items.filter((item) => item.checked).length}/{props.items.length}
    </Category.Counter>
  </Category.Item>
)

export default CategoryComponent
