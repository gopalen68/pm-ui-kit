import {
  AnchorHTMLAttributes,
  ComponentType,
  createContext,
  forwardRef,
  ForwardRefRenderFunction,
  useContext,
} from 'react'

export type LinkComponentProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  internal?: boolean
} & Record<string, unknown>

export const makeLinkComponent = (
  render: ForwardRefRenderFunction<HTMLAnchorElement, LinkComponentProps>
) => ({ __forwardRef__: forwardRef(render) } as const)

export type LinkComponent =
  | ReturnType<typeof makeLinkComponent>
  | ComponentType<LinkComponentProps>

export const DefaultLinkComponent = makeLinkComponent((props, ref) => (
  <a ref={ref} {...props} />
))

export const LinkComponentContext =
  createContext<LinkComponent>(DefaultLinkComponent)

export function useLinkComponent() {
  const linkComponent = useContext(LinkComponentContext)

  if ('__forwardRef__' in linkComponent) {
    return linkComponent.__forwardRef__
  }

  return linkComponent
}
