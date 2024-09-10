const fs = require('fs')

const path = 'arquivo.txt'

try {
    fs.unlinkSync(path)
} catch (error) {
    console.error(error)
}
