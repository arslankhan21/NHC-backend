const conferenceRouter = require("express").Router();
const conferenceController = require("../../controllers/conferenceController");

// Create a new conference
conferenceRouter.post("/create", conferenceController.createConference);

// Update a conference by its ID
conferenceRouter.put("/update/:id", conferenceController.updateConference);

// Delete a conference by its ID
conferenceRouter.delete("/delete/:id", conferenceController.deleteConference);

// Get all conferences
conferenceRouter.get("/all", conferenceController.getAllConferences);
// Get a single conference by its ID
conferenceRouter.get("/:id", conferenceController.getConferenceById);

module.exports = conferenceRouter;
