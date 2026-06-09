import { ComponentProps } from 'react'

type PostGridCardProps = ComponentProps<'div'>

export const PostGridCard = ({ children, ...rest }: PostGridCardProps) => {
  return (
    <div
      {...rest}
      className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {children}
    </div>
  )
}
