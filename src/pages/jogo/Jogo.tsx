import styles from './jogo.module.css';

function Jogo(){
    
    return(
        <>
            <div className={styles.main}>
                <div className={styles.botoes}>
                    <button className={styles.botaoJogo}>Voltar</button>
                    <button className={styles.botaoJogo}>Reiniciar</button>
                </div>

                <div className={styles.placar}>
                    <div className={styles.pontuacao}>
                        <div className={styles.jogador}>X</div>
                    </div>

                    <div className={styles.jogo}>

                    </div>

                    <div className={styles.pontuacao}>
                    <div className={styles.jogador}>Y</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jogo;