import { types, flow } from 'mobx-state-tree';
import { Organization } from '../models/Organization';
import axios from 'axios';

const API_TOKEN = process.env.REACT_APP_API_TOKEN;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const OrganizationStore = types
  .model('OrganizationStore', {
    organizations: types.array(Organization),
  })
  .actions((self) => {
    const fetchOrganizations = flow(function* () {
      try {
        const response = yield axios.get(`${BASE_URL}/${API_TOKEN}/orgs`);
        if (response.data.status === 'ok') {
          self.organizations = response.data.orgs;
        } else {
          throw new Error(response.data.error || 'Не удалось получить организации');
        }
      } catch (error) {
        console.error('Ошибка при получении организаций:', error);
        throw error;
      }
    });

    const addOrganization = flow(function* (name: string, exp: number) {
      try {
        const requestBody = { name, exp };
        const response = yield axios.post(`${BASE_URL}/${API_TOKEN}/orgs`, requestBody);
        if (response.data.status === 'ok') {
          self.organizations.push(response.data.org);
          return 'Организация успешно добавлена';
        } else {
          throw new Error(response.data.error || 'Не удалось добавить организацию');
        }
      } catch (error) {
        console.error('Ошибка при добавлении организации:', error);
        throw error;
      }
    });

    const deleteOrganization = flow(function* (id: string) {
      try {
        const response = yield axios.delete(`${BASE_URL}/${API_TOKEN}/orgs`, {
          data: { id },
        });
        if (response.data.status === 'ok') {
          self.organizations.replace(self.organizations.filter((org) => org._id !== id));
          return 'Организация успешно удалена';
        } else {
          throw new Error(response.data.error || 'Не удалось удалить организацию');
        }
      } catch (error) {
        console.error('Ошибка при удалении организации:', error);
        throw error;
      }
    });

    return { fetchOrganizations, addOrganization, deleteOrganization };
  });

export default OrganizationStore;
