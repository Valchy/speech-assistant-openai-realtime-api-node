import fs from 'fs';

// Add logging configuration
const LOG_FILE = 'server.log';

// Create a logging utility that does both console and file logging
const log = (message, isError = false) => {
	const timestamp = new Date().toISOString();
	const logMessage = `${timestamp}: ${message}\n`;

	// Console output
	if (isError) {
		console.error(message);
	} else {
		console.log(message);
	}

	// File logging
	try {
		fs.appendFileSync(LOG_FILE, logMessage);
	} catch (error) {
		// Continue execution despite logging failure
		console.error('Failed to write to log file:', error);
	}
};

// Default export
export default log;
