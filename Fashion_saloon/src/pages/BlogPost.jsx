import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import './BlogPost.css'

export default function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === Number(id))

  if (!post) {
    return (
      <div className="post-not-found">
        <p>Prispevek ni bil najden.</p>
        <Link to="/blog" className="post-back-link">← Nazaj na blog</Link>
      </div>
    )
  }

  return (
    <div className="blog-post-page">
      <div className="post-hero">
        <div
          className="post-hero-img"
          style={{ backgroundImage: `url(${post.image})` }}
          aria-hidden="true"
        />
        <div className="post-hero-overlay" aria-hidden="true" />
        <div className="post-hero-content section-inner">
          <div className="post-meta">
            <span className="post-author">Modni salon Renate</span>
            <span className="post-sep">·</span>
            <time className="post-date">{post.date}</time>
            <span className="post-sep">·</span>
            <span className="post-read">{post.readTime}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
        </div>
      </div>

      <div className="section-inner post-body-wrap">
        <Link to="/blog" className="post-back-link">← Nazaj na blog</Link>
        <div className="post-body">
          {post.content.split('\n').map((para, i) =>
            para.trim() ? <p key={i}>{para}</p> : null
          )}
        </div>
      </div>
    </div>
  )
}
