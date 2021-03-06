const mongoose = require('mongoose');

const InfractionSchema = new mongoose.Schema({
	guild: {
		type: String,
		required: true,
	},
	// The user who recieved the infraction
	target: {
		type: String,
		required: true,
	},
	// The ID of the user who issued the infraction
	moderator: {
		type: String,
		required: true,
	},
	reason: {
		type: String,
		required: true,
	},
}, {
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	},
});

InfractionSchema.index({
	guild: 1,
	target: 1,
});

module.exports = InfractionSchema;
