import image from './assets/image.png';
import {TitleBlock, ImageBlock, TextBlock, ColumnsBlock} from './classes/blocks.js';

const text = `
  Another code you can see here: <a href="https://github.com/AlexandrDrozdFD" target="_blank">GitHub</a>
`

export const model = [
  new TitleBlock('Site Constructor with pure JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, darkblue, orange)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),

  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '250px',
      height: 'auto'
    },
    alt: 'Random picture'
  }),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem 2rem',
      'font-weight': 'bold'
    }
  }),

  new ColumnsBlock(
    [
      'This application is made with pure JS without any frameworks',
      'Also you will learn SOLID principles and OOP',
      'JavaScript is interesting. Start creating your own UI'
    ],
    {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        color: '#fff',
        padding: '2rem',
        'font-weight': 'bold'
      }
    }
  ),

];