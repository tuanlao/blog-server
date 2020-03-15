/* eslint-disable max-classes-per-file */
// @flow

import errors, { FeathersError } from '@feathersjs/errors';
import { omit } from 'lodash/fp';

// 400: BadRequest - Defined in @feathersjs/errors

// Overrides @feathersjs/errors/NotAuthenticated
class Unauthorized extends FeathersError {
  constructor(message, data) {
    super(message, 'Unauthorized', 401, 'unauthorized', data);
  }
}

// Overrides @feathersjs/errors/PaymentError
class PaymentRequired extends FeathersError {
  constructor(message, data) {
    super(message, 'PaymentRequired', 402, 'payment-required', data);
  }
}

// 403: Forbidden - Defined in @feathersjs/errors
// 404: NotFound - Defined in @feathersjs/errors
// 405: MethodNotAllowed - Defined in @feathersjs/errors
// 406: NotAcceptable - Defined in @feathersjs/errors

class ProxyAuthenticationRequired extends FeathersError {
  constructor(message, data) {
    super(
      message,
      'ProxyAuthenticationRequired',
      407,
      'proxy-authentication-required',
      data,
    );
  }
}

// Overrides @feathersjs/errors/Timeout
class RequestTimeout extends FeathersError {
  constructor(message, data) {
    super(message, 'RequestTimeout', 408, 'request-timeout', data);
  }
}

// 409: Conflict - Defined in @feathersjs/errors

class Gone extends FeathersError {
  constructor(message, data) {
    super(message, 'Gone', 410, 'gone', data);
  }
}

// 411: LengthRequired - Defined in @feathersjs/errors

class PreconditionFailed extends FeathersError {
  constructor(message, data) {
    super(message, 'PreconditionFailed', 412, 'precondition-failed', data);
  }
}

class PayloadTooLarge extends FeathersError {
  constructor(message, data) {
    super(message, 'PayloadTooLarge', 413, 'payload-too-large', data);
  }
}

class URITooLong extends FeathersError {
  constructor(message, data) {
    super(message, 'URITooLong', 414, 'uri-too-long', data);
  }
}

class UnsupportedMediaType extends FeathersError {
  constructor(message, data) {
    super(message, 'UnsupportedMediaType', 415, 'unsupported-media-type', data);
  }
}

class RequestedRangeNotSatisfiable extends FeathersError {
  constructor(message, data) {
    super(
      message,
      'RequestedRangeNotSatisfiable',
      416,
      'requested-range-not-satisfiable',
      data,
    );
  }
}

class ExpectationFailed extends FeathersError {
  constructor(message, data) {
    super(message, 'ExpectationFailed', 417, 'expectation-failed', data);
  }
}

// 418-420: Unassigned

class MisdirectedRequest extends FeathersError {
  constructor(message, data) {
    super(message, 'MisdirectedRequest', 421, 'misdirected-request', data);
  }
}

// Overrides @feathersjs/errors/Unprocessable
class UnprocessableEntity extends FeathersError {
  constructor(message, data) {
    super(message, 'UnprocessableEntity', 422, 'unprocessable-entity', data);
  }
}

class Locked extends FeathersError {
  constructor(message, data) {
    super(message, 'Locked', 423, 'locked', data);
  }
}

class FailedDependency extends FeathersError {
  constructor(message, data) {
    super(message, 'FailedDependency', 424, 'failed-dependency', data);
  }
}

// 425: Unassigned

class UpgradeRequired extends FeathersError {
  constructor(message, data) {
    super(message, 'UpgradeRequired', 426, 'upgrade-required', data);
  }
}

// 427: Unassigned

class PreconditionRequired extends FeathersError {
  constructor(message, data) {
    super(message, 'PreconditionRequired', 428, 'precondtion-required', data);
  }
}

// 429: TooManyRequests - Defined in @feathersjs/errors
// 430: Unassigned

class RequestHeaderFieldsTooLarge extends FeathersError {
  constructor(message, data) {
    super(
      message,
      'RequestHeaderFieldsTooLarge',
      431,
      'request-header-fields-too-large',
      data,
    );
  }
}

// 432-450: Unassigned

class UnavailableForLegalReasons extends FeathersError {
  constructor(message, data) {
    super(
      message,
      'UnavailableForLegalReasons',
      451,
      'unavailable-for-legal-reasons',
      data,
    );
  }
}

// 452-499: Unassigned

// Overrides @feathersjs/errors/GeneralError
class InternalServerError extends FeathersError {
  constructor(message, data) {
    super(message, 'InternalServerError', 500, 'internal-server-error', data);
  }
}

// 501: NotImplemented - Defined in @feathersjs/errors
// 502: BadGateway - Defined in @feathersjs/errors

