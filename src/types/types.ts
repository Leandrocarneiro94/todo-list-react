export type Item = {
  id: string,
  text: string,
  checked: boolean,
  categoryId?: string
}

export type Category = {
  id: string,
  text: string,
  active: boolean,
  items: Item[],
}
