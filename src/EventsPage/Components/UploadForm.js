import React, { useState } from 'react';
import ProgressBar from './ProgressBar';


const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];


    const changeHandler = (e) => {
        // selected is used to target each file that's been 
        // uploaded and pushed into the arrey
        let selected = e.target.files[0];


        // to check if the type of file is correct, if not then return else
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            window.alert('Please select an image file (png or jpeg)');
        }
    };

    return (
        <form className="forms">
            <label className="labels">
                <input className="inputs" type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="outputs">
                {error && <div className="error">{error}</div>}
                {file &&
                    
                    <div>{file.name}</div>
                }
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}
export default UploadForm;