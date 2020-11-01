import React from 'react'
import styles from './Button.module.scss'
import { useRouter } from 'next/router'

export default function Button({ text, link=null, type='text'}) {
  const router = useRouter();

  function redirect(){
    router.push(link)
  }

  return (
    <div onClick={link ? redirect : null}>
      <button className={styles.button} type={type}> { text } </button>
    </div>
  )
}
