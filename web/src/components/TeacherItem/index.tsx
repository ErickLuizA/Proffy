import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/60409749?s=460&u=8e75580a6a89150c530a77d987f13227e06be2e4&v=4" alt="Erick Luiz"/>
                <div>
                    <strong>Erick Luiz</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Eu vou dar umas aulas ai
                <br/><br/>
                Manjo leras das matemática da vida
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 990,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem