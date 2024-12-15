import React, { useState } from 'react';
import FileUploader from './FileUploader';
import SubmitForm from './SubmitForm';
import './index.css';

const HumanPage = () => {
    const [filename, setFilename] = useState('');
    const [formCValue, setFormCValue] = useState('');
    const [formDValue, setFormDValue] = useState('');

    const handleFileUpload = (file) => {
        // Handle file upload here, e.g., send it to the server
        setFilename(file.name);
    };

    const handleFormCSubmit = (value) => {
        setFormCValue(value);
    };

    const handleFormDSubmit = (value) => {
        setFormDValue(value);
    };

    return (
        <div>
            <h1>Human</h1>
            <FileUploader onFileUpload={handleFileUpload} />
            <SubmitForm formName="Form C" onSubmit={handleFormCSubmit}>
                {/* Radio buttons for Form C */}
                {/* Make sure these are correctly implemented */}
            </SubmitForm>
            <SubmitForm formName="Form D" onSubmit={handleFormDSubmit}>
                {/* Radio buttons for Form D */}
                {/* Make sure these are correctly implemented */}
            </SubmitForm>
            {/* Display filename and form values for testing */}
            <p>Filename: {filename}</p>
            <p>Form C Value: {formCValue}</p>
            <p>Form D Value: {formDValue}</p>
        </div>
    );
};

export default HumanPage;
