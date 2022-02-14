import logo from '../logo.svg';
import MenuNav from './MenuNav';

function Header({ title }) {
  
  return(
    <>
    {/* <MenuNav /> */}
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{ title }</h1>
    </header> 
    </>
  );
}

export default Header;