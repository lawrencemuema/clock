// src/App.js
import React from 'react';
import { Space, Tooltip } from 'antd';
import Clock from './components/Clock';

const timeZones = [
  
  { location: 'Niue', offset: -14, abbreviation: 'NUT', full: 'Niue Time' },
  { location: 'Samoa', offset: -13, abbreviation: 'UTC-13', full: 'Samoa Time Zone' },
  { location: 'Baker Island', offset: -12, abbreviation: 'BIT', full: 'Baker Island Time' },
  { location: 'Pago Pago', offset: -11, abbreviation: 'SST', full: 'Samoa Standard Time' },
  { location: 'Honolulu', offset: -10, abbreviation: 'HST', full: 'Hawaii–Aleutian Standard Time' },
  { location: 'Anchorage', offset: -9, abbreviation: 'AKST', full: 'Alaska Standard Time' },
  { location: 'Los Angeles', offset: -8, abbreviation: 'PST', full: 'Pacific Standard Time' },
  { location: 'Calgary', offset: -7, abbreviation: 'MST', full: 'Mountain Standard Time' },
  { location: 'Mexico City', offset: -6, abbreviation: 'CST', full: 'Central Standard Time' },
  { location: 'New York', offset: -5, abbreviation: 'EST', full: 'Eastern Standard Time' },
  { location: 'Caracas', offset: -4, abbreviation: 'VET', full: 'Venezuelan Standard Time' },
  { location: 'Buenos Aires', offset: -3, abbreviation: 'ART', full: 'Argentina Time' },
  { location: 'Rio de Janeiro', offset: -2, abbreviation: 'BRT', full: 'Brasília Time' },
  { location: 'Reykjavik', offset: -1, abbreviation: 'GMT', full: 'Greenwich Mean Time' },
  { location: 'London', offset: 0, abbreviation: 'UTC', full: 'Coordinated Universal Time' },
  { location: 'Paris', offset: 1, abbreviation: 'CET', full: 'Central European Time' },
  { location: 'Kyiv', offset: 2, abbreviation: 'CEST', full: 'Central European Summer Time' },
  { location: 'Nairobi', offset: 3, abbreviation: 'EAT', full: 'Eastern Africa Time' },
  { location: 'Dubai', offset: 4, abbreviation: 'GST', full: 'Gulf Standard Time' },
  { location: 'Tashkent', offset: 5, abbreviation: 'UZT', full: 'Uzbekistan Time' },
  { location: 'Almaty', offset: 6, abbreviation: 'ALMT', full: 'Alma-Ata Time' },
  { location: 'Bangkok', offset: 7, abbreviation: 'ICT', full: 'Indochina Time' },
  { location: 'Singapore', offset: 8, abbreviation: 'SGT', full: 'Singapore Time' },
  { location: 'Tokyo', offset: 9, abbreviation: 'JST', full: 'Japan Standard Time' },
  { location: 'Sydney', offset: 10, abbreviation: 'AEDT', full: 'Australian Eastern Daylight Time' },
  { location: 'Magadan', offset: 11, abbreviation: 'MAGT', full: 'Magadan Time' },
  { location: 'Auckland', offset: 12, abbreviation: 'NZST', full: 'New Zealand Standard Time' },
  { location: 'Fiji', offset: 13, abbreviation: 'FJT', full: 'Fiji Time' },
  { location: 'Kiribati', offset: 14, abbreviation: 'LINT', full: 'Line Islands Time' },
];


const appStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '10px',
};

function App() {
  return (
    <div style={appStyle}>
      <h1 style={{ fontSize: '20px', marginBottom: '20px' }}>World Clock App</h1>
      <Space direction="horizontal" size={20}>
        {timeZones.map((tz) => (
            <Clock
              location={tz.location}
              offset={tz.offset}
              abbreviation={tz.abbreviation}
              full={tz.full}
            />
        ))}
      </Space>
    </div>
  );
}

export default App;
