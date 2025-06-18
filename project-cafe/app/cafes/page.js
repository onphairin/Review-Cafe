import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const cafes = [
  {
    id: 1,
    name: "Moldna Club",
    description: "คาเฟ่สไตล์บีชคลับ ในซอยจรัญฯ 92 ฟีลเหมือนอยู่ริมชาดหาดสุดชิล",
    image: "https://media.discordapp.net/attachments/1354372567561146430/1384532226594705508/image.png?ex=6852c59e&is=6851741e&hm=1b295702612f3e6d68092d298ab810428f57699b421c0104aec1abd389721bb3&=&format=webp&quality=lossless&width=1228&height=800",
  },
  {
    id: 2,
    name: "Sevana Cafe",
    description: "คาเฟ่ลับ บนดาดฟ้าของโรงแรมเข้าท่าริเวอร์ บรรยากาศดี ",
    image: "https://media.discordapp.net/attachments/1354372567561146430/1384532227106275438/image.png?ex=6852c59e&is=6851741e&hm=b37c8f346152598255fe2747f9918e1e85597bca65a2c28df251cb326d57b80b&=&format=webp&quality=lossless&width=1124&height=753",
  },
  {
    id: 3,
    name: "Prakai Cafe & Cuisine",
    description: "คาเฟ่สไตล์แคมป์ปิ้งย่านร่มเกล้า บรรยากาศธรรมชาติ มาพร้อมวิวทะเลสาบ",
    image: "https://media.discordapp.net/attachments/1354372567561146430/1384532227731492985/image.png?ex=6852c59e&is=6851741e&hm=490eacb3db075039cd71caa88fb8bb0058b7e694fbff177706408c468d5b50a4&=&format=webp&quality=lossless&width=1730&height=778",
  },
  {
    id: 4,
    name: "Ternajachob Cafe",
    description: "คาเฟ่ย่านประเวศการตกแต่งสไตล์โคซี่ เรียบง่าย อบอุ่น กลมกลืนไปกับธรรมชาติ",
    image: "https://media.discordapp.net/attachments/1354372567561146430/1384532228255514645/image.png?ex=6852c59e&is=6851741e&hm=901d5b688b024717218ab0a7d8c6301320b38fa4b9278cc3cb8b909702f09af2&=&format=webp&quality=lossless&width=1148&height=800",
  },
  {
    id: 5,
    name: "Pulse Bangkhunthian",
    description: "คาเฟ่บรรยากาศริมน้ำชิลๆ วิวสุดเก๋ ย่านบางขุนเทียน-ชายทะเล",
    image: "https://media.discordapp.net/attachments/1354372567561146430/1384532228972871751/image.png?ex=6852c59e&is=6851741e&hm=5b67da4c47d65948a7b4f0ac21bab9654cd96f5eeec3977fb004b5ad1b6f3abe&=&format=webp&quality=lossless&width=1239&height=706",
  },
  {
    id: 6,
    name: "SUNNY SIDE good vibes cafe",
    description: "คาเฟ่สไลต์ Tropical Beach บบรรยากาศดีเหมือนอยู่ริมทะเล",
    image: "https://media.discordapp.net/attachments/1354372567561146430/1384532999378309150/image.png?ex=6852c656&is=685174d6&hm=141ff4613166f6bc7a464fc7f7f40dadeec981102fb5f95f0d60793d51947270&=&format=webp&quality=lossless&width=811&height=800",
  },
  {
    id: 7,
    name: "Starbucks Sukhumvit 24",
    description: "คาเฟ่พร้อมมุมถ่ายรูปสุดชิคสไตล์ผู้ดีอังกฤษ ไม่ต้องไปไกลถึงต่างประเทศ",
    image: "https://media.discordapp.net/attachments/1354372567561146430/1384532999827095643/image.png?ex=6852c656&is=685174d6&hm=d10298864e6673c0841fddce31a276d5fa3f92b58847f23686df4b1b107727eb&=&format=webp&quality=lossless&width=688&height=800",
  },
  {
    id: 8,
    name: "Kamaboko Coffee Camp",
    description: "คาเฟ่ที่ให้ความรู้สึกผ่อนคลาย มีมุมถ่ายรูปเก๋ๆเพียบ ",
    image: "https://media.discordapp.net/attachments/1354372567561146430/1384533000179421348/image.png?ex=6852c656&is=685174d6&hm=f410292ec906cc091ff68cb496eab6b0076d73dcda7de30367bfba58d762fdbd&=&format=webp&quality=lossless&width=691&height=610",
  },
  {
    id: 9,
    name: "BO TREE CAFE & BISTRO",
    description: "คาเฟ่สไตล์มินิมอลประดับประดาไปด้วยต้นไม้รอบๆบ้าน ",
    image: "/9.jpg",
  },
  {
    id: 10,
    name: "หมอก คาเฟ่",
    description: "คาเฟ่ที่คนรักธรรมชาติต้องห้ามพลาดบรรยากาศแบบธรรมชาติสดชื่น เติมพลังให้กับร่างกาย ",
    image: "/10.jpg",
  },
  {
    id: 11,
    name: "Tropi Hoola",
    description: "คาเฟ่น้องใหม่ย่านอารีย์สไตล์ญี่ปุ่นสุดจี๊ดร้านนี้สีสันสดใส โดนใจวัยรุ่นชัวร์",
    image: "/11.jpg",
  },
  {
    id: 12,
    name: "Chuanpisamai Cafe",
    description: "คาเฟ่สไตล์วินเทจเหมือนหลุดเข้าไปอยู่ในโลกนิยาย ",
    image: "/12.jpg",
  },
  {
    id: 13,
    name: "Fats and Angry",
    description: "ร้านอาหารสีแดงสไตล์อเมริกันยุค 1950 มีเค้าเตอร์บาร์ ให้นั่งดริ้งเก๋ๆ",
    image: "/13.jpg",
  },
  {
    id: 14,
    name: "Beaker and Bitter",
    description: "คาเฟ่น้องใหม่ไอเดียสุดคูลย่านอารีย์มาด้วยคอนเซ็ปห้องทดลองวิทยาศาสตร์ ",
    image: "/14.jpg",
  },
  {
    id: 15,
    name: "Camp Cafe Ari",
    description: "คาเฟ่สุดน่ารักสไตล์แคมป์ปิ้งร้านเล็กๆกะทัดรัด แต่ความน่ารักเต็มร้อย ",
    image: "/15.jpg",
  },
  {
    id: 16,
    name: "Martin’s English Cafe",
    description: "คาเฟ่เปิดใหม่ย่านอารีย์ ได้ฟีลเหมือนแวะเที่ยวต่างประเทศสุดๆ",
    image: "/16.jpg",
  },
  {
    id: 17,
    name: "Mr.Q Taiwanese Dessert",
    description: "คาเฟ่ขนมหวานสไตล์ไต้หวันย่านเจริญกรุง",
    image: "/17.jpg",
  },
  {
    id: 18,
    name: "Bootcamp Cafe",
    description: "คาเฟ่สุดชิคย่านพุทธมลฑลสายสอง เอาใจสายแคมป์ปิ้งกันอีกเช่นเคย",
    image: "/18.jpg",
  },
];
function CafeCard({ cafe }) {
  return (
    <Card sx={{ maxWidth: 300, margin: 2, borderRadius: 16, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', overflow: 'hidden', backgroundColor: '#FFDAB9' }}>
      <CardMedia
        sx={{ height: 200 }}
        image={cafe.image}
        title={cafe.name}
      /> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
          {cafe.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cafe.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        
        <Button size="small" variant="contained" sx={{ backgroundColor: '#B8926A', color: '#FFFFFF' }} href={`/cafes/${cafe.id}`}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default function CafeList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static" sx={{ backgroundColor: '#B8926A' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="#2D2D2B"
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
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#e0e0e0', padding: '20px 0' }}>
        {cafes.map(cafe => (
          <CafeCard key={cafe.id} cafe={cafe} />
        ))}
      </div>
    </Box>
  );
}

