'use client'
import { FormEvent, useState } from 'react';
import Textarea from '../textarea/textarea';
import style from './contact-form.module.css'
import PopUp from '../popUp/popUp';


const ContactForm = () => {

    const [formValid, setFormValid] = useState(false)

    const getDataForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const data = e.target as HTMLFormElement;
    
        const message = {
            name: (data.elements.namedItem('name') as HTMLInputElement).value,
            email: (data.elements.namedItem('email') as HTMLInputElement).value,
            message: (data.elements.namedItem('message') as HTMLInputElement).value,
        };
    
        if (message.email && message.message && message.name) {
            setFormValid(true);
    
            setTimeout(function () {
                // Código dentro de setTimeout
                setFormValid(false); // Esto se ejecutará después de 3000 milisegundos
            }, 3000);
        }
    };


    return (
        <div className={style.contact}>
            <div className={style.contact__form}>
                <form onSubmit={getDataForm} className={style.form}>

                    <h2 className="heading-secondary">
                        Contactame
                    </h2>


                    <div className={style.form__group}>
                        <input name="name" type="text" className={style.form__input} placeholder="Nombre" id="name" required />
                    </div>

                    <div className={style.form__group}>
                        <input name="email" type="email" className={style.form__input} placeholder="Correo Electrónico" id="email" required />
                    </div>

                    <div className={style.form__group}>
                        <Textarea name='message' label='Mensaje' icon={null} />
                    </div>

                    <div className={style.form__group}>
                        <button type='submit' className="btn btn--green">Send &rarr;</button>
                    </div>
                </form>
            </div>
            {formValid ? <PopUp /> : ''}
        </div>


    );
};

export default ContactForm;