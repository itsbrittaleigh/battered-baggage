import Link from 'next/link';
import Avatar from '../avatar';
import DateComponent from '../date';
import CoverImage from '../cover-image';

const PostPreview = ({
  author,
  coverImage,
  date,
  excerpt,
  slug,
  title,
}) => (
  <div>
    <CoverImage title={title} slug={slug} url={coverImage.url} />
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a>{title}</a>
    </Link>
    <DateComponent dateString={date} />
    <p>{excerpt}</p>
    {author && (
      <Avatar name={author.name} picture={author.picture} />
    )}
  </div>
);

export default PostPreview;
