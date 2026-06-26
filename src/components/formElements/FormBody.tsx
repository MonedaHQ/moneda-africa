import Button from '../Button';
import styles from './styles/formbody.module.css';

function FormBody({
  children,
  disabled = false,
  className = '',
  fieldsClassName = '',
  buttonContainerClassName = '',
}) {
  return (
    <div className={`${styles.formBody} ${className}`}>
      <div className={`${styles.formFields} ${fieldsClassName}`}>{children}</div>
      <div className={`${styles.buttonContainer} ${buttonContainerClassName}`}>
        <Button variant="submit" type="submit" disabled={disabled}>
          {disabled ? 'Loading...' : 'Submit'}
        </Button>
      </div>
    </div>
  );
}

export default FormBody;
