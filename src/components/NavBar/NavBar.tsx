import CategoryComponent from "../Category"
import Navbar from './NavBar.styled'
import type { Category } from '../../types/types'

type NavbarComponentProps = {
  categories: Category[],
  onCreateCategory: (category: Category) => void,
  onUpdateCategoryValue: (categoryIndex: number,  value: string) => void,
  handleActiveCategory: (id: string) => void
}

const NavbarComponent = (props: NavbarComponentProps) => (
  <Navbar.Nav>
    <Navbar.TitleWrapper>
      <Navbar.Title>Categorias</Navbar.Title>

      <button
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
        New category
      </button>
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
          />
        ))
      }
    </ul>
  </Navbar.Nav>
)

export default NavbarComponent
