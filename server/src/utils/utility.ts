import { logger } from "./logger";
/**
 * Utility function to check wether if we are running on production or not.
 *
 * @param {string} running - the current enviroment.
 * @param {string} positive - in case of positive.
 * @param {string} negative - in case of negative.
 * @param {string} [env='production'] - the environment production by default.
 * @returns {string} if true returns positive else negative.
 */
export function is(
  running: string,
  positive: string,
  negative: string,
  env = "production"
): string {
  return env === running ? positive : negative;
}

export function logError(err) {
  for (const i of Object.keys(err)) {
    logger.error(err[i]);
  }
}
