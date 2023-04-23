import React, { FC } from "react"
import { DefaultButton } from "../../SharedComponents/SharedComponents"
import { useNavigate } from "react-router-dom"
import { ButtonsRow, CardCenteredCol, FormCenteredCol } from "../../SharedStyles/SharedStyles"

export interface IRegoProps {
  username: string
  password: string
}

const SignUp: FC = () => {
  const [rego, setRego] = React.useState<IRegoProps>({
    username: "",
    password: "",
  })
  const [newUser, setNewUser] = React.useState<IRegoProps | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRego({
      ...rego,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rego)
    };

    try {
      await fetch("http://localhost:3000/user/signup", requestOptions)
        .then((res) => res.json())
        .then((data) => setNewUser(data))
        .then(() => navigate('/login'))
        .catch((err) => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login')
  }

  console.log(newUser)
  return (
    <CardCenteredCol>
      <h1>Sign Up</h1>
      <FormCenteredCol onSubmit={handleSubmit}>
        <label>
          <input type="text" name="username" placeholder='username / email' onChange={handleChange} />
        </label>
        <label>
          <input type="password" name="password" placeholder='password' onChange={handleChange} />
        </label>
        <ButtonsRow>
          <DefaultButton type="submit" text="Sign Up" />
          <DefaultButton text="Login" onClick={goToLogin} />
        </ButtonsRow>
      </FormCenteredCol>
    </CardCenteredCol>
  )
}

export default SignUp
