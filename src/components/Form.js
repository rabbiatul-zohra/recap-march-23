import { useState } from "react";
import "../styles/form.css";

const Form = ({ handleAddArtist }) => {
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
  };

  return (
    <div className='container'>
      <h2>🧑‍🎤 Add Artist</h2>
      <form onSubmit={handleSubmit}>
        <div className='inputContainer'>
          <label className='label'>
            Name
            <input
              value={formData.artistName}
              onChange={handleChange}
              className='input'
              type='text'
              name='artistName'
            />
          </label>
        </div>

        <div className='inputContainer'>
          <label className='label'>
            Image
            <input
              value={formData.image}
              onChange={handleChange}
              className='input'
              type='text'
              name='image'
            />
          </label>
        </div>

        <div className='inputContainer'>
          <label className='label'>
            Genre
            <input
              value={formData.genre}
              onChange={handleChange}
              className='input'
              type='text'
              name='genre'
            />
          </label>
        </div>
        <button className='button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
