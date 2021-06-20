import Link from 'next/link';
import CoverImageStyles from './styles';

const CoverImage = ({ slug, title, url }) => {
  const image = (
    <img
      alt={`Cover Image for ${title}`}
      className="cover-image__image"
      src={url}
    />
  );

  return (
    <CoverImageStyles>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </CoverImageStyles>
  );
}

export default CoverImage;
