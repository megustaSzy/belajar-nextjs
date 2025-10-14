/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { use, useEffect } from "react";
import { useState } from "react";

type productType = {
    id: number,
    name: string,
    price: number,
    stok: number
};

const ProductPage = () => {
    const [isLogin, setIsLogin] =  useState(true);
    const [products, setProducts] = useState([]);
    const { push } = useRouter();

    useEffect (() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, []);

    useEffect (() => {
        fetch("/api/product")
        .then((res) => res.json())
        .then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Product Page</h1>
            {products.map((product: productType) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
};

export default ProductPage;