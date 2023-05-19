import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, setProducts } from "./redux/actions";

export default function Home() {
    const dispatch = useDispatch();
    // const categories = useSelector(state => state.categories);

    useEffect(() => {
        const fetchData = async () => {
            const r = await fetch('https://fakestoreapi.com/products/categories');
            const data = await r.json();
            console.log(data)
            dispatch(setCategories(data));
            
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const r = await fetch('https://fakestoreapi.com/products');
            const data = await r.json();
            console.log(data)
            dispatch(setProducts(data));
            
        }
        fetchData();
    }, []);

    // console.log(categories)
}