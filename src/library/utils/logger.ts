import winston from 'winston';

/**
 * Logger setup using winston to log messages and errors.
 */
const logger = winston.createLogger({
  level: 'info', // Set default log level
  format: winston.format.combine(
    winston.format.colorize(), // Colorize the log messages
    winston.format.simple() // Simple format for logs
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: 'library.log' }) // Also log to file
  ]
});

export default logger;
