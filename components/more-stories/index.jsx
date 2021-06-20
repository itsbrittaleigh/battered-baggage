import PostPreview from '../post-preview';

const MoreStories = ({ posts }) => (
  <section>
    <h2>More Stories</h2>
    <div>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  </section>
);

export default MoreStories;