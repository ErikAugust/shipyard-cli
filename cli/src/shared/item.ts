import * as moment from 'moment';
import {Moment} from 'moment';
import { v4 as uuid } from 'uuid';

export interface DeserializedItem {
  uuid?: string;
  title: string;
  category?: string;
  intention?: string;
  createdAt?: string;
  updatedAt?: string;
  url?: string;
  actions?: Array<DeserializedItem>;
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
  url?: string;
  actions?: Array<Item>;
  notes?: Array<string>;
  completed: boolean;
  dueDate?: Moment;

  constructor(item: DeserializedItem) {
    this.uuid = item.uuid || uuid();
    this.title = item.title;
    this.category = item.category || undefined;
    this.intention = item.intention;
    this.url = item.url;
    this.createdAt = this.getMoment(item.createdAt);
    this.updatedAt = this.getMoment(item.updatedAt);
    this.actions = item.actions ? item.actions.map(action => new Item(action)) : undefined;
    this.notes = item.notes || undefined;
    this.completed = item.completed || false;
    this.dueDate = item.dueDate ? this.getMoment(item.dueDate) : undefined;
  }

  /**
   * Adds action item to actions
   * @param {Item} item
   * @returns {void}
   */
  public addAction(item: Item): void {
    if (!this.actions) {
      this.actions = [];
    }
    this.actions.push(item);
  }

  /**
   * Adds/updates/deletes a due date
   * @param {string} dueDate 
   * @returns {void}
   */
  public addDueDate(dueDate: string): void {
    this.dueDate = this.getMoment(dueDate);
  }

  /**
   * Adds note to notes
   * @param {string} note 
   * @returns {void}
   */
  public addNote(note: string): void {
    if (!this.notes) {
      this.notes = [];
    }
    this.notes.push(note);
  }

  /**
   * Sets item to completed
   * @returns {void}
   */
  public complete(): void {
    this.updatedAt = this.getMoment();
    this.completed = true;
  }

  /**
   * Retrieves the next incomplete action item
   */
  public getNextAction(): Item|undefined {
    if (this.actions && this.actions.length) {
      return this.actions.find((element: Item) => !element.completed);
    }
  }

  /**
   * Retrieves an instance of Moment for a given time
   * @param {string} time 
   */
  private getMoment(time?: string | undefined): Moment {
		return time ? moment(time) : moment();
  }
  
  /**
   * Returns the six character UUID shortcode for a given item
   */
  public getUuidShortcode(): string {
    return this.uuid.slice(0, 6);
  }

  /**
   * Removes due date from item, if exists
   * @returns {void}
   */
  public removeDueDate(): void {
    if (this.dueDate) {
      delete this.dueDate;
    }
  }
}