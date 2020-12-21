import './index.css'

import { private_key } from '../../hooks/login/privateKey'
import { browserHistory } from '../../hooks/history'
import { login } from '../../hooks/login/login'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export const FormComponent: React.FC = () => {
  return (
    <div className="w-5/6 h-5/6 flex items-center">
      <form className="w-full h-full p-9 flex items-center justify-center flex-col">
        <div className=" w-full flex items-center justify-center flex-col">
          <div className=" w-full mb-4 flex flex-col">
            <label
              htmlFor="name"
              className="text-green-600 uppercase text-base"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Gabriel Lopes"
              className="w-full h-9 p-4 bg-gray-100 text-gray-900 rounded-md shadow-lg focus:ring focus:ring-green-600 focus:ring-2"
            />
          </div>

          <div className=" w-full mb-4 flex flex-col">
            <label
              htmlFor="email"
              className="text-green-600 uppercase text-base"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="gabriel@example.com"
              className="w-full h-9 p-4 bg-gray-100 text-gray-900 rounded-md shadow-lg focus:ring focus:ring-green-600 focus:ring-2"
            />
          </div>
        </div>

        <div className="flex items-center flex-col w-full justify-around">
          <div className=" w-full mb-4 flex flex-col">
            <label
              htmlFor="password"
              className="text-green-600 uppercase text-base"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="**********"
              className="w-full h-9 p-4 bg-gray-100 text-gray-900 rounded-md shadow-lg focus:ring focus:ring-green-600 focus:ring-2"
            />
          </div>

          <div className=" w-full mb-4 flex flex-col">
            <label
              htmlFor="avatarUrl"
              className="text-green-600 uppercase text-base"
            >
              AvatarUrl
            </label>
            <input
              type="url"
              name="avatarUrl"
              placeholder="https://myimage.png"
              className="w-full h-9 p-4 bg-gray-100 text-gray-900 rounded-md shadow-lg focus:ring focus:ring-green-600 focus:ring-2"
            />
          </div>
        </div>

        <div className="w-full flex items-center flex-col justify-around">
          <div className="w-full mt-3 flex flex-col">
            <button
              className="w-full bg-green-600 h-9 text-green-50 uppercase rounded-md shadow-lg hover:bg-green-500 transition"
              onClick={() => {
                login(private_key)
                browserHistory.push('/dashboard')
              }}
            >
              Send Data
              <FontAwesomeIcon className="ml-2" icon="share-square" />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
