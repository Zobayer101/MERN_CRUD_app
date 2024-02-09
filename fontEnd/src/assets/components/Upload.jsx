
import  { useState } from 'react';

function Upload() {


  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = event => {
    const file = event.target.files[0];

    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (selectedFile) {
        alert(JSON.stringify(selectedFile))
      // Perform the file upload here (e.g., using fetch or Axios)
      // Send selectedFile to the server
      console.log('Uploading file:', selectedFile);
    } else {
      console.log('No file selected');
    }


  };



  return (
    <div>
      <h1>Image Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {previewUrl && (
        <div>
          <h2>Preview:</h2>
          <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
      )}
    </div>
  );
}

export default Upload;
