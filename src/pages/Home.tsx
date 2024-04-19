function Home() {
  function clica() {
    alert('clicou');
  }
  return (
    <div>
      <h1>PAGINA HOME OK</h1>
      <button onClick={() => clica()}>CLICA</button>
    </div>
  );
}

export default Home;
