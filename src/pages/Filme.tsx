import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../Services/api'
import { IFilmes } from '../interfaces/IFilmes';
import '../styles/Filme.css'
import { toast } from 'react-toastify';

export function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState<IFilmes>({
        id: 0,
        title: "",
        poster_path: "",
        backdrop_path: "",
        overview: "",
        vote_average: 0,
    })
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "32149c36bf1bdb153363cb4f162e80f9",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilme(response.data)
                    setLoading(false)
                })
                .catch(() => {
                    navigate("/", { replace: true })
                    return;
                })
        }
        loadFilme();
        return () => {
            console.log("COMPONENT FOI DESMONTADO")
        }

    }, [navigate, id])

    function SalvarFilme() {
        const minhaLista = localStorage.getItem("@PRIMEFLIX") || ""
        let filmesSalvos: IFilmes[] = minhaLista === "" ? [] : JSON.parse(minhaLista);
        const hasFilme = filmesSalvos.some((filmesSalvo: IFilmes) =>

            filmesSalvo.id === filme.id
        )
        if (hasFilme) {
            toast.warn("Este filme ja esta na sua lista");
            return;
        }

        filmesSalvos.push(filme)
        localStorage.setItem("@PRIMEFLIX", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso");


    }

    if (loading) {
        return (
            <div className='filme-info'>
                <h1>Carregando detalhes.....</h1>
            </div>

        )
    }



    return (
        <div className='filme-info'>
            <h1>{filme?.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme?.backdrop_path}`} alt={filme?.title} />
            <h3>Sinopse</h3>
            <span>{filme?.overview}</span>
            <strong>Avaliacao:{filme?.vote_average}  / 10</strong>

            <div className='area-buttons'>
                <button onClick={SalvarFilme}> Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${filme?.title} Trailer`}>Trailer</a>
                </button>
            </div>


        </div>
    )
}
