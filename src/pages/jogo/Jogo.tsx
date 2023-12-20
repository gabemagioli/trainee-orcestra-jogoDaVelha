import { useNavigate } from 'react-router-dom';
import styles from './jogo.module.css';

function Jogo(){
    
    const navigate = useNavigate();

    return(
        <>
            <section className={styles.main}>
                <div className={styles.botoes}>
                    <button className={styles.botaoVoltar} onClick={()=> navigate("/")}>Voltar</button>
                </div>

                <div className={styles.placar}>
                    <div className={styles.pontuacao}>
                        <div className={styles.jogador}>
                            <p>X</p>
                        </div>
                    </div>

                    <div className={styles.jogo}>
                
                    </div>

                    <div className={styles.pontuacao}>
                        <div className={styles.jogador}>
                            <p>O</p>
                        </div>
                    </div>
                </div>
                <button className={styles.botaoReiniciar}>Reiniciar</button>
            </section>
        </>
    )
}

export default Jogo;