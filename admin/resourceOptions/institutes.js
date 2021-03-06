const AdminJS = require('adminjs')
const { Institute } = require('../../models/Institute')

/** @type {AdminJS.ResourceOtions} */
const options = {
  listProperties: ['name', 'social'],
  editProperties: ['name', 'social', 'areas'],
  navigation: {
    icon: 'Education',
  },
  properties: {
    mimeType: { isVisible: true },
    areas: {
      isVisible: {
        show: true,
        view: true,
        edit: true,
        filter: true,
      },
    },
  },
}

module.exports = {
  options,
  resource: Institute,
}
