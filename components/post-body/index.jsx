import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const PostBody = ({ content }) => (
  <div>{documentToReactComponents(content.json)}</div>
);

export default PostBody;
