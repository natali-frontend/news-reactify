import styles from "./styles.module.css"

const Pagination = ({
    totalPages,
    handleNextPage,
    handlePreviousPage,
    handlePageClick,
    currentPage
}) => {
    return (
       <div className={styles.pagination}>
           <button
               className={styles.arrow}
               onClick={handlePreviousPage}
               disabled={currentPage <= 1}
           >
               {'<'}
           </button>

           <div className={styles.list}>
               {[...Array(totalPages)].map((_, index) => {
                   return (
                       <button
                           onClick={() => handlePageClick(index + 1)}
                           className={styles.pageNumber}
                           key={index}
                           disabled={index + 1 === currentPage}
                       >
                           {index + 1}
                       </button>
                   )
               })}
           </div>

           <button
               className={styles.arrow}
               onClick={handleNextPage}
               disabled={currentPage >= totalPages}
           >
               {'>'}
           </button>
       </div>
    )
}

export default Pagination;