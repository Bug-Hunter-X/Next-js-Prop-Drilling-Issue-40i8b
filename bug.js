```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      {/* This is the problematic part */}
      <MyComponent props={{ someValue: 'This is a test' }}/>
    </div>
  );
}

// components/MyComponent.js
export default function MyComponent({ props }) {
  console.log(props);
  return <p>Hello from MyComponent</p>;
}
```