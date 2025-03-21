# Stripe – Gateway di Pagamento

Per questo particolare sito web utilizzeremo **Stripe** come gateway di pagamento.

> Stripe è un servizio di pagamento online che permette di accettare pagamenti con carta di credito direttamente sul proprio sito web.

---

## Registrazione e Accesso

Per configurarlo ho seguito i seguenti passi:

1. Ho visitato la pagina: [https://stripe.com/it](https://stripe.com/it)
2. Ho inserito la mia email e sono arrivato alla pagina di registrazione.
3. Ho richiesto la generazione di una _password sicura_.
4. Ho selezionato l’opzione per **non ricevere email** e ho inviato il modulo.
5. Dopo aver verificato l’email, sono stato reindirizzato su [https://dashboard.stripe.com/welcome](https://dashboard.stripe.com/welcome).
6. Ho cliccato su _Scopri le funzionalità_.
7. Ho chiuso il pannello cliccando sulla _X_ in alto a sinistra.
8. Sono tornato a seguire il tutorial.

---

## Considerazioni dall'insegnante

Niklas Fischer, l'insegnante del corso  
**_Learn Svelte 5 Rune Syntax, Build with Stripe, Supabase, OpenAI – Learn Svelte by building real world projects!_**,  
ha fornito alcune indicazioni sull’interfaccia di Stripe:

- Il pulsante **_Developers_** si trova (nel 2025) **in basso a sinistra**.
- Questa sezione carica una componente dedicata alle **statistiche dell'API** e ai **Webhooks**.
- I Webhooks verranno approfonditi più avanti nel corso.
- I Webhooks tendono a _cambiare nome_, in una futura versione potrebbero chiamarsi **Event Destinations**

---

## API Keys

Abbiamo creato un file chiamato **.env** nella _root_ del progetto, dove abbiamo definito due variabili d’ambiente essenziali per l’integrazione con Stripe:

> `PUBLIC_STRIPE_KEY=pk_test...`

Questa è la **public key** fornita da _Stripe_, utilizzata dal frontend per inizializzare le richieste in modo sicuro.

> `STRIPE_API_KEY=sk_test...`

Questa invece è la **private key**, riservata al backend per eseguire chiamate autentiche all’API di Stripe.

⚠️ Ricorda: le chiavi private **non devono mai essere esposte al client**.

---

## Prodotti

A questo punto, dal momento che vogliamo portare l'utente ad acquistare il _libro_ sponsorizzato dalla _landing page_ di questo progetto, abbiamo bisogno di creare un **prodotto** su _Stripe_.

Nella versione attuale ho cliccato su _Nuova attività_ in alto a sinistra e ho selezionato _Catalogo prodotti_.  
Quindi ho cliccato su _Crea prodotto_ e ho inserito i dettagli del libro.

Dopo aver creato il libro, ci ho cliccato sopra aprendo la finestra di dettaglio, dove, sulla riga del prezzo, ho cliccato sui tre puntini e ho selezionato **Copia ID prezzo**.

Quindi sono tornato nel file **.env** e ho aggiunto una nuova variabile d’ambiente:

> `PRICE_ID=price_...`

A questo punto abbiamo chiuso Stripe, perché l'insegnante ha concluso che abbiamo già tutto ciò che ci serve per proseguire con il progetto.

---

## Dipendenze

Per integrare Stripe nel progetto è necessario installare due librerie:

1. `stripe` — utilizzata nel **backend** per comunicare con l'API di Stripe.
2. `@stripe/stripe-js` — utilizzata nel **frontend** per gestire il redirect alla pagina di pagamento.

Le ho installate con il comando:

```bash
npm install stripe @stripe/stripe-js
```

---

## Flusso di Pagamento

L'insegnante ha spiegato nel dettaglio il flusso che avviene dal momento in cui l'utente clicca sul pulsante _Acquista_, fino al completamento della transazione.

1. Il **frontend** invia una richiesta HTTP al **backend** contenente tutte le informazioni necessarie per creare una sessione di pagamento.

2. Il **backend**, utilizzando la **private key** di Stripe, crea una nuova _sessione di pagamento_ tramite l’SDK `stripe`.

3. Stripe restituisce al backend un **ID di sessione** univoco.

4. Il backend risponde al frontend passando l’ID di sessione ricevuto.

5. Il **frontend** utilizza la libreria `@stripe/stripe-js` per reindirizzare l’utente alla pagina di pagamento ospitata su Stripe, specificando:

   - L’**ID di sessione**
   - L’URL di **successo** (dove reindirizzare l’utente dopo il pagamento)
   - L’URL di **errore** (in caso di pagamento fallito)

6. L’utente completa il pagamento direttamente sulla piattaforma Stripe.

7. Una volta concluso il processo, Stripe reindirizza automaticamente l’utente alla pagina di **successo** o di **errore** precedentemente indicate.

---

✅ A questo punto l’utente ha effettuato il pagamento, e Stripe ha gestito l’intero processo in sicurezza.
