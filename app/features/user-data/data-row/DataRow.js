import React, { useContext } from 'react'
import styles from './DataRow.module.scss'
import { warningContext } from '../UserDataComponent' 
import Button from '../../../components/button/Button'

export default function DataRow({ userData, changeData }) {

  const { setWarningMessage, setToggleWarning } = useContext(warningContext)

  const handleChange = (e) => {
    e.preventDefault()
    e.persist()
    changeData(prevState => (prevState.map(item => {
      if(item.title === e.target.name){ 
        return {
          ...item,
          value: e.target.value
        }
      }
      return item
    })))
    setToggleWarning(true)
    setWarningMessage({ message: 'Lembre-se de salvar seus dados antes de sair!', success: false })
  }

  return (
    <ul className={styles.dataCategory__list}>
      {userData.map((item, index) => (
        <div className={styles.dataCategory__list_row} key={index}>
          <div
            className={`${styles.dataCategory__list_rowLeft} ${styles.flex}`}
          >
            <li
              className={`${styles.dataCategory__list_row_item} ${styles.dataCategory__list_row_name}`}
            >
              <p className={styles.dataCategory__list_row_item_text}>
                {item.title}
              </p>
            </li>
            <li
              className={`${styles.dataCategory__list_row_item} ${styles.dataCategory__list_row_value}`}
            >
              {
                item.status !== 'empty' ? ( 
                  <input
                  className={styles.dataCategory__list_row_item_value}
                  type="text"
                  name={item.title}
                  value={item.value || ''}
                  onChange={handleChange}
                  disabled={item.disabled || false}
                ></input>
                ) : (
                  <Button text={'Editar'} link={'/dashboard/user-data/card-edit'}></Button>
                )
              }
            </li>
          </div>
        </div>
      ))}
    </ul>
  )
}
