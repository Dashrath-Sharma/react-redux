import { useDispatch, useSelector } from "react-redux"
import { setData } from "./redux/actions";

export default function Home(){
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    const clickHandler = () => {
        dispatch(setData("e.target.value"));
    }
    return(
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src='https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664009469/Croma%20Assets/Communication/Mobiles/Images/243462_7_u9hdbg.png/mxw_2048,f_auto' alt='nothing' />
                </div>
                <div className="text-wrapper item">
                    <span>
                        {JSON.stringify(selector)}
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button className="btn btn-primary" onClick={clickHandler}>Click me</button>
                </div>
            </div>
        </div>
    )
}