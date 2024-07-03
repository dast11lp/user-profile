import React from 'react'
import styles from './input.module.css'


interface Props {
    name: string;
    label: string;
    type: string;
    icon: string | null
  }

const Input: React.FC<Props> = (props) => {
    return (
        <div className={styles.input}>
            <input className={styles['input__input-box']} name={props.name} type={props.type} />
            <label className={styles.input__label}>{props.label}</label>
            <div className={styles.icon} /*onClick={watchPassword}*/>
                {/* {
                    icon ?
                        <FontAwesomeIcon icon={icon} /> :
                        ''
                } */}
            </div>
            {/* {errors[name as Path<T>] && <span className="input__msg input__msg--error">{errors?.[name]?.message?.toString()}</span>} */}
        </div>
    )
}

export default Input
