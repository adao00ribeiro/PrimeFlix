import {useEffect , useState } from 'react'
import {useParams} from 'react-router-dom'
import {api} from '../Services/api'
import { IFilmes } from '../interfaces/IFilmes';
import '../styles/Filme.css'

export function Filme(){
    const {id} = useParams();
    const [filme, setFilme] =  useState<IFilmes>()
    const [loading, setLoading] =  useState(true)
    useEffect(()=>{
        async function loadFilme() {
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:"32149c36bf1bdb153363cb4f162e80f9",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                    setFilme(response.data)
                    setLoading(false)
            })
            .catch(()=>{
                console.log("Filme nao encontrado")
            })
        }
        loadFilme();
        return () =>{
            console.log("COMPONENT FOI DESMONTADO")
        }

    },[])

    if(loading){
        return (
            <div className='filme-info'>
                <h1>Carregando detalhes.....</h1>
            </div>

        )
    }



    return(
      <div className='filme-info'>
            <h1>{filme?.title}</h1>
            <img src = {`https://image.tmdb.org/t/p/original/${filme?.backdrop_path}`} alt={filme?.title}/>
            <h3>Sinopse</h3>
            <span>{filme?.overview}</span>
            <strong>Avaliacao:{filme?.vote_average}  / 10</strong>

            <div className='area-buttons'>
                <button>Salvar</button>
                <button>
                    <a href='#'>Trailer</a>
                </button>
            </div>
      
      
      </div>
    )
}
