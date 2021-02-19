import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'react-bootstrap'
import Navbar from './components/NavBar/navbar.component'
import Home from "./components/Home/home.component";
import Footer from "./components/Footer/footer.component"
import SearchBar from "./components/SearchBar/searchbar.component";
import PostHome from "./components/Post/PostHome.component"
import PostDetail from "./components/Post/PostDetail.component"
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <div className="container-fluid">

        <Route path='/' exact component={Home}></Route>
        <Route path='/post' exact component={PostHome}></Route>
        <Route path='/post/:id' exact component={PostDetail}></Route>
      </div>
      <Footer></Footer>
    </Router>

  );
}

export default App;
