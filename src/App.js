import Card from './components/Card'
import Header from './components/header'
import Overlay from './components/overlay'

function App() {
  return (
    <div className="wrapper clear">
        <Overlay />
        <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-30">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search"/>
            <input placeholder="Поиск..."/>
          </div>  
        </div>
        <div className="sneakers-cards d-flex justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    </div>
    </div>
  );
}

export default App;
