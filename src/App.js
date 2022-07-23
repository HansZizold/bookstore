import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Books from './Components/Books';
import Categories from './Components/Categories';
import ErrorPage from './Components/ErrorPage';
import './App.css';

function App() {
  return (
    <Router>
      <main>
        <header>
          <h1>BookStore CMS</h1>
          <nav>
            <Link to="/" className="books">BOOKS</Link>
            <Link to="Categories" className="categories">CATEGORIES</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;
