import { ButtonProps } from '../types/types';
import styles from '../styles/button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, destination: string) => {
    e.preventDefault();
    window.open(destination);
  }
  
const Button: React.FC<ButtonProps> = ({ destination, content, icon}) => {
  return (
    <>
      <a
        className={styles.button}
        onClick={(e) => handleButtonClick(e, destination)}
        href="#">
          <div className={styles.iconBox}>
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className={styles.buttonText}>
            {content}
          </div>
      </a>
    </>
  );
}

export default Button;