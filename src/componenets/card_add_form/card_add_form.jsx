import React, {useRef, useState} from 'react';
import Button from '../button/button';
import styles from './card.add.form.module.css';


const CardAddForm = ({FileInput, onAdd}) => {
    const formRef = useRef(); 
    const nameRef = useRef();
    const emailRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const messageRef = useRef();
    const [file,setFile] =useState({fileName: null, fileURL: null});

    const onFileChange = file => {
        console.log(file);
        setFile({
            fileName: file.name,
            fileURL: file.url,
        })
    }
   
    const onSubmit = (e) => {
        e.preventDefault();
        const card = {
            id: Date.now(), //uuid
            name: nameRef.current.value || '',
            email: emailRef.current.value || '',
            theme: themeRef.current.value,
            title: titleRef.current.value || '',
            message: messageRef.current.value || '',
            fileName: file.fileName || '',
            fileURL: file.fileURL || '',
        };
        formRef.current.reset();
        setFile({fileName: null, fileURL: null});
        onAdd(card);
    };
            return(
                <form ref={formRef} className={styles.form}>
                    <input
                    ref={nameRef}
                    className={styles.input} type="text" name="name" placeholder="name"/>
                    <input
                    ref={emailRef}
                    className={styles.input}  type="text" name="email" placeholder="email"/>
                    <select
                    ref={themeRef}
                    className={styles.select}  name="theme" placeholder="theme">
                        <option placeholder="light">light</option>
                        <option placeholder="dark">dark</option>
                        <option placeholder="colorful">colorful</option>
                    </select>
                    <input
                    ref={titleRef}
                    className={styles.input}  type="text" name="title" placeholder="title"/>
                    <textarea
                    ref={messageRef}
                    className={styles.textarea}  name="message" placeholder="message" />
                    <div className={styles.fileInput}>
                        <div className={styles.image}><FileInput name={file.fileName} onFileChange={onFileChange} /></div>
                        <div className={styles.delete}><Button name="Add" onClick={onSubmit} /></div>
                    </div>
                </form>
            )
            };

export default CardAddForm;