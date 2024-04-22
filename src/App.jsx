import Nav from "./components/Nav/Nav";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div className={`productInfoWrapper`}>
          <div className="productDisplay"></div>
          <div className="productInfo"></div>
        </div>
      </main>
    </>
  );
}

export default App;
