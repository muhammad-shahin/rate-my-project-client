import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import firebaseAuthError from '../../Services/Utility/FirebaseAuthError';
import passwordErrorChecker from '../../Services/Utility/PasswordErrorChecker';
import Modal from '../../Services/Utility/Modal';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Form from '../../Components/Form/Form';
import loginAnim from '../../assets/Animation/loginAnimation.json';
import createToken from '../../Api/createToken';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  // show password regular expression error
  const handlePasswordChange = (e) => {
    setPasswordErrorMessage(passwordErrorChecker(e));
  };

  // handle sign up
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setShowModal(true);
    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        createToken(user.uid);
        console.log(user);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully Login With Google',
          showConfirmButton: false,
          timer: 2000,
        });
        // navigate after login
        navigate(location?.state ? location?.state : '/');
      })
      .catch((error) => {
        firebaseAuthError(error.code);
        setShowModal(false);
      });
  };
  const loginFields = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter Email',
      labelText: 'Your Valid Email',
      isRequired: true,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Enter Password',
      onChange: handlePasswordChange,
      errorMessage: passwordErrorMessage,
      labelText: 'Password',
      isRequired: true,
    },
  ];
  return (
    <section>
      <div className='max-w-[70vw]'></div>
      <Form
        title='Login To Your Account'
        inputFields={loginFields}
        submitText={'Login'}
        lottieAnimation={loginAnim}
        handleFormSubmit={handleLogin}
        loginSignUpForm={true}
        bottomText={"Don't Have An Account?"}
        bottomLinkText={'Create Account'}
        bottomLink={'/sign-up'}
      />
      <Modal
        title='Loading'
        message='Please Wait Logging In Your Account'
        modalStatus={showModal}
      />
    </section>
  );
};

export default Login;
