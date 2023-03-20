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

    const  productSelect = async (p: Product) => {
        if (p.soldOut !== false) {
            alert('Product unavailable');
        } else if (Props.currentCredit >= p.price){
            var change = p.exactChangeRequired ? "" : getMinimumCoins(Props.currentCredit - p.price);
            Props.addReturn(change);
            Props.resetCredit();
            Props.dispenseItem(p.productName);
            await ApiHelper.dispenseProductsViaAPI(p.id);
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
                    <tr key={p.id} onClick={() => productSelect(p)}>
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