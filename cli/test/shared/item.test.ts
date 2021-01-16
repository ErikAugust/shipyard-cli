import {expect, test} from '@oclif/test';
import Item from '../../src/shared/item';
import {describe} from 'mocha';

describe('Item', () => {
  describe ('new Item()', () => {
    const item = new Item({
      title: 'An example item'
    });

    test.it('is a new instance of Item', () => {
      expect(item).to.be.an.instanceOf(Item);
    });
    
    test.it('generated a valid v4 UUID', () => {
      expect(typeof item.uuid).to.equal('string');
      const regEx = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
      expect(regEx.test(item.uuid)).be.true;
    });

    test.it('is set to incomplete when created', () => {
      expect(item.completed).be.false;
    });

    test.it('can add a next action', () => {
      item.addAction(new Item({ title: 'An example next action' }));
      expect(item.actions?.length).to.equal(1);
    });

    test.it('can get the next action', () => {
      expect(item.getNextAction()?.title).to.equal('An example next action');
    });
  });
});