// Overrides @feathersjs/errors/Unavailable
class ServiceUnavailable extends FeathersError {
  constructor(message, data) {
    super(message, 'ServiceUnavailable', 503, 'service-unavailable', data);
  }
}

class GatewayTimeout extends FeathersError {
  constructor(message, data) {
    super(message, 'GatewayTimeout', 504, 'gateway-timeout', data);
  }
}

class HTTPVersionNotSupported extends FeathersError {
  constructor(message, data) {
    super(
      message,
      'HTTPVersionNotSupported',
      505,
      'http-version-not-supported',
      data,
    );
  }
}

class VariantAlsoNegotiates extends FeathersError {
  constructor(message, data) {
    super(
      message,
      'VariantAlsoNegotiates',
      506,
      'variant-also-negotiates',
      data,
    );
  }
}

class InsufficientStorage extends FeathersError {
  constructor(message, data) {
    super(message, 'InsufficientStorage', 507, 'insufficient-storage', data);
  }
}

class LoopDetected extends FeathersError {
  constructor(message, data) {
    super(message, 'LoopDetected', 508, 'loop-detected', data);
  }
}

// 509: Unassigned

class NotExtended extends FeathersError {
  constructor(message, data) {
    super(message, 'NotExtended', 510, 'not-extended', data);
  }
}

class NetworkAuthenticationRequired extends FeathersError {
  constructor(message, data) {
    super(
      message,
      'NetworkAuthenticationRequired',
      511,
      'network-authentication-required',
      data,
    );
  }
}

// 512-599: Unassigned

export default {
  // Omit non-standard name errors
  ...omit([
    401,
    'NotAuthorized',
    402,
    'PaymentError',
    408,
    'Timeout',
    422,
    'Unprocessable',
    500,
    'GeneralError',
    503,
    'Unavailable',
  ])(errors),
  Unauthorized,
  PaymentRequired,
  ProxyAuthenticationRequired,
  RequestTimeout,
  Gone,
  PreconditionFailed,
  PayloadTooLarge,
  URITooLong,
  UnsupportedMediaType,
  RequestedRangeNotSatisfiable,
  ExpectationFailed,
  MisdirectedRequest,
  UnprocessableEntity,
  Locked,
  FailedDependency,
  UpgradeRequired,
  PreconditionRequired,
  RequestHeaderFieldsTooLarge,
  UnavailableForLegalReasons,
  InternalServerError,
  ServiceUnavailable,
  GatewayTimeout,
  HTTPVersionNotSupported,
  VariantAlsoNegotiates,
  InsufficientStorage,
  LoopDetected,
  NotExtended,
  NetworkAuthenticationRequired,
  // 400: BadRequest - Defined in @feathersjs/errors
  401: Unauthorized, // Overrides @feathersjs/errors/NotAuthenticated
  402: PaymentRequired, // Overrides @feathersjs/errors/PaymentError
  // 403: Forbidden - Defined in @feathersjs/errors
  // 404: NotFound - Defined in @feathersjs/errors
  // 405: MethodNotAllowed - Defined in @feathersjs/errors
  // 406: NotAcceptable - Defined in @feathersjs/errors
  407: ProxyAuthenticationRequired,
  408: RequestTimeout, // Overrides @feathersjs/errors/Timeout
  // 409: Conflict - Defined in @feathersjs/errors
  410: Gone,
  // 411: LengthRequired - Defined in @feathersjs/errors
  412: PreconditionFailed,
  413: PayloadTooLarge,
  414: URITooLong,
  415: UnsupportedMediaType,
  416: RequestedRangeNotSatisfiable,
  417: ExpectationFailed,
  // 418-420: Unassigned
  421: MisdirectedRequest,
  422: UnprocessableEntity, // Overrides @feathersjs/errors/Unprocessable
  423: Locked,
  424: FailedDependency,
  // 425: Unassigned
  426: UpgradeRequired,
  // 427: Unassigned
  428: PreconditionRequired,
  // 429: TooManyRequests - Defined in @feathersjs/errors
  // 430: Unassigned
  431: RequestHeaderFieldsTooLarge,
  // 432-450: Unassigned
  451: UnavailableForLegalReasons,
  // 452-499: Unassigned
  500: InternalServerError, // Overrides @feathersjs/errors/GeneralError
  // 501: NotImplemented - Defined in @feathersjs/errors
  // 502: BadGateway - Defined in @feathersjs/errors
  503: ServiceUnavailable, // Overrides @feathersjs/errors/Unavailable
  504: GatewayTimeout,
  505: HTTPVersionNotSupported,
  506: VariantAlsoNegotiates,
  507: InsufficientStorage,
  508: LoopDetected,
  // 509: Unassigned
  510: NotExtended,
  511: NetworkAuthenticationRequired,
  // 512-599: Unassigned
};
