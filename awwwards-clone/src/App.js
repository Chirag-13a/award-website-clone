import logo from './logo.svg'; 
import './topheaderr.css';
import './navbar.css';
import './dropdown.css';
import Header from './components/topheaderr';
import Navbar from './components/navbar';
import Dropdown from './components/dropdowns';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Dropdown 
      title="Awards"
      options= {[<div>Site of the Day</div>,<div>Sites of the Month</div>,<div>Sites of the Year</div>,<div>Developer</div>,<div>Honorable Mention</div>,<div>Nominees</div>,<div>Typography Honors</div>,<div>No-code Honors</div>,<div>E-commerce Honors</div>,<div>Product Honors</div>,
        <div>Portfolio Honors</div>,<div>Business & Services Honors</div>]} />
      <Dropdown
      title="Category"
      options={[<div>Architecture</div>,<div>Art & Illustration</div>,<div>Business & Corporate</div>,<div>Culture & Eduction</div>
        ,<div>Desgin Agencies</div>,<div>E-Commerce</div>,<div>Events</div>,<div>Experimental</div>,<div>Fashion</div>,<div>Film & TV</div>,
        <div>Food & Drink</div> 
      ]} />
      <Dropdown 
      title="tag"
      options={[<div>360</div>,<div>3D</div>,<div>404 Pages</div>,<div>About Page</div>,<div>Animation</div>,
        <div>App Style</div>,<div>Big Background Images</div>,<div>Clean</div>,<div>colorful</div>,
        <div>Contact Pages</div>,<div>Contenful</div>,<div>Copy design</div>,<div>Flat Desgin</div>
      ]} />
    </>
  );
}

export default App;
