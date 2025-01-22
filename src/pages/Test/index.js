import { Box, Paper } from '@mui/material';
import React, { useState } from 'react';

const data = [
  {
    name: 'Win',
    age: 25,
  },
  {
    name: 'Ton',
    age: 25,
  },
  {
    name: 'Jeff',
    age: 33,
  },
  {
    name: 'Boat',
    age: 26,
  },
];

function Test() {
  const sortMaxAge = data.sort((a, b) => b.age - a.age);
  const nameMaxAge = sortMaxAge[0].name;
  console.log('a.', nameMaxAge);

  const getAgeByName = (name) => {
    const lowerName = name.toLowerCase();

    const findTarget = data.find((item) => item.name.toLowerCase() === lowerName);

    return findTarget.age;
  };
  console.log(getAgeByName('boat'));

  const transferGroup = (lists) => {
    const newGroup = {};
    lists.forEach((item) => {
      if (!newGroup[item.age]) {
        newGroup[item.age] = [item.name];
      } else {
        newGroup[item.age].push(item.name);
      }
    });

    return [newGroup];
  };
  console.log(transferGroup(data));

  const [count, setCount] = useState(0);
  const minusCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const plusCount = () => {
    setCount(count + 1);
  };

  return (
    <Box height={'100vh'} width={'100vw'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Paper sx={{ width: '50%', height: '50%', bgcolor: 'lightyellow' }}>
        <Box>
          <div
            style={{
              width: 250,
              height: 150,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'white',
              border: '1px solid grey',
            }}
          >
            <h2 style={{ color: 'grey' }}>Counter</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button
                onClick={minusCount}
                style={{ width: 25, height: 25, border: '1px solid grey', background: 'white', color: 'grey' }}
              >
                -
              </button>
              <h1 style={{ margin: '0px 20px', color: 'silver' }}>{count}</h1>
              <button
                onClick={plusCount}
                style={{ width: 25, height: 25, border: '1px solid grey', background: 'white', color: 'grey' }}
              >
                +
              </button>
            </div>
          </div>
        </Box>
      </Paper>
    </Box>
  );
}

export default Test;
