interface listRow {
  userName: string
  userEmail: string
  userId: string
}

export const ListRow: React.FC<listRow> = (props: listRow) => {
  return (
    <tr>
      <td className="w-1/3 text-center py-3 px-4">{props.userName}</td>
      <td className="w-1/3 text-center py-3 px-4">{props.userEmail}</td>
      <td className="text-center py-3 px-4">{props.userId}</td>
      <td className="text-center py-3 px-4">
        <div className="w-full flex items-center justify-around">
          <button className="p-2 bg-yellow-400 m-1 rounded-md text-gray-100">
            Edit
          </button>
          <button className="p-2 bg-red-600 m-1 rounded-md text-gray-100">
            Del
          </button>
        </div>
      </td>
    </tr>
  )
}
