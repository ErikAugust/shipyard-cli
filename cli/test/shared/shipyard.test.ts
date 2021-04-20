import {expect, test} from '@oclif/test';
const { it } = test;
import Shipyard from '../../src/shared/shipyard';
import {describe} from 'mocha';

describe('Shipyard', () => {
  describe ('new Shipyard()', () => {
    const shipyard = new Shipyard('');
    const list = shipyard.list;
    
    it('has a list of items', () => {
      expect(list.length).to.be.greaterThan(0);
    });

    it('can find an item from initial list', () => {
      const item = shipyard.findItem('4c4df6');
      expect(typeof item).to.be.equal('object');
    });

    it('can find a nested item', () => {
      const item = shipyard.findItem('b24949');
      console.log(item);
    });
  });
});