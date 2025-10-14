import Link from "next/link";
import { useRouter } from "next/router";
import styles from './Login.module.scss'

const LoginViews = () => {
    const { push} = useRouter();
    const HandleLogin = () => {
        push("/product");
    };
    return (
        <div className={styles.login}>
            <h1 className="text-3xl font-bold ">Login Page</h1>
            <button onClick={() => HandleLogin()}>Login</button>
            <p style={{color: 'blue', border: '1px solid blue'}}>Belum punya akun? Registrasi
                <Link href="/auth/register"> disini</Link>
            </p>
        </div>
    )
}

export default LoginViews;