import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';


const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'jimin',
            theme: 'light',
            title: 'Frontend Engineer',
            email: 'dlwlals0406@naver.com',
            message: 'go for it',
            fileName: 'jimin',
            fileURL: null
        },
        {
            id: '2',
            name: 'min',
            theme: 'dark',
            title: 'Backend Engineer',
            email: 'min0970@naver.com',
            message: 'go for it',
            fileName: 'min',
            fileURL: 'min.png'
        },
        {
            id: '3',
            name: 'minji',
            theme: 'colorful',
            title: 'Frontend Engineer',
            email: 'dlwlals0406@naver.com',
            message: 'go for it',
            fileName: 'minji',
            fileURL: null
        },
    ])
    const history = useHistory();
    const onLogout =()=> {
        authService.logout();
    }

    useEffect(()=> {
        authService.onAuthChange(user => {
            if(!user){
                history.push('/');
            }
        });
    });

       return(
            <section className={styles.maker}> 
                <Header onLogout={onLogout}/>
                <div className={styles.container}>
                    <Editor cards={cards}/>
                    <Preview cards={cards}/>
                </div>
                <Footer/>
            </section>
       );
};

export default Maker;