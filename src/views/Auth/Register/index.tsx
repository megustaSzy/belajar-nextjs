import Link from "next/link"
import { useRouter } from "next/router"
import styles from './Register.module.css'

const RegisterViews = () => {
    const { push } = useRouter();
    const HandlerAbout = () => {
        push("/about");
    }
    return (
        <div className={styles.register}>
        <h1>Register Page</h1>
        <button onClick={() => HandlerAbout ()}>Masuk</button>
        <p>Sudah punya akun? Login
            <Link href="/auth/login"> disini</Link>
        </p>
    </div>
    )
}

export default RegisterViews;