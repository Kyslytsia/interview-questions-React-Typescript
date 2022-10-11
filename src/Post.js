import "../src/Post.css";

function Post({ text }) {
  return (
    <div className="questions">
      <div className="question">{text}</div>
      <button className="yes">yes</button>
      <button className="no">no</button>
    </div>
  );
}

export default Post;
