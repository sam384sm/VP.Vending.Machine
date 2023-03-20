import { useEffect, useState } from "react";
import config, { currencyFormatter } from "../config";
import ApiHelper from "../helpers/ApiHelper";
import fetchProductsViaAPI from "../helpers/ApiHelper"; 
import dispenseProductsViaAPI  from "../helpers/ApiHelper";
import getMinimumCoins from "../helpers/MinCoinHelper";
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

    const  productSelect = async (productId: number, productPrice: number, soldOut: boolean, exactChangeRequired: boolean) => {
        if (soldOut !== false) {
            alert('Product unavailable');
        } else if (Props.currentCredit >= productPrice){
            var change = exactChangeRequired ? "" : getMinimumCoins(Props.currentCredit - productPrice);
            Props.addReturn(change);
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
                    <th>Available?</th>
                    <th>Requires exact change?</th>
                </tr>
                </thead>
                <tbody>
                {products &&
                    products.map((p: Product) => (
                    <tr key={p.id} onClick={() => productSelect(p.id, p.price, p.soldOut, p.exactChangeRequired)}>
                        <td>{p.productName}</td>
                        <td>{currencyFormatter.format(p.price)}</td>
                        <td>{p.soldOut ? "N" : "Y"}</td>
                        <td>{p.exactChangeRequired ? "Y" : "N"}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;