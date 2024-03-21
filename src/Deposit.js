import { Container, Row } from "react-bootstrap";
import { useState, useContext } from "react";
import UserContext from './context';
import "./pagestyle.css";


export default function Deposit() {
  let people = useContext(UserContext);
  const [deposit, setDeposit] = useState("");
  const [status, setStatus] = useState("");
  var leng = people.users.length;
  var balAnce = people.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);
  const [show, setShow] = useState(true);

  // form validation
  function validate(field, label) {
    if (isNaN(field)) {
      setStatus(field + label);
      alert("Please Enter Valid Number");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (parseInt(field) <= 0) {
      setStatus(field + label);
      alert(" Please Enter a Value greater than zero");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }
  function handleCreate(e) {
    e.preventDefault();
    if (!validate(deposit, "deposit")) return;
    var Money = balAnce + parseInt(deposit);
    setAvailableBal(Money);
    people.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Deposited ₹" + deposit);
  }

  function refrushForm() {
    setDeposit("");
    setShow(true);
  }
  return (
    
   
    <>
      <Container  className="page-container">
       
        <Row>
          <h1>Balance : ₹ {availablebal}</h1>
        </Row>
        <Row>
          {show ? (
            
            
            <form>
              <div class="form-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter Amount to be deposited"
                  value={deposit}
                  onChange={(e) => setDeposit(e.currentTarget.value)}
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary "
                onClick={handleCreate}
              >
                Deposit
              </button>
            </form>
          ) : (
            <>
              <h5>Successful Transaction</h5>
              <br />
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={refrushForm}
              >
                Add Another Deposit
              </button>
            </>
          )}
        </Row>
      </Container>
    </>
  );
}

