import styles from './styles.module.css';

const Modal = ({children,open}) => {

  return (
    <div style={{
      display:open?'flex':'none'
      }}
     className={styles.container}
    >
      {children}
    </div>
  )
}

export default Modal;