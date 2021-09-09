const buildAdminRouter = require('./admin')
const mailRouter = require('./mail')
const areasRouter = require('./areas')
const subjectRouter = require('./subjects')
const instituteRouter = require('./institute')
const stepsRouter = require('./steps')
const newsRouter = require('./news')
const documentsInModalsRouter = require('./documents-in-modals')
const contactsRouter = require('./contacts')

module.exports = {
  buildAdminRouter,
  mailRouter,
  areasRouter,
  subjectRouter,
  instituteRouter,
  stepsRouter,
  newsRouter,
  documentsInModalsRouter,
  contactsRouter,
}
