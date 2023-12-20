import styles from './jogo.module.css';

function Jogo(){
    
    return(
        <>
            <section className={styles.main}>
                <div className={styles.botoes}>
                    <button className={styles.botaoJogo}>Voltar</button>
                    <button className={styles.botaoJogo}>Reiniciar</button>
                </div>

                <div className={styles.placar}>
                    <div className={styles.pontuacao}>
                        <div className={styles.jogador}>
                            <p>X</p>
                        </div>
                    </div>

                    <div className={styles.jogo}>
                        <p>o</p>
                    </div>

                    <div className={styles.pontuacao}>
                        <div className={styles.jogador}>
                            <p>O</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Jogo;