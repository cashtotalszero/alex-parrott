const Emoji = ({ unicode, label }) => (
  <span role="img" aria-label={label}>
    {unicode}
  </span>
);

export default Emoji;
