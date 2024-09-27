import { types } from 'mobx-state-tree';

export const Organization = types.model('Organization', {
  _id: types.identifier,
  name: types.string,
  exp: types.number,
});
