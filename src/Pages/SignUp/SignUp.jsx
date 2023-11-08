import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Configs/firebase.config';
import firebaseAuthError from '../../Services/Utility/FirebaseAuthError';
import passwordErrorChecker from '../../Services/Utility/PasswordErrorChecker';
import Modal from '../../Services/Utility/Modal';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Form from '../../Components/Form/Form';
import signUpAnim from '../../assets/Animation/registration.json';
import useAxios from '../../Hooks/useAxios';

const SignUp = () => {
  const secureAxios = useAxios();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState('');
  const [showModal, setShowModal] = useState(false);
  const [profilePicture, setProfilePicture] = useState('');

  // show password regular expression error
  const handleFieldValueChange = (e, customName, customValue) => {
    if (!e && customName === 'profilePicture') {
      setProfilePicture(customValue);
    }
    if (e?.target.name === 'password') {
      setPasswordErrorMessage(passwordErrorChecker(e));
    } else if (e?.target.name === 'confirmPassword') {
      setConfirmPasswordErrorMessage(passwordErrorChecker(e));
    }
  };

  // handle sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    setShowModal(true);
    if (password === confirmPassword) {
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const id = { userId: user.uid };
          secureAxios
            .post('/jwt', id)
            .then((res) => {
              console.log(res.data);
              setShowModal(false);
            })
            .catch((error) => {
              console.log(error.response);
              setShowModal(false);
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Failed To Generate Token',
                text: `Failed To Generate Token. Please Try Again. Error Message: ${error.response.data.message}`,
                showConfirmButton: false,
                timer: 1500,
              });
            });
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: profilePicture,
          })
            .then(() => {})
            .catch((error) => {
              console.log(error.message);
            });
          setShowModal(false);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Account Created Successfully',
            text: 'Redirecting Login Page...',
            showConfirmButton: false,
            timer: 1500,
          });
          // navigate after login
          navigate(location?.state ? location?.state : '/');
        })
        .catch((error) => {
          firebaseAuthError(error.code);
        });
    } else {
      setShowModal(false);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: "Password Didn't Match",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const signUpInputFields = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Enter Full Name',
      labelText: 'Enter Full Name',
      isRequired: true,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter Email',
      labelText: 'Your Valid Email',
      isRequired: true,
    },
    {
      name: 'profilePicture',
      type: 'file',
      placeholder: 'Upload Profile Picture',
      onChange: handleFieldValueChange,
      labelText: 'Upload Profile Picture',
      isRequired: false,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Enter Password',
      onChange: handleFieldValueChange,
      errorMessage: passwordErrorMessage,
      labelText: 'Password',
      isRequired: true,
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      onChange: handleFieldValueChange,
      errorMessage: confirmPasswordErrorMessage,
      labelText: 'Confirm Password',
      isRequired: true,
    },
  ];
  return (
    <section className=''>
      <Form
        title='Create Your Account'
        inputFields={signUpInputFields}
        submitText={'Create Account'}
        lottieAnimation={signUpAnim}
        handleFormSubmit={handleSignUp}
        loginSignUpForm={true}
        bottomText={'Already Have An Account?'}
        bottomLinkText={'Login'}
        bottomLink={'/login'}
      />
      <Modal
        title='Loading'
        message='Please Wait Creating Account'
        modalStatus={showModal}
      />
    </section>
  );
};

export default SignUp;
