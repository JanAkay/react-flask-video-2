// ObjectForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function ObjectForm() {

  const [outputVideoPath, setOutputVideoPath] = useState('');
  const history = useHistory();
  const [file, setFile] = useState(null);
  const [videoPath, setVideoPath] = useState('');
  const [gpuSelected, setGpuSelected] = useState(true);
  const [selectedClasses, setSelectedClasses] = useState([]);

  const class_names = {
    0: "person", 1: "bicycle", 2: "car", 3: "motorbike", 4: "aeroplane", 5: "bus", 6: "train", 7: "truck", 8: "boat", 9: "traffic light", 
    10: "fire hydrant", 11: "stop sign", 12: "parking meter", 13: "bench", 14: "bird", 15: "cat", 16: "dog", 17: "horse", 18: "sheep", 19: "cow", 
    20: "elephant", 21: "bear", 22: "zebra", 23: "giraffe", 24: "backpack", 25: "umbrella", 26: "handbag", 27: "tie", 28: "suitcase", 29: "frisbee", 
    30: "skis", 31: "snowboard", 32: "sports ball", 33: "kite", 34: "baseball bat", 35: "baseball glove", 36: "skateboard", 37: "surfboard", 
    38: "tennis racket", 39: "bottle", 40: "wine glass", 41: "cup", 42: "fork", 43: "knife", 44: "spoon", 45: "bowl", 46: "banana", 47: "apple", 
    48: "sandwich", 49: "orange", 50: "broccoli", 51: "carrot", 52: "hot dog", 53: "pizza", 54: "donut", 55: "cake", 56: "chair", 57: "sofa", 
    58: "pottedplant", 59: "bed", 60: "diningtable", 61: "toilet", 62: "tvmonitor", 63: "laptop", 64: "mouse", 65: "remote", 66: "keyboard", 
    67: "cell phone", 68: "microwave", 69: "oven", 70: "toaster", 71: "sink", 72: "refrigerator", 73: "book", 74: "clock", 75: "vase", 
    76: "scissors", 77: "teddy bear", 78: "hair drier", 79: "toothbrush"
};

  const handleVideoPathChange = (event) => {
    setVideoPath(event.target.value);
  };

  const handleGpuChange = (event) => {
    setGpuSelected(event.target.value === '1');
  };

  const handleClassChange = (event) => {
    const value = event.target.value;
    if (selectedClasses.includes(value)) {
      setSelectedClasses(selectedClasses.filter((cls) => cls !== value));
    } else {
      setSelectedClasses([...selectedClasses, value]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      video_path: videoPath,
      detect: 0,
      use_gpu: gpuSelected ? 1 : 0,
      object_classes: selectedClasses // Include selected object classes
    };

    try {
      const response = await axios.post('http://localhost:5000/detect', formData);
      console.log(response.data);
      
      // Update state with the output video path if available
      if (response.data.output_video_path) {
        setOutputVideoPath(response.data.output_video_path);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Object Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Video Path:</label>
          <input type="text" value={videoPath} onChange={handleVideoPathChange} />
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
        <div>
  {Object.keys(class_names).map((classKey) => (
    <div key={classKey}>
      <input
        type="checkbox"
        name="object_classes"
        value={(classKey)}
        checked={selectedClasses.includes(classKey)}
        onChange={handleClassChange}
      />
      <label>{class_names[classKey]}</label>
    </div>
  ))}
</div>
        <button type="submit">Submit</button>
      </form>

      {/* Display output video when available */}
      {outputVideoPath && (
        <div>
          <h2>Output Video</h2>
          <video controls src={outputVideoPath} width="400" height="300" />
        </div>
      )}
    </div>
    
  );
}

export default ObjectForm;
