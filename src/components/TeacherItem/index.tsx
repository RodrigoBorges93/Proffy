import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/51095310?s=460&u=b0cfc47e88eb8f623f656cf990ce470cde5a7aea&v=4" alt="Rodrigo Borges"/>
                        <div>
                            <strong> Rodrigo Borges </strong>
                            <span> Química </span>
                        </div>
                    </header>

                    <p>
                        Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                    </p>

                    <footer>
                        <p>
                            preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type='button'>
                            <img src={whatsappIcon} alt='Whatsapp'/>
                            Entrar em contato
                        </button>
                    </footer>
            </article>
    )
}

export default TeacherItem;