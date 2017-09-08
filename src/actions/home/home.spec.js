/* global describe, it, expect */
import * as actions from './home';
import * as types from './types';

describe('Actions', () => {
  describe('Home', () => {
    it('Creates an action to show add user dialog', () => {
      const expected = {
        type: types.START_ADDING,
      };

      expect(actions.startAdding()).toEqual(expected);
    });
  });
});
