import "../styles/form.css";
import { useState } from "react";

const Form = ({ handleAddArtist, handleCloseModal }) => {
  const [formData, setFormData] = useState({
    artistName: "",
    image: "",
    genre: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddArtist(formData);
    handleCloseModal(false);
  };

  return (
    <div className='container'>
      <h2>🧑‍🎤 Add Artist</h2>
      <form onSubmit={handleSubmit}>
        <div className='inputContainer'>
          <label>
            Name
            <input
              value={formData.artistName}
              onChange={handleChange}
              name='artistName'
              type='text'
              className='input'
            />
          </label>
        </div>

        <div className='inputContainer'>
          <label>
            Image
            <input
              value={formData.image}
              onChange={handleChange}
              name='image'
              type='text'
              className='input'
            />
          </label>
        </div>

        <div className='inputContainer'>
          <label>
            Genre
            <input
              value={formData.genre}
              onChange={handleChange}
              name='genre'
              type='text'
              className='input'
            />
          </label>
        </div>

        <button type='submit' className='button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
