import React from 'react';
import { Box, Container } from '@mui/material';
import { PageContainerProps } from './PageContainer.types';

export function PageContainer({ children }: PageContainerProps) {
  return (
    <Box py={4} component="main">
      <Container maxWidth="sm">{children}</Container>
    </Box>
  );
}
