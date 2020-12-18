export const FormComponent: React.FC = () => {
  return (
    <div className="h-screen">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Gabriel Lopes" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="gabriel@example.com" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="*****" />

        <label htmlFor="avatarUrl">AvatarUrl</label>
        <input type="url" name="avatarUrl" placeholder="https://myimage.png" />
      </form>
    </div>
  )
}
