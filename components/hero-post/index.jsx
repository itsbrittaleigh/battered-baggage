import Link from 'next/link';
import Avatar from '../avatar';
import DateComponent from '../date';
import CoverImage from '../cover-image';

const HeroPost = ({
  author,
  coverImage,
  date,
  excerpt,
  slug,
  title,
}) => (
  <main>
    <CoverImage title={title} slug={slug} url={coverImage.url} />
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a>{title}</a>
    </Link>
    <DateComponent dateString={date} />
    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    {author && <Avatar name={author.name} picture={author.picture} />}
  </main>
);

export default HeroPost;
