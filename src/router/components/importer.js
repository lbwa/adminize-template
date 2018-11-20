export default function createImporters (components) {
  const importers = {}
  components.forEach(path => {
    const chunkName = createChunkName(path)
    if (!importers[chunkName]) {
      importers[chunkName] = () => import(
        /* webpackChunkName: 'async/[request][index]' */
        `SOURCE/${path}`
      )
    }
  })
  return importers
}

/**
 * @description lowerCase prefix letter and uppercase every words excluded
 * prefix letter
 * @param {String} path vue component path, based on `/src`
 * @return {String} A name used to import vue component
 */
function createChunkName (path) {
  const normalizePathSection = path.split('/').map((pathSection, index) => {
    return index === 0
      ? pathSection.replace(/^[A-Z]/, matchKey => matchKey.toLowerCase())
      : pathSection.replace(/^[a-z]/, matchKey => matchKey.toUpperCase())
  })
  return normalizePathSection.join('')
}
