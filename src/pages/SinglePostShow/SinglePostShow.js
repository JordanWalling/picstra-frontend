function SinglePostShow({ post }) {
  return (
    <div>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.desc}</p>
    </div>
  );
}
export default SinglePostShow;
