import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';


const Ssr: React.FunctionComponent = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('A');
  });

  function reset() {
    setCount(count + 1);
  }

  return (
    <div>
      <Input.TextArea rows={4} value={count}/>
      <Button onClick={reset}>
        Click me
      </Button>
    </div>
  );
};


export default Ssr;
