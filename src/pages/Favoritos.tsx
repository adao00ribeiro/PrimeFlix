import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IFilmes } from '../interfaces/IFilmes';
import '../styles/Favoritos.css'

export function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@PRIMEFLIX") || "";
        setFilmes(minhaLista == "" ? [] : JSON.parse(minhaLista))

    }, [])
    function ExcluirFilme(id: number) {
        let filtroFilmes = filmes.filter((item: IFilmes) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@PRIMEFLIX", JSON.stringify(filtroFilmes));
        toast.success("Filme removido com sucesso");
    }

    return (
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>
            {
                filmes.length === 0 &&
                <span>Voce não possui nenhum filme salvo</span>
            }
            <ul>
                {filmes.map((item: IFilmes) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => ExcluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                }
                )
                }
            </ul>
        </div>

    )
}