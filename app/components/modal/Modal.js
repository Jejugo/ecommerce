import styles from './Modal.module.scss'

export default function Modal({ children }){
  console.log(styles)
  return (
    <section className={styles.modal}>
      { children }
    </section>
  )
}