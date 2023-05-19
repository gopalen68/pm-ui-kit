import { Source } from '@storybook/addon-docs'
import React, { ReactElement } from 'react'
import { defaultTheme } from '../../src/framework/theme/theme'

export function Theme({
  component,
  items,
}: {
  component: string
  items?: string[]
}): ReactElement {
  const theme = {
    [component]: items
      ? Object.fromEntries(
          // eslint-disable-next-line
          // @ts-ignore
          items.map((item) => [item, defaultTheme?.[component]?.[item]])
        )
      : defaultTheme?.[component],
  }

  return (
    <>
      <Source code={JSON.stringify(theme, null, 2)} language="json" />
    </>
  )
}