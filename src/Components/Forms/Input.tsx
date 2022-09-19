import { InputHTMLAttributes } from "react"
import css from '../../styles//Input.module.css'
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> { }
export function Input(props: IInputProps) {
    return (
        <input
            {...props}
            className={css.input}
        />
    )
}