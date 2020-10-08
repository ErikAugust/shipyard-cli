import * as moment from 'moment';
import {Moment} from 'moment';
import { v4 as uuid } from 'uuid';

export interface SimpleItem {
  uuid?: string;
  title: string;
  category?: string;
  intention?: string;
  createdAt?: string;
  updatedAt?: string;
  actions?: Array<SimpleItem>;
  notes?: Array<string>;
  completed?: boolean;
  dueDate?: string;
}

/**
 * @class Item
 * @author Erik August Johnson <erik@eaj.io>
 */
export default class Item {
  uuid: string;
  title: string;
  category?: string;
  intention?: string;
  createdAt: Moment;
  updatedAt: Moment;
  actions?: Array<Item>;
  notes?: Array<string>;
  completed: boolean;
  dueDate?: Moment;

  constructor(item: SimpleItem) {
    this.uuid = item.uuid || uuid();
    this.title = item.title;
    this.category = item.category || undefined;
    this.intention = item.intention;
    this.createdAt = this.getMoment(item.createdAt);
    this.updatedAt = this.getMoment(item.updatedAt);
    this.actions = item.actions ? item.actions.map(action => new Item(action)) : undefined;
    this.notes = item.notes || undefined;
    this.completed = item.completed || false;
    this.dueDate = item.dueDate ? this.getMoment(item.dueDate) : undefined;
  }

  public addAction(item: Item): void {
    if (!this.actions) {
      this.actions = [];
    }
    this.actions.push(item);
  }

  /**
   * Retrieves the next incomplete action item
   */
  public getNextAction(): Item|undefined {
    if (this.actions && this.actions.length) {
      const condition: any = (element: Item) => !element.completed;
      return this.actions.find(condition);
    }
  }

  /**
   * Retrieves an instance of Moment for a given time
   * @param {string} time 
   */
  private getMoment(time: string | undefined): Moment {
		return time ? moment(time) : moment();
	}
}