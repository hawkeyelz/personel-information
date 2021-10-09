import styles from './AddButton.css';

const AddButton=(props) => {
    const handleCLick = () => {
        props.onCLick();
    }
    return (
        <button className={styles.ddButton} onClick={handleCLick}>Add New Personal</button>       
    )
}

export default AddButton
