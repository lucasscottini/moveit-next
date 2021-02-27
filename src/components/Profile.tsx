import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const {level} = useContext(ChallengeContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGujmslImf2wg/profile-displayphoto-shrink_100_100/0/1572217902830?e=1619654400&v=beta&t=5mmtbNths-VpOdtEwT-1O5ymPUA_9ssBizE4-_Sys84" alt="Lucas Scottini" />
            <div>
                <strong>Lucas Scottini</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}