var fs = require('fs')

function envBoolean(name, fallback) {
	var value = process.env[name];
	if (value === undefined) {
		return fallback;
	}
	return /^(1|true|yes|on)$/i.test(value);
}

function envNumber(name, fallback) {
	var value = process.env[name];
	if (value === undefined || value === '') {
		return fallback;
	}
	var parsed = Number(value);
	return isNaN(parsed) ? fallback : parsed;
}

var config = {
		server: {
			port: envNumber('PORT', 3000),
			host: process.env.HOST || '127.0.0.1',
			useHttps: envBoolean('USE_HTTPS', false),
			trackVisits: envBoolean('TRACK_VISITS', false),
			https: {
				keyPath: process.env.HTTPS_KEY_PATH || '',
				certPath: process.env.HTTPS_CERT_PATH || ''
			},
			appDirectory: __dirname,
			publicDirectory: 'public',
			routesDirectory: 'routes',
			miscDirectory: 'misc',
			logDirectory: 'logs',
			index: 'index.html',
			schedule: 'schedule.html',
			resume: 'doc/Resume - Eric Wadkins - Spring 2021.pdf',
            thesis: 'https://dspace.mit.edu/handle/1721.1/123121',
			p1: 'doc/Computer_Vision_Tools_NV_Centers.pdf',
			p2: 'doc/Utility_Programs_NV_Centers.pdf',
			p3: 'doc/Smart_Microscopy.pdf',
            signature: 'img/signature_transparent.png',
			dashboard: 'dashboard/index.html',
			collage: 'dashboard/collage/index.html',
			gas: 'dashboard/gas/index.html',
            map: 'map.html',
            analytics: 'analytics.html',
		},    
		db: {
			connect: envBoolean('DB_CONNECT', false),
			hostname: process.env.DB_HOSTNAME || 'ds059165.mongolab.com',
	        port: envNumber('DB_PORT', 59165),
	        mainDb: process.env.DB_NAME || 'heroku_h5zdpd40',
	        useSSL: envBoolean('DB_USE_SSL', false),
	        required: envBoolean('DB_REQUIRED', false),
	        authenticate: envBoolean('DB_AUTHENTICATE', true),
	        authentication: {
	            username: process.env.DB_USERNAME || 'admin',
	            password: process.env.DB_PASSWORD || 'd0gd4ys'
	        },
	        collections: {
	        	users: 'users',
	        	active: 'active',
	        	pending: 'pending',
	        	inactive: 'inactive',
	        	oauthAccessTokens: 'oauthAccessTokens'
	        }
	    },
	    
	    remindDelayHours: 24,
	    
	    appClientId: 'app',
	    appClientSecret: 'd0gd4ys',
	    
	    array: array,
	    object: object
}

function array(contents) {
	return {
		type: 'array',
		contents: contents
	}
}

function object(contents) {
	return {
		type: 'object',
		contents: contents
	}
}

module.exports = config;
