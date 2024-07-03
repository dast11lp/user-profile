import React from 'react'
import styles from './textarea.module.css'

interface Props {
    name: string;
    label: string;
    icon: string | null
  }

const Textarea: React.FC<Props> = (props) => {
    return (
        <div className={styles.textarea}>
            <textarea className={styles['textarea__textarea-box']} name={props.name} />
        </div>
    )
}

export default Textarea
