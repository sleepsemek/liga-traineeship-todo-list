import { Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import { ErrorSnackbar } from 'components/ui/ErrorSnackbar/ErrorSnackbar.types';

export function ErrorSnackbar({ message, timeoutMs = 3000 }: ErrorSnackbar) {
  const [open, setOpen] = useState(true);

  return (
    <Snackbar
      open={open}
      autoHideDuration={timeoutMs}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert severity="error" onClose={() => setOpen(false)}>
        {message}
      </Alert>
    </Snackbar>
  );
}
