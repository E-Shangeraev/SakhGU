const {
  ContactsSecretary: ContactsSecretaryModel,
} = require('../models/ContactsSecretary')

class ContactsSecretary–°ontroller {
  getOne = async (req, res) => {
    try {
      const item = await ContactsSecretaryModel.findOne()
      res.status(200).json(item)
    } catch (error) {
      res.status(500).json(error.message)
      throw new Error(error.message)
    }
  }
}

module.exports = new ContactsSecretary–°ontroller()
