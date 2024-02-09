import  { useState } from 'react';
import axios from 'axios';

function UP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    file: null
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = event => {
    const { name, value, files } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('file', formData.file);
     console.log(formDataToSend)
      const response = await axios.post('http://localhost:3300/route/api/save', formDataToSend);
      setResponse(response.data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          File:
          <input type="file" name="file" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && <div>Response: {response}</div>}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
}

export default UP;

