import CategoryComponent from "../Category"
import Navbar from './NavBar.styled'
import type { Category } from '../../types/types'
import addButtonW from '../../assets/addButtonW.svg'

type NavbarComponentProps = {
  categories: Category[],
  onCreateCategory: (category: Category) => void,
  onUpdateCategoryValue: (categoryIndex: number,  value: string) => void,
  handleActiveCategory: (id: string) => void
  onSaveCategoryChange: (value: string) => void
  onDeleteCategory: (id: string) => void
}


const NavbarComponent = (props: NavbarComponentProps) => (
  <Navbar.Nav>
    <Navbar.TitleWrapper>
      <Navbar.Title>Categorias</Navbar.Title>

      <Navbar.AddCategoryButton
        type="button"
        onClick={
          () => props.onCreateCategory({
            id: `category-${props.categories.length + 1}`,
            text: '',
            active: true,
            items: []
          })
        }
      >
        <img src={addButtonW} />
      </Navbar.AddCategoryButton>
    </Navbar.TitleWrapper>

    <ul>
      {
        props.categories.map((category, index) =>(
          <CategoryComponent
            key={category.id}
            text={category.text}
            active={category.active}
            items={category.items}
            onUpdateCategoryValue={props.onUpdateCategoryValue}
            index={index}
            handleActiveCategory={() => props.handleActiveCategory(category.id)}
            onSaveCategoryChange={props.onSaveCategoryChange}
            onDeleteCategory={() => props.onDeleteCategory(category.id)}
          />
        ))
      }
    </ul>
  </Navbar.Nav>
)

export default NavbarComponent
