import Item, {SimpleItem} from './item';

/**
 * Retrieves items by category
 * @author Erik August Johnson <erik@eaj.io>
 * @param {Array<Item> list 
 * @param <string> category 
 */
export function getItemsByCategory(list: Array<Item>, category: string): Array<Item> {
  const condition = (element: Item) => element.category?.toLowerCase() === category.toLowerCase();
  return list.filter(condition);
}