import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import { useReveal } from '../hooks/useReveal'
import './Blog.css'

function BlogCard({ post, index }) {
  const { ref, visible } = useReveal(0.08)

  return (
    <article
      ref={ref}
      className={`blog-card reveal reveal-delay-${(index % 3) + 1}${visible ? ' visible' : ''}`}
    >
      <Link to={`/blog/${post.id}`} className="blog-card-link" aria-label={post.title}>
        <div className="blog-card-img">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('placeholder')
            }}
          />
        </div>
        <div className="blog-card-body">
          <div className="blog-card-meta">
            <span className="blog-card-author">Modni salon Renate</span>
            <span className="blog-card-separator">·</span>
            <time className="blog-card-date">{post.date}</time>
            <span className="blog-card-separator">·</span>
            <span className="blog-card-read">{post.readTime}</span>
          </div>
          <h2 className="blog-card-title">{post.title}</h2>
          <p className="blog-card-excerpt">{post.excerpt}</p>
          <span className="blog-card-more">Preberi več →</span>
        </div>
      </Link>
    </article>
  )
}

export default function Blog() {
  const heading = useReveal()

  return (
    <div className="blog-page">
      <div className="blog-page-hero" />

      <div className="section-inner blog-container">
        <div
          className={`blog-header reveal${heading.visible ? ' visible' : ''}`}
          ref={heading.ref}
        >
          <div className="gold-rule" />
          <h1 className="blog-page-title">Blog</h1>
          <p className="blog-page-sub">Novosti, inspiracija in kreacije iz modnega salona</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
