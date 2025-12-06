import { useDispatch } from 'react-redux';
import authservice from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

const handlelogoutchange = () => {
  const dispatch = useDispatch();
  authservice
    .logout()
    .then(() => {
      dispatch(logout());
    })
    .catch((err) => {
      console.error(err);
    });
};

function LogoutBtn() {
  return (
    <button
      type="button"
      className="inline-block bg-gray-700 text-white px-6 py-2 duration-200 hover:bg-red-500 rounded-4xl"
      onClick={handlelogoutchange}
    >
      log out
    </button>
  );
}

export default LogoutBtn;
