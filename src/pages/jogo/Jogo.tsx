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

    const jogoInicial:string[][] = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];    
    const [jogo, setJogo] = useState<string[][]>([['', '', ''], ['', '', ''], ['', '', '']])
    const [simboloAtual, setSimboloAtual]=useState<string>('X')
    const [jogando,setJogando]=useState<boolean>(true)

    const verificaVitoria=()=>{
        //linhas
        let pontos:number =0
        let vitoria: boolean =false
        for(let l=0;l<3;l++){
            pontos=0;
            for(let c=0;c<3;c++){
                if(jogo[l][c]==simboloAtual){
                    pontos++
                }
            }
            if(pontos>=3){
                vitoria=true
                break
            }
        }

        //colunas
        for(let c=0;c<3;c++){
            pontos=0
            for(let l=0;l<3;l++){
                if(jogo[l][c]==simboloAtual){
                    pontos++
                }
            }
            if(pontos>=3){
                vitoria=true
                break
            }
        }

        //diagonais
        pontos=0
        for(let d=0;d<3;d++){
            if(jogo[d][d]){
                pontos++
            }
        }
        if(pontos>=3){
            vitoria=true;
        }   
        pontos=0
        let l:number =0
        for(let c=2;c>=0;c--){
            if(jogo[l][c]==simboloAtual){
                pontos++
            }
            l++
        }
        if(pontos>=3){
            vitoria=true
        }
        return vitoria
    }

    const trocaJogador=()=>{
        simboloAtual=='X'?setSimboloAtual('O'):setSimboloAtual('X')
    }

    const retPos=(e:any)=>{
        const p=e.target.getAttribute('data-pos')
        const pos:number[]=[parseInt(p.substring(0,1)), parseInt(p.substring(1,2))]
        return pos
    }

    const verificaEspacoVazio=(e:any)=>{
        if(jogo[retPos(e)[0]][retPos(e)[1]]==''){
            return true
        }else{
            return false
        }
    }
   

    const joga = (e:any) => {
        if(jogando){
            if(verificaEspacoVazio(e)){
                jogo[retPos(e)[0]][retPos(e)[1]] = simboloAtual;
                trocaJogador();
                if(verificaVitoria()){
                    trocaJogador();
                    alert("Jogador" + simboloAtual + "venceu");
                    setJogando(false);
                }
                else{
                    alert("Esse espaco ja esta ocupado, escolha uma posicao vazia");
                }
            }
        }
    }

    const reiniciarJogo = () => {
        setJogando(true);
        setJogo(jogoInicial);
        setSimboloAtual("x");
    }

    return(
        <>
            <section className={styles.main}>
                <div className={styles.botoes}>
                    <button className={styles.botaoVoltar} onClick={()=> navigate("/")}>Voltar</button>
                </div>

                <h1 className={styles.vezJogador}>Vez do jogador: {simboloAtual}</h1>

                <div className={styles.placar}>
                    <div className={styles.pontuacao}>
                        <div className={styles.jogador}>
                            <h3>{jogadorX} - X</h3>
                            <p>pontos: {pontosX}</p>
                        </div>
                    </div>

                    <div className={styles.jogo}>
                        <div className={styles.tabuLinha}>
                            <div className={styles.casa} data-pos='00' onClick="">{jogo[0][0]}</div>
                            <div className={styles.casa} data-pos='01' onClick="">{jogo[0][1]}</div>
                            <div className={styles.casa} data-pos='02' onClick="">{jogo[0][2]}</div>
                        </div>
                        <div className={styles.tabuLinha}>
                            <div className={styles.casa} data-pos='10' onClick="">{jogo[1][0]}</div>
                            <div className={styles.casa} data-pos='11' onClick="">{jogo[1][1]}</div>
                            <div className={styles.casa} data-pos='12' onClick="">{jogo[1][2]}</div>
                        </div>
                        <div className={styles.tabuLinha}>
                            <div className={styles.casa} data-pos='20' onClick="">{jogo[2][0]}</div>
                            <div className={styles.casa} data-pos='21' onClick="">{jogo[2][1]}</div>
                            <div className={styles.casa} data-pos='22' onClick="">{jogo[2][2]}</div>
                        </div>
                    </div>

                    <div className={styles.pontuacao}>
                        <div className={styles.jogador}>
                            <h3>{jogadorO} - O</h3>
                            <p>pontos: {pontosO}</p>
                        </div>
                    </div>
                </div>
                <button className={styles.botaoReiniciar} onClick={() => reiniciarJogo()}>Reiniciar</button>
            </section>
        </>
    )
}

export default Jogo;