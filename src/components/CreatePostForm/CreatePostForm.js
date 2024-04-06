import { useState } from "react";
import "../CreatePostForm/CreatePostForm.scss";
function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(title, description, image);
  }
  return (
    <form onSubmit={handleSubmit} className="create-post">
      <h1>Create a Post</h1>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Upload Image:</label>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button>Submit</button>
    </form>
  );
}
export default CreatePostForm;
