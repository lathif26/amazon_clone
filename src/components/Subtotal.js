import React from 'react';
import "./css/Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "../StateProvider";
import {getBasketTotal} from "../reducer";
//import {useNavigate} from "react-router-dom";
//import StripeCheckout from "react-stripe-checkout";
//import axios from "axios";
//import "react-toastify/dist/ReactToastify.css";
//import {toast} from "react-toastify";

//toast.configure();

function Subtotal() {
    // const Navigate = useNavigate();
    const [{basket, user}, dispatch] = useStateValue();
    // const total = getBasketTotal(basket);

    // async function handleToken(token){
    //     const response = await axios.post("http://localhost:8080/checkout", {
    //         token, 
    //         total
    //     })
    //     const {status} = response.data;
    //     if(status === "success"){
    //         toast("Success! Product Purchased", {
    //             type: "success"
    //         })
    //     }else{
    //         toast("Error! Something went wrong", {
    //             type: "error"
    //         })
    //     }
    // }

  return ( 
    <div className='subtotal'>
        <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items):
                        <strong>{value}</strong>
                    </p>  
                    <small className='subtotal_left'>
                        <input type="checkbox" />
                        This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        {/* <StripeCheckout 
            stripeKey="pk_test_51MRu06SDJt9CY6KLlYrOaGwrVRH4dWv0tAKIEfh2r7yDaaHPtReLrqw0MQEafkwnCiR2UgOfhGYv5QiXoBlRuvO000uWUwOeYe"
            token={handleToken}
            amount={total}
        /> */}
          <button>Procced to CheckOut </button>
    </div>
  )
}

export default Subtotal