import React from 'react'
import Link from 'next/link'
import { LinkProps } from '@/types/globalTypes'

const CommonLink: React.FC<LinkProps> = ({children, href, className = ''}) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</Link>
  )
}

export default CommonLink