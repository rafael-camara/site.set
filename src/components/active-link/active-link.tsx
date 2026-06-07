import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export function ActiveLink({ children, href, ...rest }: ActiveLinkProps) {
  const router = useRouter()
  const isCurrentPath =
    router.asPath === href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(String(rest.as))

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-blue-600',
        isCurrentPath && 'text-blue-500',
      )}
    >
      {children}
    </Link>
  )
}
