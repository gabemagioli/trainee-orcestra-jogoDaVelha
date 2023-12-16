import "./botao.module.css"

function Botao(props:{texto:string}){
    return(
        <>
            <button>{props.texto}</button>
        </>
    )
}

export default Botao;