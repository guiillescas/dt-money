import { ThemeProvider } from 'styled-components'

import { defaultTheme } from 'styles/themes/default'

export const metadata = {
  title: 'DT money',
  description: 'Get full control of your finnces'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <ThemeProvider theme={defaultTheme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
