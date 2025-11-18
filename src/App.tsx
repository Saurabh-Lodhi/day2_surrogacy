// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Blog from './Components/Main/Blog';
import BlogArticle from './Components/Main/BlogArticle.tsx';

function App() {
  return (
    <Router>
      <div className="text-dark app min-w-[280px] min-h-screen bg-white">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:articleId" element={<BlogArticle />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
