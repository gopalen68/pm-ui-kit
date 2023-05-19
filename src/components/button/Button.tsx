import classNames from 'classnames'
import React from 'react'
import { useTheme } from '../../framework'
import { Size } from '../types'
import { ButtonStyleProps, ButtonVariant } from './types'

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonStyleProps

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = ButtonVariant.solid,
      size = Size.md,
      type = 'button',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { button } = useTheme()
    return (
      <button
        className={classNames(
          /* eslint-disable @typescript-eslint/ban-ts-comment */
          button.button.base,
          button.button.variantSize.base[size],
          // @ts-ignore
          button.button.variantSize[variant]?.[size],
          /* eslint-enable */
          className
        )}
        ref={ref}
        type={type}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
