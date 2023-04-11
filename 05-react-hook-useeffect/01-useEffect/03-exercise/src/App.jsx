import React, { useEffect, useState } from "react";

const App = () => {
  const [rate, setRate] = useState(0);
  const [exchange, setExchange] = useState(1);

  const syncRate = () => {  // set line(4) from 0 to 30
    setRate(30);
  };

const arr = [] //ยังไม่แน่ใจมีarray เปล่าไว้ทำไม

useEffect(syncRate,arr)  //เรียกsynrateเลยตั้งแต่เปิดหน้ามา

  const handleExchangeChange = (event) => {
    const newExchange = event.target.value;
    setExchange(newExchange);
  };

  return (
    <div>
      <h1>Current Rate: {rate}</h1>
      {/* <button onClick={syncRate}>Sync Rate</button> */}
      <input type="number" value={exchange} onChange={handleExchangeChange} />
      <h2>Calculated Exchange: {exchange * rate}</h2>
    </div>
  );
};

export default App;
