import React, {useRef, useState} from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imageUploader, name, onFileChange}) => {
    
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const onChange =async e=> {
        setLoading(true);
        console.log(e.target.files[0]);
        const uploaded = await imageUploader.upload(e.target.files[0]);
        setLoading(false);
        console.log(uploaded);
        onFileChange({
            name : uploaded.original_filename,
            url: uploaded.url
        })
    }

    const onButtonClick=(e)=>{
        e.preventDefault();
        inputRef.current.click();
    }

    return <div className={styles.container}>
        <input 
        ref={inputRef} 
        className={styles.input} 
        type="file" accept="image/*" 
        name="file" 
        onChange={onChange}
        />
        {!loading && (
        <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>
            {name || "No file"}
        </button>
        )}  
        {loading && <div className={styles.loading}></div>}
    </div>
}
        
export default ImageFileInput;