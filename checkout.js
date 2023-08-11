import { loadStripe } from "@stripe/stripe-js";

export async function checkout({lineItems}){
	let stripePromise = null

	const getStripe = () => {
		if(!stripePromise) {
			stripePromise = loadStripe("pk_test_51NdGlIBa1RCfaJ9y9ftHquYVkfKCMOh27hOyeDWcF5I4nwvQPUomPeUsEtPntIdQOWM9z5i0o3V1IQNSx01vtZmL00VPsn8JIC")
		}
		return stripePromise
	}

	const stripe = await getStripe()

	await stripe.redirectToCheckout({
		mode: 'payment',
		lineItems,
		successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
		cancelUrl: window.location.origin
	})

}