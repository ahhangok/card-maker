import React from 'react';
import ImageFileInput from '../../image_file_input/image_file_input';
import Button from '../button/button';
import styles from './card.editor.form.module.css';


const CardEditorForm = ({card}) => {
    const {name, title, email, message, theme, fileName, fileURL} = card;
    const onSubmit = () => {};
            return(
                <form className={styles.form}>
                    <input className={styles.input} type="text" name="name" value={name}/>
                    <input className={styles.input}  type="text" name="name" value={name}/>
                    <select className={styles.select}  name="theme" value={theme}>
                        <option value="light">light</option>
                        <option value="Dark">Dark</option>
                        <option value="colorful">Colorful</option>
                    </select>
                    <input className={styles.input}  type="text" name="name" value={title}/>
                    <textarea className={styles.textarea}  name="message" value={message} />
                    <div className={styles.fileInput}>
                        <div className={styles.image}><ImageFileInput /></div>
                        <div className={styles.delete}><Button name="Delete" onClick={onSubmit} /></div>
                    </div>
                </form>
            )
            };

export default CardEditorForm;