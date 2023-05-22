import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LoginBox , Form, Input, Label, BtnForm} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginBox>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <BtnForm type="submit">Log In</BtnForm>
      </Form>
    </LoginBox>
  );
};
