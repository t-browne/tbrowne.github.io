import styles from '../styles/button.module.css'

const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, destination: string) => {
    e.preventDefault();
    window.open(destination);
  }
  
interface ButtonProps {
  destination: string;
  content: string;
}

const Button: React.FC<ButtonProps> = ({ destination, content}) => {
  return (
    <>
      <a
        className={styles.button}
        onClick={(e) => handleButtonClick(e, destination)}
        href="#"> {content}
      </a>
    </>
  );
}

export default Button;