'use strict'

// const { readFileSync } = require('fs')
const path = require('path')
const version = require('./downloader')

const binPath = path.join(__dirname, '..', 'bin')
const detailsPath = path.join(binPath, 'details')

module.exports = () => {
  if (!existsSync(detailsPath)) {
    throw new Error('ERROR: unable to locate `you-get` at ' + binPath)
  }

  // const details = JSON.parse(readFileSync(detailsPath))

  return path.resolve(__dirname, '..', 'bin', `you-get-${version()}`, 'you-get')
}
