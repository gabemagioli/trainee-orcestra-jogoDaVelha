import { useNavigate } from 'react-router-dom';
import styles from './jogo.module.css';
import { useState } from 'react';

function Jogo(){//funcao que possui a tela principal -> jogo da velha(tabuleiro)
    
    const navigate = useNavigate();//navegacao entre as paginas do projeto

    const jogadorX:string|null = localStorage.getItem("jogadorX");//variavel que armazena o nome do jogador x, tipo string ou nula caso nao haja valor para preencher
    const jogadorO:string|null = localStorage.getItem("jogadorO");

    const[pontosX, setPontosX] = useState<number>(0);//variavel recebe apenas valores numericos
    const[pontosO, setPontosO] = useState<number>(0);

    const ganhaPonto = (jogador:string):number | string => {//funcao que eh responsavel por incrementar pontos -> recebe 'x' ou 'o' como parametro e a partir disso adiciona os pontos ao jogador certo (funcao funcionando apenas alocar ela quando implementar o jogo da velha)
        if(jogador == 'x' || jogador == 'X'){
            setPontosX((pontosX) => pontosX + 1);
            return pontosX;
        }
        else if(jogador == 'o' || jogador == 'O'){
            console.log("entrou na funcao")
            setPontosO((pontosO) => pontosO + 1);
            return pontosO;
        }
        return "Erro na funcao nao entrou em nenhuma das 2 condicionais - um parametro foi passado errado";//caso nao entrar em nenhuma das condicionais retorna mensagem de erro
    }

    const [jogo, setJogo]: Array<Array<string>> = useState([['', '', ''], ['', '', ''], ['', '', '']])
    const [jogadorAtual, setJogadorAtual]=useState('X')
    const [jogando,setJogando]=useState(true)

    const tabuleiro=(jogo) =>{
        return(
            <div style={jogo}>
                <div className={style.linha}>
                    <div className={styles.coluna} data-pos='00' onCLick="">{jogo[0][0]}</div>
                    <div ClassName={styles.coluna} data-pos='01' onCLick="">{jogo[0][1]}</div>
                    <div ClassName={styles.coluna} data-pos='02' onCLick="">{jogo[0][2]}</div>
                </div>
                <div className={style.linha}>
                    <div ClassName={styles.coluna} data-pos='10' onCLick="">{jogo[1][0]}</div>
                    <div ClassName={styles.coluna} data-pos='11' onCLick="">{jogo[1][1]}</div>
                    <div ClassName={styles.coluna} data-pos='12' onCLick="">{jogo[1][2]}</div>
                </div>
                <div className={style.linha}>
                    <div ClassName={styles.coluna}} data-pos='20' onCLick="">{jogo[2][0]}</div>
                    <div ClassName={styles.coluna} data-pos='21' onCLick="">{jogo[2][1]}</div>
                    <div ClassName={styles.coluna} data-pos='22' onCLick="">{jogo[2][2]}</div>
                </div>
            </div>
        )
    }

    return(
        <>
            <section className={styles.main}>
                <div className={styles.botoes}>
                    <button className={styles.botaoVoltar} onClick={()=> navigate("/")}>Voltar</button>
                </div>

                <h1 className={styles.vezJogador}>Vez do jogador: {jogadorAtual}</h1>

                <div className={styles.placar}>
                    <div className={styles.pontuacao}>
                        <div className={styles.jogador}>
                            <h3>{jogadorX} - X</h3>
                            <p>pontos: {pontosX}</p>
                        </div>
                    </div>

                    <div className={styles.jogo}>
                
                    </div>

                    <div className={styles.pontuacao}>
                        <div className={styles.jogador}>
                            <h3>{jogadorO} - O</h3>
                            <p>pontos: {pontosO}</p>
                        </div>
                    </div>
                </div>
                <button className={styles.botaoReiniciar}>Reiniciar</button>
            </section>
        </>
    )
}

export default Jogo;