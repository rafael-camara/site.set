import { ComponentProps } from 'react'

type AvatarContentProps = ComponentProps<'div'>

export const AvatarContent = ({ children }: AvatarContentProps) => {
  return <div className="flex flex-col">{children}</div>
}
