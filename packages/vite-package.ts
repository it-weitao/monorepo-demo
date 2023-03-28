import { join } from 'path'
import { UserConfig } from 'vite'

export default function getVitePackageConfig(entry: string, dir: string): UserConfig {
  return {
    resolve: {
      alias: {
        '@': join(dir, 'src'),
      },
    },
    build: {
      lib: {
        entry,
        fileName: 'index',
        formats: ['es'],
      },
    },
  }
}
