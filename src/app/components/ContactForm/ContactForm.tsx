import Textarea from '../textarea/textarea';
import style from './contact-form.module.css'


const ContactForm = () => {
    return (
        <div className={style.contact}>
            <div className={style.contact__form}>
                <form action="#" className={style.form}>

                    <h2 className="heading-secondary">
                        Contactame
                    </h2>


                    <div className={style.form__group}>
                        <input type="text" className={style.form__input} placeholder="Nombre" id="name" required />
                    </div>

                    <div className={style.form__group}>
                        <input type="email" className={style.form__input} placeholder="Correo Electrónico" id="email" required />
                    </div>

                    <div className={style.form__group}>
                        <Textarea name='message' label='Mensaje' icon={null} />
                    </div>

                    <div className={style.form__group}>
                        <button className="btn btn--green">Next step &rarr;</button>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default ContactForm;