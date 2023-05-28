/*import logo from './logo.svg';*/
import './App.css';
import MyComponent from './components/MyComponent';
import ComponentA from './components/ComponentA';
import Counter from './components/Counter';



function App() {
  const name= 'Bob Dylan';

  return(
    // eslint-disable-next-line react/jsx-no-undef
    <>
      <h1> Hello, {name}!</h1>
      <p>This is example</p>
      <MyComponent/>   {/* syntaxis of coments (Ctrl+ #) */}
      <ComponentA/>
      <Counter/>
    </>
     
  )

}

export default App;
