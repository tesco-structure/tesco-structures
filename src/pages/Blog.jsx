import { useState } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    category: 'Civil Engineering',
    title: 'Concrete Durability in Coastal...',
    desc: 'Technical analysis of salt-resistant concrete mixtures for coastal construction projects.',
    date: 'May 24, 2026',
    image: '/images/blog_concrete_durability.png',
    link: '#'
  },
  {
    id: 2,
    category: 'Tensile Structures',
    title: 'The Aesthetics of Fabric Structures',
    desc: 'How high-tension fabric roofs are transforming sports arenas and open-air commercial spaces.',
    date: 'May 18, 2026',
    image: '/images/swimming_pool_tensile.png',
    link: '#'
  },
  {
    id: 3,
    category: 'Sustainability',
    title: 'Green Certifications in 2024',
    desc: 'A guide to LEED and BREEAM standards for modern pre-engineered building designs.',
    date: 'May 12, 2026',
    image: '/images/blog_green_certifications.png',
    link: '#'
  },
  {
    id: 4,
    category: 'Roofing',
    title: 'Advanced Insulation Systems',
    desc: 'New materials and layering techniques for thermal efficiency in industrial warehouses.',
    date: 'May 05, 2026',
    image: '/images/trapezoidal_roofing.png',
    link: '#'
  },
  {
    id: 5,
    category: 'Process',
    title: 'BIM Integration in Site Planning',
    desc: 'How Building Information Modeling is reducing site execution errors and timeline delays.',
    date: 'April 28, 2026',
    image: '/images/blog_bim_integration.png',
    link: '#'
  },
  {
    id: 6,
    category: 'Safety',
    title: 'Zero-Harm Initiatives in 2024',
    desc: 'Our commitment to safety excellence through AI-powered hazard monitoring.',
    date: 'April 15, 2026',
    image: '/images/blog_zero_harm.png',
    link: '#'
  },
  {
    id: 7,
    category: 'Civil Engineering',
    title: 'Concrete Durability in Coastal...',
    desc: 'Technical analysis of salt-resistant concrete mixtures for coastal construction projects.',
    date: 'May 24, 2026',
    image: '/images/blog_concrete_durability.png',
    link: '#'
  },
  {
    id: 8,
    category: 'Tensile Structures',
    title: 'The Aesthetics of Fabric Structures',
    desc: 'How high-tension fabric roofs are transforming sports arenas and open-air commercial spaces.',
    date: 'May 18, 2026',
    image: '/images/swimming_pool_tensile.png',
    link: '#'
  },
  {
    id: 9,
    category: 'Sustainability',
    title: 'Green Certifications in 2024',
    desc: 'A guide to LEED and BREEAM standards for modern pre-engineered building designs.',
    date: 'May 12, 2026',
    image: '/images/blog_green_certifications.png',
    link: '#'
  },
  {
    id: 10,
    category: 'Roofing',
    title: 'Advanced Insulation Systems',
    desc: 'New materials and layering techniques for thermal efficiency in industrial warehouses.',
    date: 'May 05, 2026',
    image: '/images/trapezoidal_roofing.png',
    link: '#'
  },
  {
    id: 11,
    category: 'Process',
    title: 'BIM Integration in Site Planning',
    desc: 'How Building Information Modeling is reducing site execution errors and timeline delays.',
    date: 'April 28, 2026',
    image: '/images/blog_bim_integration.png',
    link: '#'
  },
  {
    id: 12,
    category: 'Safety',
    title: 'Zero-Harm Initiatives in 2024',
    desc: 'Our commitment to safety excellence through AI-powered hazard monitoring.',
    date: 'April 15, 2026',
    image: '/images/blog_zero_harm.png',
    link: '#'
  }
];

const categories = [
  { name: 'All', count: 48 },
  { name: 'PEB Structures', count: 24 },
  { name: 'Civil Works', count: 10 },
  { name: 'Roofing Systems', count: 12 },
  { name: 'Tensile Design', count: 6 }
];

