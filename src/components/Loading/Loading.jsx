import React from 'react'
import {VscLoading} from 'react-icons/vsc'
import styles from './styles.module.css'


const Loading = () => {
  return (
    <div className={styles.container} >
      <i>
     <VscLoading 
     className={styles.spinn}
     fontSize={'3.5rem'}
     color='#068FFF'
     />
    </i>
    </div>
  )
}

export default Loading