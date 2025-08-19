import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Figure: ({
      src,
      alt,
      caption,
      className,
      imgClassName,
    }: {
      src: string
      alt: string
      caption?: string
      className?: string
      imgClassName?: string
    }) => {
      return (
        <figure className={className}>
          <img src={src} alt={alt} className={imgClassName ?? 'rounded-xl'} />
          {caption ? (
            <figcaption className="mt-1 text-center text-sm text-zinc-500 dark:text-zinc-400">
              {caption}
            </figcaption>
          ) : null}
        </figure>
      )
    },
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="mt-1 text-center text-sm text-zinc-500 dark:text-zinc-400">{caption}</figcaption>
        </figure>
      )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
  }
}
