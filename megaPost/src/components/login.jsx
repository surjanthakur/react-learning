import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import Button from './button';
import Input from './input';
import { useDispatcht } from 'react-redux';
import authservice from '../appwrite/auth';

export default function Login() {
  const dispatch = useDispatcht();
  const navigate = useNavigate();
  retun(
    <div>
      <h1></h1>
    </div>
  );
}
