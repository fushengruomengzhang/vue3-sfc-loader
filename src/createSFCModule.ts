import { ModuleExport, Options, AbstractPath } from './types'

export declare function createSFCModule (source: string, filename: AbstractPath, options: Options, initialComponent?: ModuleExport): Promise<ModuleExport>

