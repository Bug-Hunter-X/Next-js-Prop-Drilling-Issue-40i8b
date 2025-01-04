```javascript
// pages/index.js
import { MyContext } from '../context/MyContext';
import { useContext } from 'react';

export default function Home() {
  const contextValue = useContext(MyContext);
  return (
    <MyContext.Provider value={contextValue}>
      <div>
        <h1>Hello, world!</h1>
        <MyComponent/>
      </div>
    </MyContext.Provider>
  );
}

// components/MyComponent.js
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

export default function MyComponent() {
  const { someValue } = useContext(MyContext);
  console.log(someValue); 
  return <p>Hello from MyComponent {someValue}</p>;
}

// context/MyContext.js
import { createContext, useState } from 'react';

export const MyContext = createContext({});

export const MyContextProvider = ({ children }) => {
  const [someValue, setSomeValue] = useState('This is a test');
  return (
    <MyContext.Provider value={{ someValue }}>
      {children}
    </MyContext.Provider>
  );
}
```