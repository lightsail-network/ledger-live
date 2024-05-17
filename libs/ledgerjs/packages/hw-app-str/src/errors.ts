import { createCustomErrorClass } from "@ledgerhq/errors";

/**
 * Error thrown when hash signing is not enabled on the device.
 */
export const StellarHashSigningNotEnabledError = createCustomErrorClass(
  "HashSigningNotEnabledError",
);

/**
 * Error thrown when data parsing fails.
 *
 * For example, when parsing the transaction fails, this error is thrown.
 */
export const StellarDataParseError = createCustomErrorClass("DataParseError");

/**
 * Error thrown when the user refuses the request on the device.
 */
export const StellarUserRefusedRequestError = createCustomErrorClass("UserRefusedRequestError");

/**
 * Error thrown when the data length is incorrect, for example, when the data
 * length exceeds the maximum payload size that the device can accept.
 */
export const StellarWrongDataLengthError = createCustomErrorClass("WrongDataLengthError");
