import React, { useState } from 'react';
import './All.css';

const FileUpload = ({ onChange, formData }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        // Allowed file types
        const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;

        if (selectedFile) {
            // Check the file extension
            if (!allowedExtensions.exec(selectedFile.name)) {
                alert('Only PDF, DOC, and DOCX files are allowed!');
                event.target.value = '';
                setFile(null);
                return;
            }


            setFile(selectedFile);
            onChange(selectedFile);
        }
    };

    return (
        <div className="mb-3" style={{ marginLeft: '1.5rem' }}>
            <label>Upload Resume</label>
            <div className="custom-file-upload">
                <label htmlFor="file-upload" className="file-upload-label btn ">
                    Choose File
                </label>
                <input
                    id="file-upload"
                    type="file"
                    defaultValue={formData?.resume}
                    className="file-input"
                    onChange={handleFileChange}

                />
                <span className="form-control py-2" style={{ width: '90%' }}>{formData?.resume ? formData?.resume?.name : (file?.name ?? "No File Choosen")}</span>
            </div>
        </div>
    );
};

export default FileUpload;
