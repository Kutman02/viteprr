import React from 'react';
function Home() {
  const [count, setCount] = React.useState(0);
  console.log(count);

  return (
    <>
      <p className="number-test">{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}

export default Home;
