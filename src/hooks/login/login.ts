import axios from 'axios'

export const login = async (email: string, password: string): Promise<void> => {
  const token = await axios.post('http://localhost:5050/users/auth', {
    email: email,
    password: password
  })

  localStorage.setItem('token', token.data.token)
}
