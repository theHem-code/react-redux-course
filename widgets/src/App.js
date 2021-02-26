import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'What is React',
    content: 'React is a front-end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engeneers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

const options = [
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Blue',
    value: 'blue'
  },
  {
    label: 'Green',
    value: 'green'
  }
];


export default () => {
  const [selected, setSelected] = useState(options[0]);


  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
       />
    </div>
  )
};
