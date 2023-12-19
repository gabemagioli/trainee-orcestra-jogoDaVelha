import styles from './jogo.module.css';

function Jogo(){
    
    return(
        <>
<<<<<<< HEAD
            <div className={styles.main}>
                <div className={styles.botoes}>
                    <Botao texto={"voltar"}/>
                    <Botao texto={"reiniciar"}/>
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
=======
            <div className={styles.tabuleiro}>
>>>>>>> 24da14761fcc4297a812d8efbfcd3f3b9505c6de
            </div>
        </>
    )
}

export default Jogo;