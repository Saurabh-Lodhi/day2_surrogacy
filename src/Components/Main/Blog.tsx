import { SelectedPage } from '../Shared/Types';
import { blogArticles } from '../Shared/Consts';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import b1 from '../../assets/Images/iStockImages/b1.jpg';
import img1 from '../../assets/Images/iStockImages/iStock-1357537622.jpg';
import img2 from '../../assets/Images/iStockImages/about1.jpg';
import img3 from '../../assets/Images/iStockImages/Service2.jpg';
import img4 from '../../assets/Images/iStockImages/service1.jpg';

const cardImages = [img1, img2, img3, img4];

const Blog = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const totalPages = Math.ceil(blogArticles.length / articlesPerPage);

  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = blogArticles.slice(indexOfFirst, indexOfLast);

  const handleArticleClick = (articleId: string) => {
    navigate(`/blog/${articleId}`);
  };

  return (
    <section id={SelectedPage.Blog} className="bg-light min-h-screen">

      {/* Banner Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img src={b1} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1A1A1A]/40 flex items-center justify-center">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-wide uppercase drop-shadow-lg">
            Fertility Blog
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-6">

        {/* All Articles with Pagination */}
        <h2 className="font-heading text-3xl font-bold text-[#4B0082] mb-8">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {currentArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => handleArticleClick(article.id)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cardImages[index % cardImages.length]}
                  alt="Card"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-[#1A1A1A]/60 mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-heading text-lg font-bold text-[#4B0082] mb-3 group-hover:text-[#FF7F50] transition line-clamp-2">
                  {article.title}
                </h3>

                <button className="font-heading text-[#FF7F50] font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="mt-16 flex justify-center items-center gap-4">

          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className={`px-5 py-2 rounded-full border border-[#4B0082] font-heading text-sm transition ${
              currentPage === 1
                ? 'opacity-40 cursor-not-allowed'
                : 'hover:bg-[#4B0082] hover:text-white'
            }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-heading text-sm transition ${
                  currentPage === i + 1
                    ? 'bg-[#4B0082] text-white'
                    : 'bg-white border border-[#4B0082] hover:bg-[#4B0082] hover:text-white'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className={`px-5 py-2 rounded-full border border-[#4B0082] font-heading text-sm transition ${
              currentPage === totalPages
                ? 'opacity-40 cursor-not-allowed'
                : 'hover:bg-[#4B0082] hover:text-white'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
