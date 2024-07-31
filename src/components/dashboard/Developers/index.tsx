'use client'
import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Grid } from '@mui/material';
import DeveloperTable from './DeveloperTable';
import AddDeveloper from './AddDeveloper';
import { BusinessDeveloper } from '../../../constants/types';

const Developers: React.FC = () => {
  const [showAddDeveloper, setShowAddDeveloper] = useState(false);
  const [Developers, setDevelopers] = useState<BusinessDeveloper[]>([]);

  useEffect(() => {
    const storedDevelopers = localStorage.getItem('Developers');
    if (storedDevelopers) {
        setDevelopers(JSON.parse(storedDevelopers));
    }
  }, []);

  const handleAddBusinessDeveloper = (newBusinessDeveloper: BusinessDeveloper) => {
    const updatedDevelopers = [...Developers, newBusinessDeveloper];
    setDevelopers(updatedDevelopers);
    localStorage.setItem('Developers', JSON.stringify(updatedDevelopers));
    setShowAddDeveloper(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      {!showAddDeveloper ? (
        <>
          <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
            <Grid item>
              <Typography variant="h4">Developers</Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setShowAddDeveloper(true)}
              >
                Add Business Developer
              </Button>
            </Grid>
          </Grid>
          <DeveloperTable rows={Developers} />
        </>
      ) : (
        <AddDeveloper
          onAddBusinessDeveloper={handleAddBusinessDeveloper}
          onCancel={() => setShowAddDeveloper(false)}
        />
      )}
    </Box>
  );
};

export default Developers;