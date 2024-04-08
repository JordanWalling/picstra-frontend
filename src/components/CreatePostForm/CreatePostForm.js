import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CreatePostForm/CreatePostForm.scss";

function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("image", image);
    try {
      await fetch(process.env.REACT_APP_URL, {
        method: "POST",
        body: formData,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <label>Upload Image:</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button>Submit</button>
    </form>
  );
}
export default CreatePostForm;
