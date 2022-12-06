import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timerId);
    };
  });

  return (
    <div>
      <div>
        <h2> {date.toLocaleTimeString()}</h2>
      </div>
    </div>
  );
}

export default Clock;
