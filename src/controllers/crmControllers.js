import Contact from "../models/crmModels";

export const addNewContact = async (req, res, next) => {
  const newContact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    company: req.body.company,
    phone: req.body.phone,
  });

  try {
    const saved = await newContact.save();
    if (saved) {
      res.status(200).json({
        status: "Success",
        data: saved,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: err,
    });
  }
};

export const getContact = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (contacts) {
      res.status(200).json({
        status: "Success",
        data: contacts,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: error,
    });
  }
};

export const getContactWithId = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.contactID);
    if (contact) {
      res.status(200).json({
        status: "Success",
        data: contact,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: error,
    });
  }
};

export const updateContact = async (req, res, next) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.params.contactID },
      req.body,
      { new: true, useFindAndModify: false }
    );
    if (contact) {
      res.status(200).json({
        status: "Success",
        data: contact,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: error,
    });
  }
};

export const DeleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.remove({ _id: req.params.contactID });
    if (contact) {
      res.status(200).json({
        status: "Success",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: error,
    });
  }
};
