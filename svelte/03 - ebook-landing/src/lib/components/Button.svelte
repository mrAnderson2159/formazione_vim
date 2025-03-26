<script>
	import { goto } from '$app/navigation';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
    import {loadStripe} from '@stripe/stripe-js';

    const { children, active, type = 'button', ...props } = $props();

    async function handleClick(event) {
        try {
            // Creiamo una sessione di checkout con Stripe
            const stripe = await loadStripe(PUBLIC_STRIPE_KEY);

            // Comunichiamo con il server per creare la sessione di checkout a /routes/api/checkout/+server.js
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const {sessionId} = await response.json();

            await stripe.redirectToCheckout({ sessionId });
        } catch (error) {
            goto('/checkout/failure');
      }
    }
</script>

<button class="base" 
    class:button={type === 'button'} 
    class:tab={type === 'tab'} 
    class:active={active}
    onclick="{handleClick}"
    {...props}>
    {@render children()}
</button>

<style>
    button.base {
        transition: all 0.3s;
        border: 2px solid aliceblue;
    }

    button.button {
        background-color: black;
        color: aliceblue;
        padding: 20px 24px;
        font-weight: normal;
        font-size: 22px;
        text-transform: uppercase;
    }

    button.button:hover {
        background-color: aliceblue;
        color: #333;
    }

    button.tab {
        width: 100%;
        text-align: left;
        padding: 10px 24px;
        border: none;
        font-weight: 800;
        font-size: 20px;
        font-family: 'Anton', sans-serif;
    }

    button.tab:hover {
        background-color: #efefef;
    }

    button.tab.active {
        background-color: black;
        color: white;
    }
</style>
