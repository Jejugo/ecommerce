import React from 'react'
import styles from './Button.module.scss'
import { useRouter } from 'next/router'

export default function Button({ text, link=null}) {
  const router = useRouter();

  function redirect(){
    router.push(link)
  }

  return (
    <div onClick={redirect}>
      <button className={styles.button}> { text } </button>
    </div>
  )
}
