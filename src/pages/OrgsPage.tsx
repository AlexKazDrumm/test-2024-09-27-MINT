import React, { useState, useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Container } from '@mui/material';
import { StoreContext } from '../stores';
import OrganizationForm from '../components/OrganizationForm';
import OrganizationTable from '../components/OrganizationTable';
import Notification from '../components/Notification';

const OrgsPage: React.FC = observer(() => {
  const store = useContext(StoreContext);
  const [message, setMessage] = useState<string>('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [severity, setSeverity] = useState<'success' | 'error'>('success');

  useEffect(() => {
    if (store.organizations.length === 0) {
      store.fetchOrganizations().catch((err) => {
        setMessage(err.message);
        setSeverity('error');
        setSnackbarOpen(true);
      });
    }
  }, [store, store.organizations.length]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    setMessage('');
  };

  return (
    <Container>
      <h1>Организации</h1>
      <OrganizationForm
        setMessage={setMessage}
        setSeverity={setSeverity}
        setSnackbarOpen={setSnackbarOpen}
      />
      <OrganizationTable
        setMessage={setMessage}
        setSeverity={setSeverity}
        setSnackbarOpen={setSnackbarOpen}
      />
      <Notification
        message={message}
        severity={severity}
        open={snackbarOpen}
        onClose={handleSnackbarClose}
      />
    </Container>
  );
});

export default OrgsPage;