```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isMounted.current) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 1000);

    return () => {
      isMounted.current = false;
      clearTimeout(timeoutId);
    };
  }, [count]);

  return <div>Count: {count}</div>;
}
```