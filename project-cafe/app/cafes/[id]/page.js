import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/cafes/${id}`);
  return res.json();
}

export default async function Page({ params }) {
  const id = params.id;
  const data = await getData(id);
  console.log(data);

  return (
    <div style={{ textAlign: 'center' }} >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#B8926A' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Review Cafe
            </Typography>
            <a href='/'> 
              <Button color="inherit" sx={{ color: '#FFFFFF' }}>Home page</Button>
            </a> 
            <a href='/cafes'> 
              <Button color="inherit" sx={{ color: '#FFFFFF' }}>Review</Button>
            </a>
          </Toolbar>
        </AppBar>
      </Box>
      {data.picture && (
        <div>
          <img src={data.picture} alt={data.name} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
        </div> 
      )}
      <h1 style={{ marginTop: '30px' }}>{data.name}</h1>
      <p style={{ fontSize: '18px' }}>{data.detail}</p>
      <p><strong>Location:</strong> {data.location}</p>
      <p><strong>Contact:</strong> {data.contact}</p>
    </div>
  );
}
