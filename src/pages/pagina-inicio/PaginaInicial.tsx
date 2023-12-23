import { useState } from 'react'
import styles from './paginaInicial.module.css';
import { useNavigate } from "react-router-dom";

export const PaginaInicial:React.FC = () => {
    //variavel que recebe apenas valor em string(texto)
    const[jogadorX, setJogadorX] = useState<string>("");
    const[jogadorO, setJogadorO]= useState<string>("");

    //funcao que recebe o nome do jogador X
    const recebeNomeX = (e:any): void => {
        const novoValor = e.target.value;
        setJogadorX(novoValor); //encontra o valor do input
        localStorage.setItem("jogadorX", novoValor); //salva localmente as informacoes na maquina
      }

    //funcao que recebe o nome do jogador O
    const recebeNomeO = (e:any): void => {
        const novoValor = e.target.value;
        setJogadorO(novoValor);
        localStorage.setItem("jogadorO", novoValor); //salva localmente as informacoes na maquina
    }

    const navigate = useNavigate();

  return (
    <>
        <section className={styles.paginaInicio}>
            <div className={styles.form}>
                <h1 className={styles.bemVindo}>Bem-vindo ao jogo da velha da Engrenóvia!</h1>
                <form className={styles.nomes}>
                    <div className={styles.infoJogador}>
                        <label htmlFor="jogadorX" className={styles.labelNomes}>Nome do jogador X</label>
                        <input id={styles.jogadorX} type="text" placeholder="nome do jogador X" value={jogadorX}onChange={(e) => recebeNomeX(e)}/>
                    </div>
                    <div className={styles.infoJogador}>
                        <label htmlFor="jogadorO" className={styles.labelNomes}>Nome do jogador O</label>
                        <input id={styles.jogadorO} type="text" placeholder="nome do jogador O" value={jogadorO} required onChange={(e) => recebeNomeO(e)}/>
                    </div>
                    <button className={styles.prosseguirBotao} onClick={() => navigate("/jogo")}>Prosseguir</button>
                </form>
            </div>
        </section>
    </>
  );
}
