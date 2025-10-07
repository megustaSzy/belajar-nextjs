import Link from "next/link";
import { useRouter } from "next/router";

const RegisterPage = () => {
    
    const { push } = useRouter();

    const HandlerAbout = () => {
        push("/about");
    };
    return (
    <div>
        <h1>Register Page</h1>
        <button onClick={() => HandlerAbout ()}>Masuk</button>
        <p>Sudah punya akun? Login
            <Link href="/auth/login"> disini</Link>
        </p>
    </div>
    )
}

export default RegisterPage;