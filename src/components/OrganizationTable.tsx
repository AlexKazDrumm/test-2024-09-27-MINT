import React, { useContext } from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@mui/material';
import { format } from 'date-fns';
import { StoreContext } from '../stores';
import { deleteOrganization } from '../services/OrganizationService';

interface OrganizationTableProps {
  setMessage: (message: string) => void;
  setSeverity: (severity: 'success' | 'error') => void;
  setSnackbarOpen: (open: boolean) => void;
}

const OrganizationTable: React.FC<OrganizationTableProps> = ({
  setMessage,
  setSeverity,
  setSnackbarOpen,
}) => {
  const store = useContext(StoreContext);

  const handleDeleteOrganization = (id: string) => {
    deleteOrganization(store, id, setMessage, setSeverity, setSnackbarOpen);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="organizations table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Название</TableCell>
            <TableCell>Активна до</TableCell>
            <TableCell>Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.organizations.map((org) => (
            <TableRow key={org._id}>
              <TableCell>{org._id}</TableCell>
              <TableCell>{org.name}</TableCell>
              <TableCell>{format(new Date(org.exp), 'dd.MM.yyyy HH:mm:ss')}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeleteOrganization(org._id)}
                >
                  Удалить
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {store.organizations.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} align="center">
                Нет организаций.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrganizationTable;