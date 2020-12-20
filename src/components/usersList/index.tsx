export const UserList: React.FC = () => {
  return (
    <div className="w-full h-full">
      <table className="table-auto border-collapse border border-green-700">
        <thead>
          <tr>
            <th className="border border-green-600">Title</th>
            <th className="border border-green-600">Author</th>
            <th className="border border-green-600">Views</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intro to CSS</td>
            <td>Adam</td>
            <td>858</td>
          </tr>
          <tr className="bg-emerald-200">
            <td>
              A Long and Winding Tour of the History of UI Frameworks and Tools
              and the Impact on Design
            </td>
            <td>Adam</td>
            <td>112</td>
          </tr>
          <tr>
            <td>Intro to JavaScript</td>
            <td>Chris</td>
            <td>1,280</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
