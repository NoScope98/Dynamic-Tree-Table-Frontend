import React, { useState, useEffect } from "react";

const ws = new WebSocket(`ws://${window.location.hostname}:5000`);

const Runner = () => {
  const [value, setValue] = useState(50);

  useEffect(() => {
    ws.onopen = () => {
      console.log("ONLINE");
    };
  });

  //   ws.onclose = () => {
  //     console.log("DISCONNECTED");
  //   };

  ws.onmessage = (response) => {
    console.log(response.data);
    setValue(response.data);
  };

  const handleChange = (e) => {
    console.log(e.target.value);

    ws.send(e.target.value);
    // ws.send(value);
  };

  return (
    <div className="pt-3">
      <input
        type="range"
        className="form-control-range"
        onChange={handleChange}
        value={value}
      ></input>
    </div>
  );
};

export default Runner;
