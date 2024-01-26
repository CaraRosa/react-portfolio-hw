import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Import your screenshots
import EarringWebsite from '../assets/images/EarringWebsite.png';
import HoriseonWebpage from '../assets/images/HoriseonWebpage.png';
import GasFinderWebpage from '../assets/images/GasFinderWebpage.png'
// Import other screenshots as needed

export default function Portfolio() {
  const itemData = [
    {
      img: EarringWebsite,
      title: 'Earring Website',
      url: 'https://cararosa.github.io/Group-Project-Final/',
    },
    {
        img: HoriseonWebpage,
        title: 'Horiseon Webpage',
        url: 'https://cararosa.github.io/urban-octo-telegram-rosa-hw/',
    },
    {
        img: GasFinderWebpage,
        title: 'GasFinderWebpage',
        url: 'https://charleshuurman.github.io/Gas-Finder/'
    }
    // Add more items with screenshots and titles as needed
  ];

  return (
    <ImageList sx={{ width: 1000, height: 1000 }} cols={2} rowHeight={300}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
            < a href={item.url} target="_blank" rel="noopener noreferrer">
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          </a>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
