const Admin = require('./admin')
const Subject = require('./subjects')
const Area = require('./areas')
const TwoDiplomas = require('./twoDiplomas')
const Institute = require('./institutes')
const { BachelorStepsOptions, MagistracyStepsOptions } = require('./steps')
const News = require('./news')
const {
  BachelorDocumentsOptions,
  MagistracyDocumentsOptions,
  GraduateDocumentsOptions,
  SSEDocumentsOptions,
} = require('./documentsInModals')
const ContactsMain = require('./contactsMain')
const Contacts = require('./contacts')
const ContactsSecretary = require('./contactsSecretary')
const { ContactsHE, ContactsME } = require('./contactsDocs')
const YourStart = require('./yourStart')
const Uniqueness = require('./uniqueness')

module.exports = {
  Admin,
  Subject,
  Area,
  TwoDiplomas,
  Institute,
  BachelorStepsOptions,
  MagistracyStepsOptions,
  News,
  BachelorDocumentsOptions,
  MagistracyDocumentsOptions,
  GraduateDocumentsOptions,
  SSEDocumentsOptions,
  ContactsMain,
  Contacts,
  ContactsSecretary,
  ContactsHE,
  ContactsME,
  YourStart,
  Uniqueness,
}
