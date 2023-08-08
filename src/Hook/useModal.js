import { useState} from 'react'

const useModal = () => {

  const [open, setOpen] = useState(false)
  
 // To set the open state to true;
 const isOpenModal = ()=> setOpen(true);
 // To set the open state to false;
 const isCloseModal = ()=> setOpen(false);

  return [ open, isOpenModal, isCloseModal ];

}

export default useModal;