const Blog = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter criteria map
  const filterPosts = (posts) => {
    return posts.filter(post => {
      // Category match
      const categoryMap = {
        'PEB Structures': 'Sustainability', // Map sample fields to categories
        'Civil Works': 'Civil Engineering',
        'Roofing Systems': 'Roofing',
        'Tensile Design': 'Tensile Structures'
      };
      
      const categoryMatch = selectedFilter === 'All' || post.category === categoryMap[selectedFilter] || post.category === selectedFilter;
      
      // Search text match
      const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      return categoryMatch && searchMatch;
    });
  };

  const filteredPosts = filterPosts(blogPosts);

  return (
    <div className="blog-page-container">
      {/* Blog Hero Section */}
      <section className="blog-hero">
        <div className="blog-badge">Our Blog</div>
        <h1 className="blog-title">Insights, updates, and expert knowledge in construction and engineering.</h1>
      </section>

      {/* Main Content Layout */}
      <div className="blog-main-layout">
        
        {/* Left Columns: Filter tabs + Post Grid */}
        <div className="blog-content-left">
          
          {/* Mobile/Tablet/Desktop Tabs */}
          <div className="blog-filter-tabs">
            {['All', 'PEB', 'Civil', 'Roofing', 'Tensile'].map((filter) => {
              // Map button tabs to core filter category selection
              const targetCategoryMap = {
                'All': 'All',
                'PEB': 'PEB Structures',
                'Civil': 'Civil Works',
                'Roofing': 'Roofing Systems',
                'Tensile': 'Tensile Design'
              };
              const mappedFilter = targetCategoryMap[filter];
              return (
                <button
                  key={filter}
                  className={`filter-tab-btn ${selectedFilter === mappedFilter ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedFilter(mappedFilter);
                    setCurrentPage(1);
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Posts Grid */}
          <div className="blog-posts-grid">
            {filteredPosts.slice((currentPage - 1) * 6, currentPage * 6).map((post) => (
              <article className="blog-card" key={post.id}>
                <div className="blog-card-img-wrapper">
                  <img src={post.image} alt={post.title} className="blog-card-img" />
                </div>
                <div className="blog-card-body">
                  <span className="blog-card-category">{post.category.toUpperCase()}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-desc">{post.desc}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-date">{post.date}</span>
                    <a href={post.link} className="blog-card-readmore">Read More &rarr;</a>
                  </div>
                </div>
              </article>
            ))}
            
            {filteredPosts.length === 0 && (
              <div className="no-posts-found">No articles matching your criteria were found.</div>
            )}
          </div>

          {/* Pagination bar */}
          <div className="blog-pagination">
            <button 
              className="pag-btn prev" 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={16} />
            </button>
            
            <button 
              className={`pag-num ${currentPage === 1 ? 'active' : ''}`} 
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            
            <button 
              className={`pag-num ${currentPage === 2 ? 'active' : ''}`} 
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            
            <button 
              className={`pag-num ${currentPage === 3 ? 'active' : ''}`} 
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>
            
            <span className="pag-ellipsis">...</span>
            
            <button 
              className={`pag-num ${currentPage === 8 ? 'active' : ''}`}
              onClick={() => setCurrentPage(8)}
            >
              8
            </button>
            
            <button 
              className="pag-btn next"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, 8))}
              disabled={currentPage === 8}
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

        {/* Right Column: Search + Categories */}
        <aside className="blog-sidebar">
          
          {/* Search Box */}
          <div className="sidebar-widget search-widget">
            <h3>Search</h3>
            <div className="search-input-wrapper">
              <input 
                type="text" 
                placeholder="Keywords..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="search-icon" size={18} />
            </div>
          </div>

          {/* Categories list */}
          <div className="sidebar-widget categories-widget">
            <h3>Categories</h3>
            <ul className="categories-list">
              {categories.map((cat) => (
                <li 
                  key={cat.name} 
                  className={selectedFilter === cat.name ? 'active' : ''}
                  onClick={() => {
                    setSelectedFilter(cat.name);
                    setCurrentPage(1);
                  }}
                >
                  <span className="cat-name">{cat.name}</span>
                  <span className="cat-count">{cat.count.toString().padStart(2, '0')}</span>
                </li>
              ))}
            </ul>
          </div>

        </aside>

      </div>
    </div>
  );
};

export default Blog;
