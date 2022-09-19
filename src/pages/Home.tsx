import '../styles/Home.css'
import { Header } from "../Components/Header/Header";
import { useEffect, useState } from "react";
import { api } from '../Services/api'
import { Link } from "react-router-dom";
import { IFilmes } from '../interfaces/IFilmes';



export function Home() {
    const [filmes, setFilmes] = useState<IFilmes[]>([])
    const [loading, SetLoading] = useState(true);
    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "32149c36bf1bdb153363cb4f162e80f9",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setFilmes(response.data.results.slice(0, 10))
            SetLoading(false);
        }
        loadFilmes();
    }, [])
    if (loading) {
        return (
            <div className='loading' >
                <h2>Carregando filmes....</h2>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filmes) => {
                    return (
                        <article key={filmes.id}>
                            <strong>{filmes.title}</strong>
                            <img src={`https:image.tmdb.org/t/p/original/${filmes.poster_path}`} alt={filmes.title} />
                            <Link to={`/filme/${filmes.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>

    )
}