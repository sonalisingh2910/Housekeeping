import { useState } from 'react';
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { signup } from '../services/User_service';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate user inputs
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }

    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }

    // Authenticate user
    signup({ email, password })
      .then(token => {
        // Set token in local storage
        localStorage.setItem('token', token);

        // Clear login fields and error message
        setEmail('');
        setPassword('');
        setError('');

        // Redirect to dashboard
        window.location.href = '/jobpost';
      })
      .catch(error => setError('Wrong login credentials. Please try again.'));
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <h1 className="text-center mb-4">Sign In</h1>

      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <label htmlFor="email" className="form-label mb-2">
          Email address
        </label>
        <MDBInput
          id="email"
          type="email"
          className="mb-4"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password" className="form-label mb-2">
          Password
        </label>
        <MDBInput
          id="password"
          type="password"
          className="mb-4"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <div className="d-flex justify-content-between align-items-center mb-4">
         

          <div>
            <MDBCheckbox id="remember" label="Remember me" className="me-2" />
          </div>
          <div>
            <a href="!#" className="text-muted">
              Forgot password?
            </a>
          </div>
        </div>

        <MDBBtn type="submit" className="mb-4 lg">
          Sign in
        </MDBBtn>
      </form>

      <p className="text-center mb-3">Or sign up with:</p>
      <div
        className="d-flex justify-content-between mx-auto mb-4"
        style={{ width: "40%" }}
      >
        <MDBBtn
          tag="a"
          color="none"
          className="m-1"
          style={{ color: "#A75D5D" }}
        >
          <FaFacebookF size="20" />
        </MDBBtn>

        <MDBBtn
          tag="a"
          color="none"
          className="m-1"
          style={{ color: "#A75D5D" }}
        >
          <FaTwitter size="20" />
        </MDBBtn>

        <MDBBtn
          tag="a"
          color="none"
          className="m-1"
          style={{ color: "#A75D5D" }}
        >
          <FaGoogle size="20" />
        </MDBBtn>

        <MDBBtn
          tag="a"
          color="none"
          className="m-1"
          style={{ color: "#A75D5D" }}
        >
          <FaGithub size="20" />
        </MDBBtn>
      </div>

      <p className="text-center">
        Not a member? <NavLink to="/signup">Register</NavLink>
      </p>
    </MDBContainer>
  );
}

export default SignIn;

