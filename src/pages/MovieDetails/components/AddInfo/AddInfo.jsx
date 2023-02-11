import { Link, useLocation } from 'react-router-dom';

import styles from './AddInfo.module.css'

export const AddInfo = () => {
    const location = useLocation();

    const locationFrom = location.state?.from ?? "/"

    return (
        <div className={styles.addInfo}>
            <p>Additional information</p>
            <ul>
                <li><Link to="cast" state={{from: locationFrom}}>Cast</Link></li>
                <li><Link to="reviews" state={{from: locationFrom}}>Reviews</Link></li>
            </ul>
        </div>
    )
};