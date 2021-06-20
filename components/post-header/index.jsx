import Avatar from '../avatar';
import DateComponent from '../date';
import CoverImage from '../cover-image';
import PostTitle from '../post-title';

const PostHeader = ({ author, coverImage, date, title }) => (
  <>
    <PostTitle>{title}</PostTitle>
    {author && (
      <Avatar name={author.name} picture={author.picture} />
    )}
    <CoverImage title={title} url={coverImage.url} />
    <DateComponent dateString={date} />
  </>
);

export default PostHeader;
