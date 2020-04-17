import {
  addNewContact,
  getContact,
  getContactWithId,
  updateContact,
  DeleteContact,
} from "../controllers/crmControllers";
const routes = (app) => {
  app.route("/contact").get(getContact).post(addNewContact);

  app
    .route("/contact/:contactID")
    .get(getContactWithId)
    .put(updateContact)
    .delete(DeleteContact);
};

export default routes;
