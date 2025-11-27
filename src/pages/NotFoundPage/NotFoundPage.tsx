import { IconButton, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function NotFoundPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <IconButton onClick={handleBack} aria-label="Назад">
          <ArrowBackIcon />
        </IconButton>
      </Stack>
      <Typography variant="h1" align="center">
        Такой страницы нет
      </Typography>
    </>
  );
}
