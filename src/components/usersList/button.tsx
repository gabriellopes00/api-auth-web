import { EnumType } from 'typescript'

interface IBtn {
  action: string
}

export const button: React.FC<IBtn> = (props: IBtn) => {
  return <button className="">{props.action}</button>
}
