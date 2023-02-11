import { Link } from 'react-router-dom';

import styles from './AddInfo.module.css'

export const AddInfo = () => (
    <div className={styles.addInfo}>
        <p>Additional information</p>
        <ul>
            <li><Link to="cast">Cast</Link></li>
            <li><Link to="reviews">Reviews</Link></li>
        </ul>
    </div>
);