import React, { useState } from 'react';
import { Grid, styled, Box } from '@mui/material';
import Navbar from './Components/Navbar';
import UploadButton from './Components/UploadButton.jsx';
import ProcessButton from './Components/ProcessButton.jsx';
import ShowButton from './Components/ShowButton.jsx';
import ResetButton from './Components/ResetButton.jsx';

const StyledContainer = styled(Box)({
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center',
  justifyContent: 'center', 
  gap: '2rem',
});

function App() {
  const [excelData, setExcelData] = useState(null);
  const [showButtons, setShowButtons] = useState(false);

  const handleUpload = (data) => {
    setExcelData(data);
    setShowButtons(true); 
  };

  const handleReset = () => {
    localStorage.clear();
    setExcelData(null);
    setShowButtons(false); 
  };

  return (
    <div>
      <Navbar />
      <Grid container spacing={2} justifyContent="center" style={{ marginTop: 20 }}>
        <Grid item>
          <UploadButton onUpload={handleUpload} />
        </Grid>
      </Grid>
      <StyledContainer>
        <ResetButton onReset={handleReset} />
        {showButtons && (
          <>
            <ProcessButton />
            <div>
              {excelData && <ShowButton excelData={excelData} />}
            </div>
          </>
        )}
      </StyledContainer>
    </div>
  );
}

export default App;

