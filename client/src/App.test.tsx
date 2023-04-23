import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/useAuth';
import Login from './components/Login/Login';

jest.mock('./contexts/useAuth');
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Login component', () => {
  const setLoginCreds = jest.fn();
  const getCurrentUser = jest.fn();
  const currentUser = null;
  const errors: any = [];

  // beforeEach(() => {
  //   useAuth.mockReturnValue({
  //     setLoginCreds,
  //     getCurrentUser,
  //     currentUser,
  //     errors,
  //   });
  //   useNavigate.mockReturnValue(jest.fn());
  // });

  test('should render Login component', () => {
    render(<Login />);

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  test('should update login state on input change', () => {
    render(<Login />);

    const usernameInput = screen.getByLabelText('username / email');
    const passwordInput = screen.getByLabelText('password');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(usernameInput).toHaveValue('testuser');
    expect(passwordInput).toHaveValue('testpassword');
  });

  test('should call getCurrentUser when form is submitted', () => {
    render(<Login />);

    const usernameInput = screen.getByLabelText('username / email');
    const passwordInput = screen.getByLabelText('password');
    const loginButton = screen.getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(loginButton);

    expect(getCurrentUser).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'testpassword',
    });
  });

  test('should navigate to /login if there are errors', async () => {
    // const mockErrors = [{ message: 'Login failed' }];
    // useAuth.mockReturnValue({
    //   setLoginCreds,
    //   getCurrentUser,
    //   currentUser,
    //   errors: mockErrors,
    // });

    render(<Login />);

    const usernameInput = screen.getByLabelText('username / email');
    const passwordInput = screen.getByLabelText('password');
    const loginButton = screen.getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(useNavigate).toHaveBeenCalledWith('/login');
    });
  });

  test('should navigate to / if there are no errors', async () => {
    render(<Login />);

    const usernameInput = screen.getByLabelText('username / email');
    const passwordInput = screen.getByLabelText('password');
    const loginButton = screen.getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(useNavigate).toHaveBeenCalledWith('/');
    });
  });
});
