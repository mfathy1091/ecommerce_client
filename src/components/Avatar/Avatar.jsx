import "./avatar.css";

const Avatar = (props) => {
  const { url, alt } = props;
  return (
    <img
      src={url}
      alt={alt}
    />
  );
};

export default Avatar;