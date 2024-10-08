import React, { useState } from 'react';

const Stopwatch = () => {
  // state
  const [isCounting, setIsCounting] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [countingTime, setCountingTime] = useState(0);

  // user actions
  const onStartStopClicked = (e) => {
    if (!isCounting) {
      // setStartTime(+new Date);
      setIsCounting(true);
      const la = + new Date;

      window.counter = setInterval(() => {
        setCountingTime((+new Date) - la);
      }, 1000);
    } else {
      setIsCounting(false);
      clearInterval(window.counter);
    }
  };
  const onResetClicked = (e) => {
    setIsCounting(false);
    setStartTime(0);
    setCountingTime(0);

    clearInterval(window.counter);
  };

  // render methods
  const renderDisplay = () => {
    if (!countingTime) return '00:00:00.0';

    const timeToDisplay = countingTime;

    return timeToDisplay;
  };

  // render
  const display = renderDisplay();

  return (
    <div className='stopwatch'>
      <div>
        <code>{ display }</code>
      </div>
      <div>
        <button onClick={onStartStopClicked}>start/stop</button>
        <button onClick={onResetClicked}>reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
