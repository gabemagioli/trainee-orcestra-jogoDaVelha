import { useState } from 'react'
import styles from './paginaInicial.module.css';
import Botao from '../../components/botao/Botao';

export const PaginaInicial = () => {
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

  return (
    <>
        <section className={styles.paginaInicio}>
            <div className={styles.nomes}>
                <div className={styles.infoJogador}>
                    <label htmlFor="jogadorX" className={styles.labelNomes}>Nome do jogador X</label>
                    <input
                    id={styles.jogadorX} type="text" placeholder="nome do jogador X" value={jogadorX} onChange={(e) => recebeNomeX(e)}
                    />
                </div>
                <div className={styles.infoJogador}>
                    <label htmlFor="jogadorO" className={styles.labelNomes}>Nome do jogador O</label>
                    <input
                        id={styles.jogadorO} type="text" placeholder="nome do jogador O" value={jogadorO} onChange={(e) => recebeNomeO(e)}
                    />
                </div>
                <Botao texto={"Prosseguir"}/> {/*botao que ira redirecionar para a pagina do jogo */}
            </div>
        </section>
    </>
  )
}
