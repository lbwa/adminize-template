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

function createChunkName (path) {
  const normalizePathSection = path.split('/').map((pathSection, index) => {
    return index === 0
      ? pathSection.replace(/^[A-Z]/, matchKey => matchKey.toLowerCase())
      : pathSection.replace(/^[a-z]/, matchKey => matchKey.toUpperCase())
  })
  return normalizePathSection.join('')
}
