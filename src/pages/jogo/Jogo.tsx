import { useNavigate } from 'react-router-dom';
import styles from './jogo.module.css';

function Jogo(){//funcao que possui a tela principal -> jogo da velha(tabuleiro)
    
    const navigate = useNavigate();//navegacao entre as paginas do projeto

    const jogadorX:string|null = localStorage.getItem("jogadorX");//variavel que armazena o nome do jogador x, tipo string ou nula caso nao haja valor para preencher
    const jogadorO:string|null = localStorage.getItem("jogadorO");

    return(
        <>
            <section className={styles.main}>
                <div className={styles.botoes}>
                    <button className={styles.botaoVoltar} onClick={()=> navigate("/")}>Voltar</button>
                </div>

                <div className={styles.placar}>
                    <div className={styles.pontuacao}>
                        <div className={styles.jogador}>
                            <p>{jogadorX} - X</p>
                        </div>
                    </div>

                    <div className={styles.jogo}>
                
                    </div>

                    <div className={styles.pontuacao}>
                        <div className={styles.jogador}>
                            <p>{jogadorO} - O</p>
                        </div>
                    </div>
                </div>
                <button className={styles.botaoReiniciar}>Reiniciar</button>
            </section>
        </>
    )
}

export default Jogo;