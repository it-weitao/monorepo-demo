import { join } from 'path'
import getVitePackageConfig from '../vite-package'

export default getVitePackageConfig(join(__dirname, 'src/index.ts'), __dirname)