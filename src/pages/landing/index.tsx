import { FormComponent } from '../../components/form/index'
import { private_key } from '../../hooks/login/isLogged'
import { browserHistory } from '../../hooks/history'

import { login } from '../../hooks/login/login'

export const Landing: React.FC = () => {
  return (
    <div className="bg-grey-200 ">
      <FormComponent />
      <button
        className="bg-black"
        onClick={() => {
          login(private_key)
          browserHistory.push('/dashboard')
        }}
      >
        Login
      </button>
    </div>
  )
}
