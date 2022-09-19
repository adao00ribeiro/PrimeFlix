import css from '../styles/GameBanner.module.css'

interface IGameBanner {
    bannerUrl: string;
    title: string;
    adsCount: string;
}

export function GameBanner(props: IGameBanner) {
    return (
        <>
            <a href="" className={css.Card_a}>
                <img className={css.Card_img} src={props.bannerUrl} alt='' />
                <div className={css.Card_Div}>
                    <strong className={css.Card_Strong}>
                        {props.title}
                    </strong>
                    <span className={css.Card_Span}>
                        {props.adsCount}
                    </span>
                </div>
            </a>
        </>
    )
}

