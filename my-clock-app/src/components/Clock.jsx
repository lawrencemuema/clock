// src/components/Clock.js
import { Tooltip } from 'antd';
import React, { useState, useEffect } from 'react';

function Clock({ location, offset, abbreviation,full }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeWithOffset = () => {
    const utc = time.getTime() + time.getTimezoneOffset() * 60000;
    const localTime = new Date(utc + offset * 3600000);
    return localTime.toLocaleTimeString();
  };

  return (
    <div className="clock">
      <h2>{location}</h2>
        <p>{offset > 0 ? `+${offset}` : offset}</p>
        <Tooltip title={full} key={location}>
      <p>{abbreviation}</p>
        </Tooltip>
      <p>{getTimeWithOffset()}</p>

    </div>
  );
}

export default Clock;
