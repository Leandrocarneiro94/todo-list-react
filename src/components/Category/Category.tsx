import { Item } from '../../types/types'
import Category from './Category.styled'

type CategoryComponentProps = {
  text: string,
  active: boolean,
  items: Item[],
  onUpdateCategoryValue: (categoryIndex: number,  value: string) => void,
  index: number,
  handleActiveCategory: () => void,
}

const CategoryComponent = (props: CategoryComponentProps) => (
  <Category.Item isActive={props.active} onClick={props.handleActiveCategory}>
    <Category.Input
      value={props.text}
      onChange={(e) => props.onUpdateCategoryValue(props.index, e.target.value)}
    />
    
    <Category.Counter>
      {props.items.filter((item) => item.checked).length}/{props.items.length}
    </Category.Counter>
  </Category.Item>
)

export default CategoryComponent
