import css from '../styles/CreateAdBanner.module.css'
import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from 'phosphor-react'
function CreateAdBanner() {

    return (
        <div className={css.Anuncio_Div}>
            <div className={css.Anuncio_Div_2}>
                <div>
                    <strong className={css.Anuncio_Strong}>
                        Não encontrou seu Duo?
                    </strong>
                    <span className={css.Anuncio_Span}>
                        Publique um anúncio para encontrar novos Players!
                    </span>
                </div>
                <Dialog.Trigger className={css.Anuncio_Button}>
                    <MagnifyingGlassPlus className={css.Anuncio_MagnifyingGlassPlus} />
                    Publicar Anúncio
                </Dialog.Trigger >
            </div>


        </div>


    )
}

export default CreateAdBanner