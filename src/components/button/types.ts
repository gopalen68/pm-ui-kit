// import { ComponentType } from 'react'
import { Size, Tone } from '../types'

export enum ButtonVariant {
  solid = 'solid',
  ghost = 'ghost',
  transparent = 'transparent',
}

export type ButtonStyleProps = {
  variant?: ButtonVariant
  size?: Size
  tone?: Tone
}
