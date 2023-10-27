import request from "./index";
import { Item } from "../types/types";

const url = 'https://todo-list-api-mj3o.onrender.com/items/' 

const postItem = async (item: Partial<Item>) => request(url, {
  method: 'POST',
  body: {
    text: item.text, 
    checked: item.checked,
    categoryId: item.categoryId
  }
})

const deleteItem = async (itemId: string) => {
  const deleteUrl = `${url}${itemId}`;

  return request(deleteUrl, {
    method: 'DELETE'
  });
}

const editItem = async (item: Partial<Item>) => request(`${url}${item.id}`, {
  method: 'PUT',
  body: item
})

export {
  postItem,
  editItem,
  deleteItem
}
 
