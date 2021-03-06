const {
  ContactsHE: ContactsHEModel,
  ContactsME: ContactsMEModel,
} = require('../models/ContactsDocs')

class ContactsDocs–°ontroller {
  constructor(model) {
    this.model = model
  }
  getOne = async (req, res) => {
    try {
      const item = await this.model.findOne()
      res.status(200).json(item)
    } catch (error) {
      res.status(500).json(error.message)
      throw new Error(error.message)
    }
  }
  getItems = async (req, res) => {
    try {
      const items = await this.model.find().sort({ index: 1 })
      res.status(200).json(items)
    } catch (error) {
      res.status(500).json(error.message)
      throw new Error(error.message)
    }
  }
}

const ContactsHE = new ContactsDocs–°ontroller(ContactsHEModel)
const ContactsME = new ContactsDocs–°ontroller(ContactsMEModel)

module.exports = { ContactsHE, ContactsME }
