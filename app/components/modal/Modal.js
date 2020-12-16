import styles from './Modal.module.scss'

export default function Modal({ children }){
  return (
    <section className={styles.modal}>
      { children }
    </section>
  )
}