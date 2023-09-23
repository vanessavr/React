import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({name = 'Button', ...props}) {
  return (
      <Button variant="outlined" {...props}>{name}</Button>
  );
}