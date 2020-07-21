import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';
import './Checkout.css';

function Checkout() {
	const [{ basket }] = useStateValue();
	return (
		<div className='checkout'>
			<div className='checkout_left'>
				<img
					className='checkout_ad'
					src='https://gos3.ibcdn.com/top-1568020025.jpg'
					alt=''
				/>
				{basket?.length === 0 ? (
					<div>
						<h2> Your Shopping Basket is empty</h2>
					</div>
				) : (
					<div>
						<h2 className='checkout_title'>Your Shopping Basket</h2>
						{/* List all checkout products */}
						{basket?.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				)}
			</div>
			{basket?.length > 0 && (
				<div className='checkout_right'>
					<Subtotal />
					{/* <Subtotal /> */}
				</div>
			)}
		</div>
	);
}

export default Checkout;
