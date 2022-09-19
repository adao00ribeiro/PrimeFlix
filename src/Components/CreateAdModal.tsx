import css from '../styles/CreateAdModal.module.css'
import { Input } from './Forms/Input'

export function CreateAdModal() {
    return (
        <form className={css.form}>
            <div className={css.div1}>
                <label className={css.label1} htmlFor='Game'>Qual o game?</label>
                <Input id="game" placeholder='Selecione o game que deseja jogar'></Input>
            </div>
            <div className={css.divflexcol}>
                <label>Seu nome (ou nickname)</label>
                <Input id='name' placeholder='Como te chamam dentro do game?'></Input>
            </div>

            <div className={css.grid}>
                <div className={css.div1}>
                    <label>Joga há quantos anos?</label>
                    <Input id='yearsPlaying' placeholder='Tudo bem ser ZERO'></Input>
                </div>
                <div className={css.div1}>
                    <label>Qual seu discord?</label>
                    <Input id='discord' placeholder='Usuario#0000'></Input>
                </div>
            </div>
            <div className={css.grid}>
                <div className={css.div1}>
                    <label htmlFor='weekDays'>Quando costuma jogar?</label>
                    <div>
                        <button title='Domingo'>D</button>
                        <button title='Segunda'>S</button>
                        <button title='Terça'>T</button>
                        <button title='Quarta'>Q</button>
                        <button title='Quinta'>Q</button>
                        <button title='Sexta'>S</button>
                        <button title='Sábado'>S</button>
                    </div>
                </div>
                <div>
                    <label>Qual horario do dia?</label>
                    <div className={css.div2}>
                        <Input id='hourStart' placeholder='De'></Input>
                        <Input id='hourEnd' placeholder='Ate'></Input>
                    </div>
                </div>
            </div>
            <div>
                <input type='checkbox' />
                Costumo me conectar no chat de voz
            </div>
            <footer>
                <button>Cancelar</button>
                <button>Encontrar duo</button>
            </footer>
        </form>
    )
}