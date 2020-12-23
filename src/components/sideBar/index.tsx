import { useHistory } from 'react-router-dom'
import { logout } from '../../hooks/login/logout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export const SideBar: React.FC = () => {
  const { goBack } = useHistory()
  return (
    <div className="absolute top-0 h-16 w-screen block lg:h-screen lg:w-16 lg:min-w-16 bg-green-600">
      <button
        onClick={() => {
          logout('privateKey')
          goBack()
        }}
        className="flex items-center justify-center p-2 w-12 h-12 mt-2 lg:mt-2 mx-1 rounded-md bg-green-800 text-gray-100 hover:shadow-lg hover:bg-green-900 transition"
      >
        <FontAwesomeIcon icon="angle-double-left" />
      </button>
    </div>
  )
}
