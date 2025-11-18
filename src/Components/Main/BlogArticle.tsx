import { useParams, useNavigate } from 'react-router-dom';
import { blogArticles } from '../Shared/Consts';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const BlogArticle = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  
  const article = blogArticles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            Article Not Found
          </h2>
          <button 
            onClick={() => navigate('/blog')}
            className="bg-accent text-white px-6 py-3 rounded-full font-heading font-bold hover:bg-accent/90 transition"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const relatedArticles = blogArticles.filter(a => a.id !== articleId).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-embryon py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button 
              onClick={() => navigate('/blog')}
              className="text-white/80 hover:text-white font-body mb-6 flex items-center gap-2 transition"
            >
              ← Back to Blog
            </button>
            <span className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-heading font-bold mb-4">
              {article.category}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="font-body">{article.author}</span>
              <span>•</span>
              <span className="font-body">{article.date}</span>
              <span>•</span>
              <span className="font-body">{article.readTime}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="font-body text-xl text-dark leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-accent first-letter:mr-2 first-letter:float-left">
              {article.content.introduction}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {article.content.sections.map((section, index) => (
              <div key={index} className="border-l-4 border-accent pl-6">
                <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                  {section.heading}
                </h2>
                <p className="font-body text-lg text-dark leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 p-8 bg-light rounded-2xl border-l-4 border-accent">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">
              Conclusion
            </h2>
            <p className="font-body text-lg text-dark leading-relaxed">
              {article.content.conclusion}
            </p>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-light">
            <h3 className="font-heading text-xl font-bold text-primary mb-4">
              Share This Article
            </h3>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-secondary/10 hover:bg-secondary text-secondary hover:text-white flex items-center justify-center transition">
                <FaFacebook size={20} />
              </button>
              <button className="w-12 h-12 rounded-full bg-secondary/10 hover:bg-secondary text-secondary hover:text-white flex items-center justify-center transition">
                <FaTwitter size={20} />
              </button>
              <button className="w-12 h-12 rounded-full bg-secondary/10 hover:bg-secondary text-secondary hover:text-white flex items-center justify-center transition">
                <FaLinkedin size={20} />
              </button>
              <button className="w-12 h-12 rounded-full bg-secondary/10 hover:bg-secondary text-secondary hover:text-white flex items-center justify-center transition">
                <FaWhatsapp size={20} />
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-embryon p-8 rounded-2xl text-center text-white">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Have Questions About Your Fertility Journey?
            </h3>
            <p className="font-body text-lg mb-6">
              Our expert team at Embryon Family is here to help. Schedule a consultation today.
            </p>
            <button className="bg-accent text-white px-8 py-3 rounded-full font-heading font-bold hover:bg-accent/90 transition shadow-lg">
              Book an Appointment
            </button>
          </div>
        </motion.article>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="font-heading text-3xl font-bold text-primary mb-8">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle, index) => (
              <motion.div
                key={relatedArticle.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => navigate(`/blog/${relatedArticle.id}`)}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group border border-light"
              >
                <div className="relative h-48 bg-gradient-to-br from-secondary to-primary overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center p-4">
                      <span className="text-4xl mb-2 block">📝</span>
                      <h3 className="font-heading text-sm font-bold uppercase">
                        {relatedArticle.category}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-all"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-base font-bold text-primary mb-2 group-hover:text-accent transition line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <span className="font-body text-xs text-dark/60">{relatedArticle.readTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;

// import { useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import blog1 from '../../assets/Images/iStockImages/iStock-1256257042.jpg';
// import blog2 from '../../assets/Images/iStockImages/iStock-1256257042.jpg';
// import blog3 from '../../assets/Images/iStockImages/iStock-1256257042.jpg';
// import blog4 from '../../assets/Images/iStockImages/iStock-1256257042.jpg';
// import bannerCustom from '../../assets/Images/iStockImages/iStock-1256257042.jpg';

// const articles = [
//   {
//     id: '1',
//     title: 'Advancements in IVF Treatment 2025',
//     banner: bannerCustom,
//     content: `IVF technology has evolved significantly with innovations such as AI‑assisted embryo grading, improved ovarian stimulation protocols, and enhanced genetic testing...`,
//   },
//   {
//     id: '2',
//     title: 'Surrogacy in Ukraine: Complete Guide',
//     banner: blog2,
//     content: `Ukraine continues to be a leading destination for intended parents due to its transparent legal process, medical expertise, and cost‑effective programs...`,
//   },
//   {
//     id: '3',
//     title: 'Egg Donation Success Rates Rising',
//     banner: blog3,
//     content: `Success rates for egg donation programs have increased due to better donor screening, advanced lab environments, and refined embryo transfer techniques...`,
//   },
//   {
//     id: '4',
//     title: 'Choosing the Right Fertility Clinic',
//     banner: blog4,
//     content: `With multiple fertility centers emerging globally, choosing the right clinic requires evaluating medical expertise, technology, success rates, and patient support...`,
//   },
// ];

// const BlogArticle = () => {
//   const { articleId } = useParams();
//   const article = articles.find((item) => item.id === articleId);

//   if (!article) return <div className="p-10 text-red-600">Article not found.</div>;

//   return (
//     <section className="bg-light text-dark">
//       {/* Banner */}
//       <div
//         className="w-full h-[60vh] bg-center bg-cover flex items-center justify-center relative"
//         style={{ backgroundImage: `url(${article.banner})` }}
//       >
//         <div className="absolute inset-0 bg-black/40"></div>
//         <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center px-4">
//           {article.title}
//         </h1>
//       </div>

//       {/* Article Body */}
//       <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* Main Article */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="md:col-span-2 bg-white shadow-lg rounded-xl p-8 leading-8 text-[17px]"
//         >
//           <p>{article.content}</p>
//         </motion.div>

//         {/* Sidebar */}
//         <div className="bg-white p-8 shadow-lg rounded-xl h-max">
//           <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
//           <div className="flex flex-col gap-5">
//             {articles.filter((a) => a.id !== article.id).map((related) => (
//               <a
//                 key={related.id}
//                 href={`/blog/${related.id}`}
//                 className="flex items-center gap-4 hover:text-primary transition"
//               >
//                 <img
//                   src={related.banner}
//                   className="w-20 h-16 object-cover rounded-lg shadow"
//                 />
//                 <p className="font-medium text-sm">{related.title}</p>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogArticle;

