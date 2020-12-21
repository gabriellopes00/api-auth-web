import { ListRow } from './row'

export const UserList: React.FC = () => {
  const numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  return (
    <div className="md:px-32 py-8 w-full">
      <div className="shadow-xl overflow-scroll h-96 rounded border-b border-green-600">
        <table className="min-w-full bg-white">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm">
                Name
              </th>
              <th className="w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm">
                Email
              </th>
              <th className="text-center py-3 px-4 uppercase font-semibold text-sm">
                ID
              </th>
              <th className="text-center py-3 px-4 uppercase font-semibold text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {numbers.map(number => {
              return (
                <ListRow
                  userName="Gabriel Lopes"
                  userEmail="gabriel@example.com"
                  userId="5fe09f69565b57217002e2db"
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
