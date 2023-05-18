import classNames from 'classnames'
import React from 'react'
// import { useTheme } from '../../framework'

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  // eslint-disable-next-line react/prop-types
  ({ type = 'button', className, children, ...props }, ref) => {
    // const { button } = useTheme()
    return (
      <button
        className={classNames(className)}
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
