import { useEffect, useState } from "react";
import config, { currencyFormatter } from "../config";
import ApiHelper from "../helpers/ApiHelper";
import fetchProductsViaAPI from "../helpers/ApiHelper"; 
import dispenseProductsViaAPI  from "../helpers/ApiHelper";
import { productListProps } from "../helpers/PropsHelper";
import { Product } from "../types/product";

const ProductList = (Props: productListProps) =>{
    const [products, setProductList] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            setProductList(await ApiHelper.fetchProductsViaAPI());
        }
        fetchProducts();    
    }, []);

    const  productSelect = async (productId: number, productPrice: number) => {
        if (Props.currentCredit >= productPrice){
            Props.resetCoins();
            await ApiHelper.dispenseProductsViaAPI(productId);
            setProductList(await ApiHelper.fetchProductsViaAPI());
            alert("Thank you!");
        } else {
            alert("Insufficient funds.")
        }
    }

    return (
        <div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {products &&
                    products.map((p: Product) => (
                    <tr key={p.id} onClick={() => productSelect(p.id, p.price)}>
                        <td>{p.productName}</td>
                        <td>{currencyFormatter.format(p.price)}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;