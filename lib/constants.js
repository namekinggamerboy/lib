module.exports.disableWords = [
	'0',
	'no',
	'disable',
	'reset',
	'false',
	'off',
];

module.exports.enableWords = [
	'1',
	'yes',
	'enable',
	'true',
	'on',
];

module.exports.colors = [{
	name: 'RED',
	hex: '#F44336',
	light: false,
}, {
	name: 'PINK',
	hex: '#E91E63',
	light: false,
}, {
	name: 'PURPLE',
	hex: '#9C27B0',
	light: false,
}, {
	name: 'DEEP PURPLE',
	hex: '#673AB7',
	light: false,
}, {
	name: 'INDIGO',
	hex: '#3F51B5',
	light: false,
}, {
	name: 'BLUE',
	hex: '#2196F3',
	light: false,
}, {
	name: 'LIGHT BLUE',
	hex: '#03A9F4',
	light: false,
}, {
	name: 'CYAN',
	hex: '#00BCD4',
	light: false,
}, {
	name: 'TEAL',
	hex: '#009688',
	light: false,
}, {
	name: 'GREEN',
	hex: '#4CAF50',
	light: false,
}, {
	name: 'LIGHT GREEN',
	hex: '#8BC34A',
	light: false,
}, {
	name: 'LIME',
	hex: '#CDDC39',
	light: true,
}, {
	name: 'YELLOW',
	hex: '#FFEB3B',
	light: true,
}, {
	name: 'AMBER',
	hex: '#FFC107',
	light: true,
}, {
	name: 'ORANGE',
	hex: '#FF9800',
	light: true,
}, {
	name: 'DEEP ORANGE',
	hex: '#FF5722',
	light: false,
}, {
	name: 'BROWN',
	hex: '#795548',
	light: false,
}, {
	name: 'GREY',
	hex: '#9E9E9E',
	light: false,
}, {
	name: 'BLUE GREY',
	hex: '#607D8B',
	light: false,
}, {
	name: 'ROLE DEFAULT',
	hex: '#4f545c',
	light: false,
}];

module.exports.permissions = {
	all: [
		'createInstantInvite',
		'kickMembers',
		'banMembers',
		'administrator',
		'manageChannels',
		'manageGuild',
		'addReactions',
		'viewAuditLogs',
		'voicePrioritySpeaker',
		'readMessages',
		'sendMessages',
		'sendTTSMessages',
		'manageMessages',
		'embedLinks',
		'attachFiles',
		'readMessageHistory',
		'mentionEveryone',
		'externalEmojis',
		'voiceConnect',
		'voiceSpeak',
		'voiceMuteMembers',
		'voiceDeafenMembers',
		'voiceMoveMembers',
		'voiceUseVAD',
		'changeNickname',
		'manageNicknames',
		'manageRoles',
		'manageWebhooks',
		'manageEmojis',
		'all',
		'allGuild',
		'allText',
		'allVoice',
	],
	names: {
		createInstantInvite: 'Create Invite',
		kickMembers: 'Kick Members',
		banMembers: 'Ban Members',
		administrator: 'Administrator',
		manageChannels: 'Manage Channels',
		manageGuild: 'Manage Guild',
		addReactions: 'Add Reactions',
		readMessages: 'Read Messages',
		sendMessages: 'Send Messages',
		SendTTSMessages: 'Send TTS Messages',
		manageMessages: 'Manage Messages',
		embedLinks: 'Embed Links',
		attachFiles: 'Embed Files',
		readMessageHistory: 'Read Message History',
		mentionEveryone: 'Mention Everyone',
		externalEmojis: 'External Emojis',
		voiceConnect: 'Connect to Voice',
		voiceSpeak: 'Speak in Voice',
		voiceMuteMembers: 'Mute Voice Members',
		voiceUseVAD: 'Use VAD',
		changeNickname: 'Change Nickname',
		manageNicknames: 'Manage Nicknames',
		manageRoles: 'Manage Roles',
		manageWebhooks: 'Manage Webhooks',
		manageEmojis: 'Manage Emojis',
	},
};
