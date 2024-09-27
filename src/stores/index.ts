import OrganizationStore from './OrganizationStore';
import { createContext } from 'react';

const store = OrganizationStore.create({ organizations: [] });

export const StoreContext = createContext(store);

export default store;