import React from 'react'
import { IRegoProps } from '../SignUp/SignUp'
import { IUserDto } from '../../dtos/IUserDto'
import { useAuth } from '../../contexts/useAuth'
import { useNavigate } from 'react-router-dom'
import { DefaultButton } from '../../SharedComponents/SharedComponents'
import { ButtonsRow, CardCenteredCol, FormCenteredCol } from '../../SharedStyles/SharedStyles'

const Login = () => {
  const { setLoginCreds, currentUser, errors, getCurrentUser } = useAuth()!
  const [login, setLogin] = React.useState<IRegoProps>({
    username: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    })
  }

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await getCurrentUser(login)
    if (errors.length) {
      navigate('/login')
    } else {
      navigate('/')
    }
  }

  const goToSignUp = () => {
    navigate('/signup')
  }

  return (
    <CardCenteredCol>
      <h1>Login</h1>
      <FormCenteredCol onSubmit={handleSubmit}>
        <label>
          <input type="text" name="username" placeholder='username / email' onChange={handleChange} />
        </label>
        <label>
          <input type="password" name="password" placeholder='password' onChange={handleChange} />
        </label>
        <ButtonsRow>
          <DefaultButton type="submit" text="Login" />
          <DefaultButton text="Sign Up" onClick={goToSignUp} />
        </ButtonsRow>
      </FormCenteredCol>
      
    </CardCenteredCol>
  )
}

export default Login
