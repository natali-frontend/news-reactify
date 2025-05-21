import styles from "./styles.module.css"
import {formatTimeAgo} from "../../helpers/formatTimeAgo.js";

const NewsItem = ({item}) => {
    return (
        <li className={styles.item}>
            <div className={styles.wrapper}>
                {item.image &&  <img src={item.image} alt="news" className={styles.image}/>}
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.extra}>
                    {formatTimeAgo(item.published)} by {item.author}
                </p>
            </div>
        </li>
    )
}

export default NewsItem;