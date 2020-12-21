import { useHistory } from 'react-router-dom'

export const SideBar: React.FC = () => {
  const { goBack } = useHistory()
  return (
    <div className="hidden lg:block h-screen w-16 min-w-16 bg-green-600">
      <button
        onClick={goBack}
        className="flex items-center justify-center p-2 w-12 mt-8 mx-1 rounded-md bg-green-800  text-gray-100 hover:shadow-lg transition hover:bg-green-900"
      >
        ❯
      </button>
    </div>
  )
}
