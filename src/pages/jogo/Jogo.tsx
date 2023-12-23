import { useNavigate } from 'react-router-dom';
import styles from './jogo.module.css';
import { useState } from 'react';

//funcao que possui a tela principal -> jogo da velha(tabuleiro)
const Jogo: React.FC = () => { 
    
  //navegacao entre as paginas do projeto
    const navigate = useNavigate(); 

    //variavel que armazena o nome do jogador x, tipo string ou nula caso nao haja valor para preencher
    const jogadorX:string|null = localStorage.getItem("jogadorX");
    const jogadorO:string|null = localStorage.getItem("jogadorO");

    //variavel recebe apenas valores numericos
    const[pontosX, setPontosX] = useState<number>(0);
    const[pontosO, setPontosO] = useState<number>(0);

    //funcao que é responsavel por incrementar pontos -> recebe 'x' ou 'o' como parametro e a partir disso adiciona os pontos ao jogador certo (funcao funcionando apenas alocar ela quando implementar o jogo da velha)
    const ganhaPonto = (jogador: string): number | string => {
      if (jogador === 'x' || jogador === 'X') {
          setPontosX((pontosX) => pontosX + 1);
          localStorage.setItem("pontosX", (pontosX + 1).toString());
          return pontosX + 1;
      } else if (jogador === 'o' || jogador === 'O') {
          setPontosO((pontosO) => pontosO + 1);
          localStorage.setItem("pontosO", (pontosO + 1).toString());
          return pontosO + 1;
      }
      return "Erro na função: nenhum dos casos condicionais foi satisfeito - um parâmetro foi passado de forma incorreta";
  };
  

    const jogoInicial:string[][] = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];    
    const [jogo, setJogo] = useState<string[][]>([[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']])
    const [simboloAtual, setSimboloAtual]=useState<string>('X')
    const [jogando,setJogando]=useState<boolean>(true)

    //funcao que retorna um booleano true caso haja um vencedor ou false cajo ainda nao tenha vencedor
    const verificaVitoria = ():boolean => {

        // Linhas
        for (let l = 0; l < 3; l++) {
          let pontos = 0;
          for (let c = 0; c < 3; c++) {
            if (jogo[l][c] === simboloAtual) {
              pontos++;
            }
          }
          if (pontos >= 3) {
            return true;
          }
        }
      
        // Colunas
        for (let c = 0; c < 3; c++) {
          let pontos:number = 0;
          for (let l = 0; l < 3; l++) {
            if (jogo[l][c] === simboloAtual) {
              pontos++;
            }
          }
          if (pontos >= 3) {
            return true;
          }
        }
      
        // Diagonais
        let pontosDiagonalPrincipal:number = 0;
        let pontosDiagonalSecundaria:number = 0;
      
        for (let d = 0; d < 3; d++) {
          if (jogo[d][d] === simboloAtual) {
            pontosDiagonalPrincipal++;
          }
      
          const cSecundaria = 2 - d;
          if (jogo[d][cSecundaria] === simboloAtual) {
            pontosDiagonalSecundaria++;
          }
        }
      
        if (pontosDiagonalPrincipal >= 3 || pontosDiagonalSecundaria >= 3) {
            return true;
        }

        return false;

      };

    const trocaJogador=()=>{
        simboloAtual == 'X' ? setSimboloAtual('O') : setSimboloAtual('X');
    }
  
    // Função para obter posição a partir do evento
    const retPos=(e:any)=>{
        const p=e.target.getAttribute('data-pos')
        const pos:number[]=[parseInt(p.substring(0,1)), parseInt(p.substring(1,2))]
        return pos
    }

    const verificaEspacoVazio=(e:any)=>{
        if(jogo[retPos(e)[0]][retPos(e)[1]]==' '){
            return true
        }else{
            return false
        }
    }

    const verificaEmpate = (): boolean => {
      for (let l = 0; l < 3; l++) {
        for (let c = 0; c < 3; c++) {
          if (jogo[l][c] === ' ') {
            return false;
          }
        }
      }
      return true;
    };

    // Função para realizar uma jogada
    const jogar = (e:any) => {
        if(jogando){
            if(verificaEspacoVazio(e)){
                console.log("preencheu quadrado do tabuleiro!");
                jogo[retPos(e)[0]][retPos(e)[1]] = simboloAtual;
                localStorage.setItem("pecas", jogo.toString());
                trocaJogador();

                if(verificaVitoria()){
                    trocaJogador();
                    setTimeout(() => {
                    alert("Jogador " + simboloAtual + " venceu");
                    ganhaPonto(simboloAtual);
                    setJogando(false);
                }, 0)
                } else if (verificaEmpate()) {
                  setTimeout(() => {
                  setJogando(false);
                  alert("O jogo terminou em empate!");
                  }, 0)
                }
            }
        }
        else{
            alert("Esse jogo já acabou, reinicie ou limpe o tabuleiro para jogar novamente!");
        }
    }

    //funcao que remove as pecas do tabuleiro e mantem o progresso dos jogadores caso nenhum esteja com 3 pontos, nao tira as pontuacoes
    const limparTabuleiro = ():any =>{
        setJogando(true);
        setJogo(jogoInicial);
        setSimboloAtual("X");
        if(pontosO == 3){
            alert("O jogador O venceu a rodada melhor de 3, voce ira deixar ele ser melhor mesmo?");
            setPontosO(0);
            localStorage.setItem("pontosO", "0");
            localStorage.setItem("pontosX", "0");
        }
        if(pontosX == 3){
            alert("O jogador X venceu a rodada melhor de 3, voce ira deixar ele ser melhor mesmo?");
            setPontosX(0);
            localStorage.setItem("pontosX", "0");
            localStorage.setItem("pontosO", "0");
        }
    }

    const reiniciarJogo = () => {
      setJogando(true);
      setJogo(jogoInicial);
      setSimboloAtual("X");

      localStorage.setItem("pontosX", "0");
      localStorage.setItem("pontosO", "0");
      setPontosX(0);
      setPontosO(0);
  }

  return (
    <>
        <section className={styles.main}>
            <div className={styles.botoes}>
                <button className={styles.botaoVoltar} onClick={() => navigate("/")}>
                    Voltar
                </button>
            </div>

            <h1 className={styles.vezJogador}>Vez do jogador: {simboloAtual}</h1>

            <div className={styles.placar}>
                <div className={styles.pontuacao}>
                    <div className={styles.jogador}>
                        <h3>{jogadorX} - X</h3>
                        <p>pontos: {localStorage.getItem("pontosX")}</p>
                    </div>
                </div>

                <div className={styles.jogo}>
                    <div className={styles.tabuleiro}>
                        <div className={styles.tabuLinha}>
                            <div className={styles.casa} data-pos='00' onClick={(e) => jogar(e)}>
                                {jogo[0][0] === 'X' && <img src="https://cdn-icons-png.flaticon.com/512/5557/5557647.png" alt="X" style={{ width: '50px', height: '50px', transform: 'rotate(45deg)' }}/>}
                                {jogo[0][0] === 'O' && <img src="https://cdn-icons-png.flaticon.com/512/40/40031.png" alt="O" style={{ width: '50px', height: '50px' }}/>}
                            </div>
                            <div className={styles.casa} data-pos='01' onClick={(e) => jogar(e)}>
                                {jogo[0][1] === 'X' && <img src="https://cdn-icons-png.flaticon.com/512/5557/5557647.png" alt="X" style={{ width: '50px', height: '50px', transform: 'rotate(45deg)' }}/>}
                                {jogo[0][1] === 'O' && <img src="https://cdn-icons-png.flaticon.com/512/40/40031.png" alt="O" style={{ width: '50px', height: '50px' }}/>}
                            </div>
                            <div className={styles.casa} data-pos='02' onClick={(e) => jogar(e)}>
                                {jogo[0][2] === 'X' && <img src="https://cdn-icons-png.flaticon.com/512/5557/5557647.png" alt="X" style={{ width: '50px', height: '50px', transform: 'rotate(45deg)' }}/>}
                                {jogo[0][2] === 'O' && <img src="https://cdn-icons-png.flaticon.com/512/40/40031.png" alt="O" style={{ width: '50px', height: '50px' }}/>}
                            </div>
                        </div>
                        <div className={styles.tabuLinha}>
                            <div className={styles.casa} data-pos='10' onClick={(e) => jogar(e)}>
                                {jogo[1][0] === 'X' && <img src="https://cdn-icons-png.flaticon.com/512/5557/5557647.png" alt="X" style={{ width: '50px', height: '50px', transform: 'rotate(45deg)' }}/>}
                                {jogo[1][0] === 'O' && <img src="https://cdn-icons-png.flaticon.com/512/40/40031.png" alt="O" style={{ width: '50px', height: '50px' }}/>}
                            </div>
                            <div className={styles.casa} data-pos='11' onClick={(e) => jogar(e)}>
                                {jogo[1][1] === 'X' && <img src="https://cdn-icons-png.flaticon.com/512/5557/5557647.png" alt="X" style={{ width: '50px', height: '50px', transform: 'rotate(45deg)' }}/>}
                                {jogo[1][1] === 'O' && <img src="https://cdn-icons-png.flaticon.com/512/40/40031.png" alt="O" style={{ width: '50px', height: '50px' }}/>}
                            </div>
                            <div className={styles.casa} data-pos='12' onClick={(e) => jogar(e)}>
                                {jogo[1][2] === 'X' && <img src="https://cdn-icons-png.flaticon.com/512/5557/5557647.png" alt="X" style={{ width: '50px', height: '50px', transform: 'rotate(45deg)' }}/>}
                                {jogo[1][2] === 'O' && <img src="https://cdn-icons-png.flaticon.com/512/40/40031.png" alt="O" style={{ width: '50px', height: '50px' }}/>}
                            </div>
                        </div>
                        <div className={styles.tabuLinha}>
                          <div className={styles.casa} data-pos='20' onClick={(e) => jogar(e)}>
                                {jogo[2][0] === 'X' && <img src="https://cdn-icons-png.flaticon.com/512/5557/5557647.png" alt="X" style={{ width: '50px', height: '50px', transform: 'rotate(45deg)' }} />}
                                {jogo[2][0] === 'O' && <img src="https://cdn-icons-png.flaticon.com/512/40/40031.png" alt="O" style={{ width: '50px', height: '50px' }} />}
                          </div>
                          <div className={styles.casa} data-pos='21' onClick={(e) => jogar(e)}>
                                {jogo[2][1] === 'X' && <img src="https://cdn-icons-png.flaticon.com/512/5557/5557647.png" alt="X" style={{ width: '50px', height: '50px', transform: 'rotate(45deg)' }} />}
                                {jogo[2][1] === 'O' && <img src="https://cdn-icons-png.flaticon.com/512/40/40031.png" alt="O" style={{ width: '50px', height: '50px' }} />}
                          </div>
                          <div className={styles.casa} data-pos='22' onClick={(e) => jogar(e)}>
                                {jogo[2][2] === 'X' && <img src="https://cdn-icons-png.flaticon.com/512/5557/5557647.png" alt="X" style={{ width: '50px', height: '50px', transform: 'rotate(45deg)' }} />}
                                {jogo[2][2] === 'O' && <img src="https://cdn-icons-png.flaticon.com/512/40/40031.png" alt="O" style={{ width: '50px', height: '50px' }} />}
                         </div>
                        </div>
                    </div>
                </div>

                <div className={styles.pontuacao}>
                    <div className={styles.jogador}>
                        <h3>{jogadorO} - O</h3>
                        <p>pontos: {localStorage.getItem("pontosO")}</p>
                    </div>
                </div>
            </div>
            <div className={styles.botoesDiv}>
                <button className={styles.botoesInferiores} onClick={() => reiniciarJogo()}>
                    Reiniciar
                </button>
                <button className={styles.botoesInferiores} onClick={() => limparTabuleiro()}>
                    Limpar Tabuleiro
                </button>
            </div>
        </section>
    </>
);
};

export default Jogo;