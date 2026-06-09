import { ComponentProps } from 'react'

type AvatarTitleProps = ComponentProps<'strong'>

export const AvatarTitle = ({ children }: AvatarTitleProps) => {
  return <strong className="text-body-sm text-gray-200">{children}</strong>
}
