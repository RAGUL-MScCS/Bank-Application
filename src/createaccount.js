import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useContext } from "react";
import userContext from './context';
import "./pagestyle.css";
import { Container } from "react-bootstrap";

export default function Signin() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let people = useContext(userContext);
  
  function validate(field, label) {
    if (!field) {
      setStatus("Please enter " + label);
      alert("Please enter " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (label === "password" && password.length < 8) {
      setStatus("Please enter minimum 8 characters for the " + label);
      alert("Please enter minimum 8 characters for the " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (label === "name") {
      if (!isNaN(field)) {
        setStatus("Please enter a valid " + label);
        alert("Please Enter Valid Name");
        setTimeout(() => setStatus(""), 3000);
        return false;
      }
    }
    if (label === "email") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        setStatus("Please enter a valid email address");
        alert("Please enter a valid email address");
        setTimeout(() => setStatus(""), 3000);
        return false;
      }
    }
    return true;
  }

  function handleCreate(e) {
    e.preventDefault();
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    people.users.push({ name, email, password, balance: 0 });
    setShow(false);
    alert("Successfully Created");
  }
  
  function refreshForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true); 
  }
  
  return (
    <div className="container mt-5" id="form">
      {show ? (
        <>
          <Container className="custom-image-container">
            <div className="row">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!name || !email || !password}
                  onClick={handleCreate}
                >
                  Submit
                </button>
              </form>
            </div>
          </Container>
        </>
      ) : (
        <>
          <Container className="container99">
            <h5>Successfully Account Created</h5>
            <button
              type="button"
              className="btn btn-primary"
              onClick={refreshForm}
            >
              Add another account
            </button>
          </Container>
        </>
      )}
    </div>
  );
}
