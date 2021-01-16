import Item from './item';

/**
 * Retrieves items by category
 * @author Erik August Johnson <erik@eaj.io>
 * @param {Array<Item> list 
 * @param <string> category 
 */
export function getItemsByCategory(list: Array<Item>, category: string): Array<Item> {
  const condition = (element: Item): boolean => element.category?.toLowerCase() === category.toLowerCase();
  return list.filter(condition);
}

/**
 * @function findItemByShortUuid
 * @param {Array<Item>} list
 * @param {string} shortUuid 
 */
export function findItemByShortUuid(list: Array<Item>, shortUuid: string): Item | undefined {
  const condition = (element: Item): boolean => element.uuid.slice(0, 6) === shortUuid;
  return list.find(condition);
}

export function sortByDueDate(list: Array<Item>): Array<Item> {
  return list.sort((a, b) => {
    if (a.dueDate && b.dueDate) {
      return a.dueDate?.unix() - b.dueDate?.unix();
    } else if (a.dueDate && !b.dueDate) {
      return -1;
    } else {
      return 0;
    }
  });
}