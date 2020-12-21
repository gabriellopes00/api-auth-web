import { UserList } from '../../components/usersList/index'
import { SideBar } from '../../components/sideBar/index'

export const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-300 w-screen h-full flex items-center justify-between">
      <SideBar />
      <div className="bg-gray-300 w-full h-screen p-8 pt-4 flex items-center justify-center ">
        <UserList />
      </div>
    </div>
  )
}
