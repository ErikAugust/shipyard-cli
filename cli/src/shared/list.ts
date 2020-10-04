import Item from './item';

export default interface List {
  [inbox: string]: Array<Item>;
  projects: Array<Item>;
  maybe: Array<Item>;
  reference: Array<Item>;
  archive: Array<Item>;
  trash: Array<Item>;
}