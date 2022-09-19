import css from '../styles/CreateCarrosel.module.css'
import { GameBanner } from "./GameBanner"
import { useState, useEffect } from 'react';

interface Game {
    id: string;
    title: string;
    bannerUrl: string;
}
export function CreateCarrosel() {
    const [games, SetGames] = useState<Game[]>([]);

    useEffect(() => {
        fetch('http://localhost:3333/api/games')
            .then(Response => Response.json())
            .then(data => {
                SetGames(data)
            })
    }, [])

    return (

        <div className={css.grid}>
            {games.map(game => {
                return (
                    <GameBanner
                        key={game.id}
                        title={game.title}
                        bannerUrl={game.bannerUrl}
                        adsCount={"4 anúncios"} />
                )
            })}
        </div>

    )
}


