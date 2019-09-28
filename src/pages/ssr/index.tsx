import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';


const ssr: React.FunctionComponent = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
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


export default ssr;
