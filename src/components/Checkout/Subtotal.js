import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import { getCartTotal } from '../Context_API/Reducer';
import { useStateValue } from '../Context_API/StateProvider';
import './Subtotal.css'

const Subtotal = () => {
  const [{ cart, user }, dispatch] = useStateValue()
  const history = useHistory()

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to={!user && "/login"}>
        <button className="proceedbtn" onClick={e => {history.push('./payment')}}>Proceed to Checkout</button>
      </Link>
    </div>
  )
}

export default Subtotal
