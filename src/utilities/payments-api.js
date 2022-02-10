import { getToken } from './users-service';


export async function handlePayment() {
  // Fetch takes an optional options object as the 2nd argument
  // used to include a data payload, set headers, etc. 
  console.log('start fetch')
  const token = getToken();
    fetch("/create-checkout-session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(),
    })
    .then(res => {
        console.log('fetch complete')
        if (res.ok) return res.json()
        // If res is not ok
        return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
        // Redirect user to url
        window.location = url
        console.log('window-url',url)
    })
    .catch(e => {
        console.error(e.error)
    })
  
}