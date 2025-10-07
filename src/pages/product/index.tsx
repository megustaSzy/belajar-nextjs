/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";


const ProductPage = () => {
    const [isLogin, setIsLogin] =  useState(false);
    const { push } = useRouter();
    useEffect (() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, []);
    return (
        <div>
            <h1>Product Page</h1>
        </div>
    );
};

export default ProductPage;