import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const buttonStyle = {
  backgroundColor: '#1976d2',
  borderRadius: '6px',
  color: 'white',
  padding: '10px 20px',
};

function ProcessButton() {
  return (
    <Box>
      <Button onClick={() => alert('Processing...')} style={buttonStyle}>
        Process
      </Button>
    </Box>
  );
}

export default ProcessButton;
