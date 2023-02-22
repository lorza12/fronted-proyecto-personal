/* eslint-disable react/prop-types */
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from '../../pages/modal/modal';
import { selectAuth } from './authLoginSlice';

const RequireAuth = ({ children, roles }) => {
  const navigate = useNavigate();
  const { isAuth, profile } = useSelector(selectAuth);
  if (!isAuth) {
    return (
      <Modal
        text="Debes registrarte primero"
        button={() => navigate('/login')}
        textButton="Login"
      />
    );
  }

  if (roles && !roles.includes(profile.role)) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};

export default RequireAuth;
