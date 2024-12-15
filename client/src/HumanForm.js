import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function HumanForm() {
  const history = useHistory();
  const [videoPath, setVideoPath] = useState(''); // State to store video path
  const [color, setColor] = useState('blue'); // Default color value
  const [gpuSelected, setGpuSelected] = useState(true); // Default to GPU

  const handleVideoPathChange = (event) => {
    setVideoPath(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleGpuChange = (event) => {
    setGpuSelected(event.target.value === '1');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = {
      video_path: videoPath, // Include video path
      detect: 1, // Assuming detect option for human is 1
      color: color, // Include selected color
      use_gpu: gpuSelected ? 1 : 0 // Include selected CPU/GPU option
    };

    try {
      const response = await axios.post('http://localhost:5000/detect', formData);
      console.log(response.data);
      // Handle response data as needed
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Human Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Video Path:</label>
          <input type="text" value={videoPath} onChange={handleVideoPathChange} />
        </div>
        <div>
          <label>
            <input type="radio" name="color" value="blue" checked={color === 'blue'} onChange={handleColorChange} />
            Blue
          </label>
          <label>
            <input type="radio" name="color" value="black" checked={color === 'black'} onChange={handleColorChange} />
            Black
          </label>
          <label>
            <input type="radio" name="color" value="red" checked={color === 'red'} onChange={handleColorChange} />
            Red
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="use_gpu" value="1" checked={gpuSelected} onChange={handleGpuChange} />
            GPU
          </label>
          <label>
            <input type="radio" name="use_gpu" value="0" checked={!gpuSelected} onChange={handleGpuChange} />
            CPU
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HumanForm;
