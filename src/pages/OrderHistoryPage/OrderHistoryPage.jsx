import { useParams } from "react-router-dom";
import * as userService from "../../utilities/users-service";



function OrderHistoryPage() {
  
  async function handleCheckToken() {
    const expDate = await userService.checkToken();
    console.log(expDate)
  }
  
  return (
    <div>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check when my login expires</button>
    </div>
  )
}

export default OrderHistoryPage;