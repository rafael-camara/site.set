import { ComponentProps } from 'react'

type AvatarDescriptionProps = ComponentProps<'div'>

export const AvatarDescription = ({ children }: AvatarDescriptionProps) => {
  return <div className="text-gray-300 text-body-xs">{children}</div>
}
