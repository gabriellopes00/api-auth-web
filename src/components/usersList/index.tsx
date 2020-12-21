import { ListRow } from './row'

export const UserList: React.FC = () => {
  return (
    <div className="md:px-32 py-8 w-full">
      <div className="shadow overflow-x-scroll rounded border-b border-green-600">
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
            <ListRow
              userName="gabriel"
              userEmail="gabriel@example.com"
              userId="afjkfhuiahf"
            />
          </tbody>
        </table>
      </div>
    </div>
  )
}
