import React, { useState } from 'react';
import MenuNav from '../components/MenuNav';

function Home() {

  const [contador, setContador] = useState(0);

  function increment() {
    setContador(contador + 1);
  }

  return (
    <>
      <MenuNav />
      <p>{contador} cliques!</p>
      <p><input type="button" value="Clique" onClick={increment} /></p>
    </>
  );
}

export default Home;