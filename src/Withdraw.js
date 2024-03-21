import { Container, Row } from "react-bootstrap";
import { useState, useContext } from "react";
import UserContext from './context';
import "./pagestyle.css";

export default function Withdraw() {
  let people = useContext(UserContext);
  const [withdraw, setWithdraw] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(true);
  var leng = people.users.length;
  var balAnce = people.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);

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
    if (parseInt(field) >= balAnce) {
      setStatus(field + label);
      alert("Sorry mate, you don't have enough cash to Withdraw");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate(e) {
    e.preventDefault();
    if (!validate(withdraw, "withdraw")) return;
    var Money = balAnce - parseInt(withdraw);
    setAvailableBal(Money);
    people.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Withdraw ₹" + withdraw);
  }
  function refrushForm() {
    setWithdraw("");
    setShow(true);
  }
  return (
    <>
      <Container className="page-container1">
        <Row>
          <h1>Balance : ₹ {availablebal} </h1>
        </Row>
        <Row>
          {show ? (
            <form>
              <div class="form-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter Amount to withdraw"
                  value={withdraw}
                  onChange={(e) => setWithdraw(e.currentTarget.value)}
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary "
                disabled={!withdraw}
                onClick={handleCreate}
              >
                Withdraw
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
                Add Another Withdraw
              </button>
            </>
          )}
        </Row>
      </Container>
    </>
  );
}
