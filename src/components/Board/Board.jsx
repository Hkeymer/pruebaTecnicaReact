import useGetPosts from '../../Hook/useGetPosts';
import useCurrentPages from '../../Hook/useCurrentPages';
import styles from './styles.module.css';
import Loading from '../Loading/Loading';
import Rows from '../Rows/Rows.JSX';


const Board = () => {

  const [posts, isLoading] = useGetPosts();
  const [page, nextPage, prevPage] = useCurrentPages(posts)


  if(isLoading){
    // If "isLoading" is true return Loading;
    return <Loading/>
  }

  return (
    <div className={styles.container}>
  
    <table className={styles.container_table}>

       {/* SECTION THEAD */}
       <thead className={styles.container_table_thead}>
       <th className={styles.container_table_thead_id}>Id</th>
       <th className={styles.container_table_thead_title}>Title</th>
       <th className={styles.container_table_thead_posts}>Posts</th>
       </thead>

       {/* SECTION TBODY */}
       <tbody className={styles.container_table_tbody}>
       {
       page.map(({id,title,body,userId})=>(
             <Rows 
             key={id}
             id={id}
             title={title}
             body={body}
             userId={userId}
             />
       ))
       }
       </tbody>
    </table>

    
     {/* SECTION DIV */}
     <div className={styles.container_div}>
    <button className={styles.container_div_btn} onClick={prevPage}>Previous</button>
    <button className={styles.container_div_btn} 
    style={{backgroundColor:'#068FFF',color:'#fff'}} onClick={nextPage}>Next</button>
   </div>

   </div>
  )
}

export default Board;