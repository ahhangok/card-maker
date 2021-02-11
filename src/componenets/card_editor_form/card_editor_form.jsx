import React,{useRef} from 'react';
import ImageFileInput from '../../image_file_input/image_file_input';
import Button from '../button/button';
import styles from './card.editor.form.module.css';


const CardEditorForm = ({card, updateCard, deleteCard}) => {
    const formRef = useRef(); 
    const nameRef = useRef();
    const emailRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const messageRef = useRef();

    const {name, title, email, message, theme, fileName, fileURL} = card;

    const onChange=(e)=> {
        if(e.currentTarget == null){
            return;
        }
        e.preventDefault();
        updateCard({
            ...card, //기존의 카드의 key와 value를 그대로 쓰면서
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }

    const onSubmit = () => {
        deleteCard(card);
    };
            return(
                <form className={styles.form}>
                    <input className={styles.input} type="text" name="name" ref={nameRef} onChange={onChange} value={name}/>
                    <input className={styles.input}  type="text" name="email" ref={emailRef} onChange={onChange} value={email}/>
                    <select className={styles.select}  name="theme" ref={themeRef} onChange={onChange} value={theme}>
                        <option value="light">light</option>
                        <option value="dark">dark</option>
                        <option value="colorful">colorful</option>
                    </select>
                    <input className={styles.input}  type="text" name="title" ref={titleRef} onChange={onChange} value={title}/>
                    <textarea className={styles.textarea}  name="message" ref={messageRef} onChange={onChange} value={message} />
                    <div className={styles.fileInput}>
                        <div className={styles.image}><ImageFileInput /></div>
                        <div className={styles.delete}><Button name="Delete" onClick={onSubmit} /></div>
                    </div>
                </form>
            )
            };

export default CardEditorForm;