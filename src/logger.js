import logger from 'feathers-logger';
import winston from 'winston';

export default app =>
  app.configure(
    logger(
      winston.createLogger({
        exitOnError: false,
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.splat(),
          winston.format.timestamp(),
          winston.format.printf(
            info => `${info.timestamp} [${info.level}] ${info.message}`,
          ),
        ),
        levels: { error: 0, warn: 1, info: 2, debug: 3 },
        level: 'debug',
        transports: [new winston.transports.Console()],
      }),
    ),
  );
