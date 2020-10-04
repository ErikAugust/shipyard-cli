'use strict';

const _ = require('lodash');
const moment = require('moment');
const { v4: uuid } = require('uuid');

/**
 * Item - the fundamental building block of Shipyard lists
 * @author Erik August Johnson <erik@eaj.io>
 */
class Item {
	constructor(item) {
		this.uuid = _.get(item, 'uuid') || uuid();
		this.title = _.get(item, 'title');
		this.intention = _.get(item, 'intention') || '';
		this.createdAt = this.getMoment(_.get(item, 'createdAt'));
		this.updatedAt = this.getMoment(_.get(item, 'updatedAt'));
		this.actions = _.get(item, 'actions') || [];
		this.notes = _.get(item, 'notes') || [];
		this.completed = _.get(item, 'completed') || false;
		this.dueDate = _.get(item, 'dueDate');
	}

	/**
	 * Returns a Moment instance for a given string, or new if empty
	 * @param {string} time
	 * @returns {*|moment.Moment}
	 */
	getMoment(time) {
		return time ? moment(time) : moment();
	}
}

module.exports = Item;