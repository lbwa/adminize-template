import createImporters from './importer'
import constant from './ConstantConfig'
import dynamic from './DynamicConfig'

export const constantComponents = createImporters(constant)
export const dynamicComponents = createImporters(dynamic)
export const plainExport = () => import('COMPONENTS/RouteExport')
