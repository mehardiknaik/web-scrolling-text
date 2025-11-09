/**
 * Test setup file for configuring the test environment
 */

// Polyfill for MessageChannel (needed for React 19)
if (typeof global.MessageChannel === 'undefined') {
  global.MessageChannel = class MessageChannel {
    port1 = {
      onmessage: null,
      postMessage: function() {},
      close: function() {},
    };
    port2 = {
      onmessage: null,
      postMessage: function() {},
      close: function() {},
    };
  } as any;
}

// Setup JSDOM
global.document = document;
global.window = window;
