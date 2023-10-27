
const blog =({ comments }) => (
  <ul>
    {comments.map((comment, index) => (
      <li key={index}>{comment}</li>
    ))}
  </ul>
);
export default blog
