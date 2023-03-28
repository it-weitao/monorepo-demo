import { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'

export default function getViteAppConfig(dir: string): UserConfig {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': join(dir, 'src'),
      },
    },
  }
}
