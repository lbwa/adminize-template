import createImporters from './importer'
import constant from './constant'
import dynamic from './dynamic'

export const constantComponents = createImporters(constant)
export const dynamicComponents = createImporters(dynamic)
export const plainExport = () => import('COMPONENTS/RouteExport')
