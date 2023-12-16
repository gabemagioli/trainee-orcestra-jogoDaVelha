import styles from "./botao.module.css"

function Botao(props:{texto:string}){
    return(
        <>
            <button className={styles.botao}>{props.texto}</button>
        </>
    )
}

export default Botao;