import ItemComponent from './components/Item'
import React from 'react'
import GlobalStyle from './config/GlobalStyle'
import Navbar from './components/NavBar'
import type { Category } from './types/types'
import { Container, ItemContainer, ItemWrapper, TitleWrapper } from './App.styled'


function App() {
  // hooks
  const [categories, setCategories] = React.useState<Category[]>([])

  React.useEffect(() => {
    const url = 'http://localhost:3000/'    
    // fetch(`${url}categories/`)
    //  .then((resposta) => resposta.json())
    //  .then((dados) => console.log(dados))
    //  .catch((error) => console.log(error))
    const loadCategories = async () => {
      try {
        const resposta = await fetch(`${url}categories/`)
        const dados = await resposta.json()
      } catch(error){
        console.log(error)
      }
    }
    loadCategories()

  }, [])

  const onCreateCategory = (category: Category) => {
    const newCategories = categories.map((mapCategory) => ({ 
      ...mapCategory,
      active: false,
    }))
    newCategories.push(category)
    setCategories(newCategories)
  }

  const onUpdateCategoryValue = (categoryIndex: number,  value: string) => {
    const newCategories = [...categories]
    newCategories[categoryIndex].text = value
    setCategories(newCategories)
  }

  const handleActiveCategory = (id: string) => {
    // 1 - categories - active da categoria
    // categories modificado
    const newCategories = categories.map((category) => ({
      ...category,
      active: id === category.id
    }))

    setCategories(newCategories)
  }

  const onCreateItem = () => {
    const newCategories = categories.map((category) => ({
      ...category,
      items: category.active ? [
        ...category.items,
        {
          id: `item-${category.items.length + 1}`,
          text: '',
          checked: false
        }
      ] : category.items
    }))
   
    setCategories(newCategories)
  }
  
  const onUpdateItemValue = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const newCategories = categories.map((category) => ({
      ...category,
      items: category.items.map((categoryItem) => ({
        ...categoryItem,
        text: category.active && id === categoryItem.id ? e.target.value : categoryItem.text
      }))
    }))

    setCategories(newCategories)
  }

  const onCheckItem = (id: string) => {
    const newCategories = categories.map((category) => ({
      ...category,
      items: category.items.map((categoryItem) => ({
        ...categoryItem,
        checked: category.active && id === categoryItem.id ? !categoryItem.checked : categoryItem.checked
      }))
    }))

    setCategories(newCategories)
  }

  const onDeleteItem = (id: string) => {
    const newCategories = categories.map((category) => ({
      ...category,
      items: category.active ? category.items.filter((categoryItem) => id !== categoryItem.id) : category.items
    }))

    setCategories(newCategories)
  }

  const activeCategory = categories.find((category) => category.active)

  return (
    <Container>
      <GlobalStyle/>

      <Navbar
        categories={categories}
        onCreateCategory={onCreateCategory}
        onUpdateCategoryValue={onUpdateCategoryValue}
        handleActiveCategory={handleActiveCategory}
      />

      <ItemContainer>
        <TitleWrapper>
          <h2>{activeCategory ? activeCategory?.text : 'Sem Categoria'}</h2>
          
            {
              activeCategory ? (
                <button 
                  type="button"
                  onClick={onCreateItem}
                  >
                    adicionar novo item
                </button>
              )
              : (
                <p>Cadastre uma categoria para cadastrar itens</p>
                )
            }
          </TitleWrapper>
          <ItemWrapper>
            {
              activeCategory && activeCategory?.items?.map((item) => (
                <ItemComponent 
                  id={item.id}
                  key={item.id}
                  text={item.text}
                  checked={item.checked}
                  onCheck={() => onCheckItem(item.id)}
                  onDelete={() => onDeleteItem(item.id)}
                  onChange={(e) => onUpdateItemValue(e, item.id)}
                />
              ))
            }
          </ItemWrapper>
      </ItemContainer>
    </Container>
  )
}

export default App



