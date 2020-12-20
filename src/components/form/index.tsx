import './index.css'

import { private_key } from '../../hooks/login/isLogged'
import { browserHistory } from '../../hooks/history'
import { login } from '../../hooks/login/login'

export const FormComponent: React.FC = () => {
  return (
    <div className="w-5/6 h-5/6 flex items-center">
      <form className="w-full h-full flex items-center justify-center flex-col p-9">
        <div className="flex items-center justify-center w-full flex-col">
          <div className="flex flex-col w-full mb-4">
            <label
              htmlFor="name"
              className="text-green-600 uppercase text-base"
            >
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="Gabriel Lopes"
              className="w-full h-9 p-4 bg-gray-100 text-gray-900 focus:ring focus:ring-green-600 focus:ring-2 rounded-md shadow-lg"
            />
          </div>

          <div className="flex flex-col w-full mb-4">
            <label
              htmlFor="email"
              className="text-green-600 uppercase text-base"
            >
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="gabriel@example.com"
              className="w-full h-9 p-4 bg-gray-100 text-gray-900 focus:ring focus:ring-green-600 focus:ring-2 rounded-md shadow-lg"
            />
          </div>
        </div>

        <div className="flex items-center flex-col w-full justify-around">
          <div className="flex flex-col w-full mb-4">
            <label
              htmlFor="password"
              className="text-green-600 uppercase text-base"
            >
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              placeholder="**********"
              className="w-full h-9 p-4 bg-gray-100 text-gray-900 focus:ring focus:ring-green-600 focus:ring-2 rounded-md shadow-lg"
            />
          </div>

          <div className="flex flex-col w-full mb-4">
            <label
              htmlFor="avatarUrl"
              className="text-green-600 uppercase text-base"
            >
              AvatarUrl
            </label>
            <input
              required
              type="url"
              name="avatarUrl"
              placeholder="https://myimage.png"
              className="w-full h-9 p-4 bg-gray-100 text-gray-900 rounded-md focus:ring focus:ring-green-600 focus:ring-2 rounded-md shadow-lg"
            />
          </div>
        </div>

        <div className="flex items-center flex-col w-full justify-around">
          <div className="flex flex-col w-full mt-3">
            <button
              className="w-full bg-green-600 h-9 text-green-50 hover:bg-green-500 transition uppercase rounded-md shadow-lg"
              onClick={() => {
                login(private_key)
                browserHistory.push('/dashboard')
              }}
            >
              Send Data
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
