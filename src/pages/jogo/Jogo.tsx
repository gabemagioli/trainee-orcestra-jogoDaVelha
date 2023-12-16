import Botao from "../../components/botao/Botao";
import styles from './jogo.module.css';

function Jogo(){
    
    return(
        <>
            <div className={styles.tabuleiro}>
                <Botao texto={"o"}/>
            </div>
        </>
    )
}

export default Jogo;