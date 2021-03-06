const mongoose = require('mongoose');

const LevelReward = require('./LevelReward');
const CommandOption = require('./CommandOption');

const { snowflake, restrictions } = require('../../mongoParts');

const pluginDefaults = {
	state: {
		type: String,
		enum: ['disabled', 'enabled'],
		default: 'disabled',
	},
	restrictions,
};

const filterDefaults = {
	action: {
		type: Number,
		default: 0,
	},
	exempt: {
		channels: [snowflake],
		roles: [snowflake],
	},
	sanction: {
		bots: {
			type: Boolean,
			default: false,
		},
		moderators: {
			type: Boolean,
			default: false,
		},
	},
};

/*
	The actual juice
*/
const SettingsSchema = new mongoose.Schema({
	id: {
		...snowflake,
		unique: true,
		required: true,
	},
	bot: {
		type: Boolean,
		// whether atlas is still in the server
		default: true,
	},
	// persistent tag storage, stored as [[key, value], [key, value]] for ez `new Map(persistent)`
	persistent: [[{
		type: String,
		required: true,
	}, {
		type: String,
		required: true,
	}]],
	// Server's prefix
	prefix: {
		type: String,
		default: process.env.DEFAULT_PREFIX,
	},
	// Servers preferred language
	lang: {
		type: String,
	},
	// Command options, this might have to move, who knows
	command_options: [CommandOption],
	// The juice
	plugins: {
		tickets: {
			...pluginDefaults,
			options: {
				message: {
					type: String,
					default: `{note;This is an advanced "advancedembed" tag to embed with an optional "reason" field. You can edit the embed through the "Enable Builder" button above, or just delete everything here and replace it with regular text.}

{a!ae;
  --footer="Thanks for being patient!";
  --timestamp;
  --description="Thanks for opening a support ticket, {user.mention;{ticket.author}}. We'll get back to you as soon as possible."
  ;{if;
    {ticket.reason};
    --field2name="Reason" --field2value="{ticket.reason}"
  }
}`,
				},
				category: snowflake,
				support: snowflake,
			},
		},
		// The role plugin, where you can let users give themselves roles, setup join roles and reaction roles. All the role things.
		roles: {
			...pluginDefaults,
			options: {
				join: [snowflake],
				iam: [snowflake],
				reactions: [{
					emoji: {
						type: String,
						required: true,
					},
					role: snowflake,
					channel: snowflake,
					message: snowflake,
				}],
				reaction_dm: {
					type: Boolean,
					default: true,
				},
			},
		},
		// info (previously "misc"), help commands, etc... - boring stuff.
		info: pluginDefaults,
		// Levels, users can level up and gain XP/role rewards.
		levels: {
			...pluginDefaults,
			options: {
				rewards: [LevelReward],
				stack: {
					type: Boolean,
					default: false,
				},
				notify: {
					enabled: {
						type: Boolean,
						default: true,
					},
					content: {
						type: String,
						default: 'Congratulations {user.mention}! You just advanced to **level {user.level}**!',
					},
					dm: {
						type: Boolean,
						default: false,
					},
				},
			},
		},
		// Music. What it says on the tin, you can listen to music in a voice channel.
		music: {
			...pluginDefaults,
			options: {
				small_msgs: {
					type: Boolean,
					default: false,
				},
				show_results: {
					type: Boolean,
					default: false,
				},
				hide_nowplaying: {
					type: Boolean,
					default: false,
				},
				player_buttons: {
					type: Boolean,
					default: true,
				},
			},
		},
		// Fun commands, mostly simple for shits and giggles.
		fun: pluginDefaults,
		// moderation, one of/the biggest plugins - filters, mutes, logging, a lot of moderation commands
		moderation: {
			...pluginDefaults,
			logs: {
				mod: snowflake,
				action: snowflake,
				error: snowflake,
			},
			mute_role: snowflake,
			filters: {
				// Chat filters
				phrases: {
					...filterDefaults,
					list: [{
						type: String,
						trim: true,
						lowercase: true,
					}],
				},
				// Chat filters
				cursing: {
					...filterDefaults,
					sexual: {
						type: Boolean,
						default: true,
					},
					insult: {
						type: Boolean,
						default: true,
					},
					discriminatory: {
						type: Boolean,
						default: true,
					},
				},
				// Excessive caps
				capitalization: {
					...filterDefaults,
					threshold: {
						type: Number,
						default: 75,
					},
				},
				// Excessive eomjis
				emoji: {
					...filterDefaults,
					threshold: {
						type: Number,
						default: 5,
					},
				},
				// Links
				links: {
					...filterDefaults,
					exclusions: [{
						type: String,
						required: true,
					}],
				},
				invites: {
					...filterDefaults,
				},
				mentions: {
					...filterDefaults,
					threshold: {
						type: Number,
						default: 5,
					},
				},
				spam: {
					...filterDefaults,
					threshold: {
						type: Number,
						default: 5,
					},
					time: {
						type: Number,
						default: 4000,
					},
				},
			},
		},
		// greetings for new members and soon probably some other stuff
		gatekeeper: {
			...pluginDefaults,
			dm: {
				enabled: {
					type: Boolean,
					default: false,
				},
				content: {
					type: String,
					default: 'Welcome to {guild.name} {user.mention}! Make sure to follow the rules and be respectful of other members.',
				},
			},
			channel: {
				enabled: {
					type: Boolean,
					default: false,
				},
				channel: snowflake,
				content: {
					type: String,
					default: '{user.mention} has joined {guild.name}. Make sure to give them a warm welcome!',
				},
			},
			leave: {
				enabled: {
					type: Boolean,
					default: false,
				},
				channel: snowflake,
				content: {
					type: String,
					default: '{user.mention} has left {guild.name} :c.',
				},
			},
		},
		// utilities, mostly simple commands like "fun" but not fun
		utilities: pluginDefaults,
	},
}, {
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt',
	},
});

SettingsSchema.index({
	id: 1,
});

module.exports = SettingsSchema;
