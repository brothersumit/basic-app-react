//import logo from './logo.svg';
import './App.css';
import Table from './Table.js';
import Header from './Header.js';
import Footer from './Footer.js';

var users = [
  {
    id: 1,
    name: "sumit kumar",
    email: "skumarwebdev@gmail.com"
  },
  {
    id: 2,
    name: "John Doe",
    email: "skumarwebdev@gmail.com"
  },
  {
    id: 3,
    name: "Archilis",
    email: "archiles@gmail.com"
  }
];

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Table users={users} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
