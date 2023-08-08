import styles from './styles.module.css';
import useModal from '../../Hook/useModal';
import Modal from '../Modal/Modal';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillEnvelopeOpenHeartFill } from 'react-icons/bs';


const Rows = ({id,title,body,userId}) => {
  
   const [open,isOpenModal,isCloseModal] = useModal()
  
  // create a function called "trimmer" to which we pass a string and
  // the amount of characters we want to trim (num);
  const trimmer = (string,num) => string?.length > num? `${string.substring(0,num-1)}...`:string;
   

   const handlesOpen = e =>{
      e.stopPropagation() // To prevent the modal from closing when this window is clicked;
      isOpenModal() // to set the "open" state to true;
   }

  
  return (
    <tr className={styles.container}
     onClick={isCloseModal}
    >
   
      <td className={styles.container_id} >
      {id}
     </td>
     <td className={styles.container_title} >
     <span>{trimmer(title,20)}</span>
     </td>
     <td className={styles.container_body} >
      {trimmer(body,55)}
     </td>

     <button 
      className={styles.container_td_btn}
      onClick={handlesOpen}>
      </button>

   {/* ///// S E C T I O N **** M O D A L ///// */}
     <Modal open={open}>
      <div className={styles.container_div}
       onClick={e=>e.stopPropagation()}>
        <i onClick={isCloseModal} className={styles.container_div_i}><AiOutlineClose/></i>
        <h2>{title}</h2>
        <p>{body}</p>
        <div className={styles.container_div_div}>
        <h4>This post was made by user: {userId}</h4>
        <i className={styles.container_div_div_i}><BsFillEnvelopeOpenHeartFill/></i>
         </div>
      </div>
     </Modal>

    </tr> 
  )
}

export default Rows