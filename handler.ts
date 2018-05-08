'use strict';

export function hello(event, context, callback) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from typescript',
      input: event,
    }),
  };

  callback(null, response);
};
