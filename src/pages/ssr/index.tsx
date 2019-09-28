import React, { useState } from 'react';
import { Input, Button } from 'antd';


const ssr = () => {
  const [count, setCount] = useState(0);

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


export default ssr;
