import { useState } from 'react'
import styles from './paginaInicial.module.css';
import { useNavigate } from "react-router-dom";

export const PaginaInicial:React.FC = () => {
    const[jogadorX, setJogadorX] = useState("");
    const[jogadorO, setJogadorO]= useState("");

    const recebeNomeX = (e:any):string => {//funcao que recebe o nome do jogador X
        setJogadorX(e.target.value);
        console.log(e.target.value);
        return e.target.value;
      };

    const recebeNomeO = (e:any):string => {//funcao que recebe o nome do jogador O
        setJogadorO(e.target.value);
        console.log(e.target.value);
        return e.target.value;
    }

    const navigate = useNavigate();

  return (
    <>
        <section className={styles.paginaInicio}>
            <div className={styles.text}>
            <div className={styles.bemVindo}>Bem-vindo ao jogo da velha da Engrenóvia!</div>
                <div className={styles.nomes}>
                    <div className={styles.infoJogador}>
                        <label htmlFor="jogadorX" className={styles.labelNomes}>Nome do jogador X</label>
                        <input id={styles.jogadorX} type="text" placeholder="nome do jogador X" value={jogadorX} onChange={(e) => recebeNomeX(e)}/>
                    </div>
                    <div className={styles.infoJogador}>
                        <label htmlFor="jogadorO" className={styles.labelNomes}>Nome do jogador O</label>
                        <input id={styles.jogadorO} type="text" placeholder="nome do jogador O" value={jogadorO} onChange={(e) => recebeNomeO(e)}/>
                    </div>
                    <button className={styles.prosseguirBotao} onClick={() => navigate("/jogo")}>Prosseguir</button>
                </div>
            </div>
        </section>
    </>
  )
}
