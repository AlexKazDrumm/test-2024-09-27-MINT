import React, { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { StoreContext } from '../stores';
import { addNewOrganization } from '../services/OrganizationService';

interface OrganizationFormProps {
  setMessage: (message: string) => void;
  setSeverity: (severity: 'success' | 'error') => void;
  setSnackbarOpen: (open: boolean) => void;
}

const OrganizationForm: React.FC<OrganizationFormProps> = ({
  setMessage,
  setSeverity,
  setSnackbarOpen,
}) => {
  const store = useContext(StoreContext);
  const [name, setName] = useState('');
  const [activeUntil, setActiveUntil] = useState<Dayjs | null>(dayjs());

  const handleAddOrganization = () => {
    if (name && activeUntil) {
      addNewOrganization(store, name, activeUntil, setMessage, setSeverity, setSnackbarOpen);
      setName('');
      setActiveUntil(dayjs());
    }
  };

  return (
    <form
      noValidate
      autoComplete="off"
      style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}
    >
      <TextField
        label="Название организации"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="Активна до"
          value={activeUntil}
          onChange={(newValue) => setActiveUntil(newValue)}
          slotProps={{ textField: { required: true } }}
        />
      </LocalizationProvider>
      <Button variant="contained" color="primary" onClick={handleAddOrganization}>
        Сохранить
      </Button>
    </form>
  );
};

export default OrganizationForm;