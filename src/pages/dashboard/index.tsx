import { UserList } from '../../components/usersList/index'

// export const Dashboard: React.FC = () => {
//   return (
//     <div className="w-full h-full bg-grey-300">
//       <UserList />
//     </div>
//   )
// }

export const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-300 w-full h-screen flex items-center justify-center ">
      <UserList />
    </div>
  )
}
