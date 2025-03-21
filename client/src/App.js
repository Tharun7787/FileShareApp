import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './service/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        try {
          const data = new FormData();
          data.append("name", file.name);
          data.append("file", file);

          const response = await uploadFile(data);

          if (response && response.path) {
            setResult(response.path);
          } else {
            console.error('Upload response does not contain path:', response);
          }
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      }
    }
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      <img src={url} className='img' alt="Decorative" />
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>
        
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        {result && <a href={result} target='_blank' rel="noopener noreferrer">{result}</a>}
      </div>
    </div>
  );
}

export default App;

