import request from "./index";
import { Category } from "../types/types";

const url = 'http://localhost:3000/categories/' 

const getCategories = async () => request(`${url}?_embed=items`, {
    method: 'GET'
})

const postCategory = async (category: Category) => request(url, {
    method: 'POST',
    body: {
        text: category.text, 
        active: category.active
    }
})

const editCategory = async (category: Partial<Category>) => request(`${url}${category.id}`, {
    method: 'PUT',
    body: category
})

export { 
    getCategories,
    postCategory,
    editCategory
 }
