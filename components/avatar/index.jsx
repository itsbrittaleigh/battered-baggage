import AvatarStyles from './styles';

const Avatar = ({ name, picture }) => (
  <AvatarStyles>
    <img
      alt={name}
      className="avatar__image"
      src={picture.url}
    />
    <p className="avatar__name">{name}</p>
  </AvatarStyles>
);

export default Avatar;
