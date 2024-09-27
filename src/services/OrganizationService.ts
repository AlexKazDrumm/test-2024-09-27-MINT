import { Dayjs } from 'dayjs';

export const addNewOrganization = (
  store: any,
  name: string,
  activeUntil: Dayjs,
  setMessage: (message: string) => void,
  setSeverity: (severity: 'success' | 'error') => void,
  setSnackbarOpen: (open: boolean) => void
) => {
  store
    .addOrganization(name, activeUntil.valueOf())
    .then((successMessage: string) => {
      setMessage(successMessage);
      setSeverity('success');
      setSnackbarOpen(true);
    })
    .catch((err: any) => {
      setMessage(err.message || 'Не удалось добавить организацию');
      setSeverity('error');
      setSnackbarOpen(true);
    });
};

export const deleteOrganization = (
  store: any,
  id: string,
  setMessage: (message: string) => void,
  setSeverity: (severity: 'success' | 'error') => void,
  setSnackbarOpen: (open: boolean) => void
) => {
  store
    .deleteOrganization(id)
    .then((successMessage: string) => {
      setMessage(successMessage);
      setSeverity('success');
      setSnackbarOpen(true);
    })
    .catch((err: any) => {
      setMessage(err.message || 'Не удалось удалить организацию');
      setSeverity('error');
      setSnackbarOpen(true);
    });
};
