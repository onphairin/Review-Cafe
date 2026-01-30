import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function CafeList() {
  return (
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
            <Button color="inherit" sx={{ color: '#FFFFFF' }}>Home Home</Button>
          </a>
          <a href='/cafes'>
            <Button color="inherit" sx={{ color: '#9a4646ff' }}>Review</Button>
          </a>
        </Toolbar>
      </AppBar>

      { }
      <div>
        <img
          src="https://media.discordapp.net/attachments/1354372567561146430/1384529425739157524/Review_Cafe.png?ex=6852c302&is=68517182&hm=23abc402aa1e2dbd5fad2ace4fbe8fcb8b143039926db5048ed2799d90ff139f&=&format=webp&quality=lossless&width=1169&height=658"
          style={{ marginRight: '100px', width: '1520px', height: '700px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', paddingTop: '20px' }}>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Typography
            variant="h1"
            style={{ marginRight: '50px', marginTop: '10px', textAlign: 'right', fontSize: '40px' }}
          >
            Review Cafe
          </Typography>
          <Typography
            variant="h2"
            style={{ marginRight: '50px', marginTop: '10px', fontSize: '30px', textAlign: 'center' }}
          >
            ใครกำลังหาร้านกาแฟ คาเฟ่น่านั่ง มุมถ่ายรูปสวยๆ  บรรยากาศดีๆ นั่งจิบกาแฟเพลินๆ วันนี้เราจัดมาให้ 18 คาเฟ่น่านั่งในกรุงเทพฯ เราคัดมาให้ทั้งคาเฟ่ถ่ายรูปสวย คาเฟ่ในสวน คาเฟ่นั่งชิลริมน้ำ คาเฟ่กึ่งร้านอาหาร
          </Typography>
        </div>
      </div>
      { }
    </Box>
  );
}
