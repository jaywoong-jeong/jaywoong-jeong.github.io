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
      const figureClass = ['w-full', className].filter(Boolean).join(' ')
      const imageClass = imgClassName ?? 'w-full h-auto rounded-xl'
      return (
        <figure className={figureClass}>
          <img
            src={src}
            alt={alt}
            className={imageClass}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw, 800px"
          />
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
        <figure className="w-full">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-xl"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw, 800px"
          />
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
