/**
 * @fileoverview gRPC-Web generated client stub for backend
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.backend = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.backend.UsersClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.backend.UsersPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.backend.UsersClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.backend.UsersClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.User,
 *   !proto.backend.User>}
 */
const methodInfo_Users_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.User,
  /** @param {!proto.backend.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.User.deserializeBinary
);


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Users/Add',
      request,
      metadata,
      methodInfo_Users_Add,
      callback);
};


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.User>}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersPromiseClient.prototype.add =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.add(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.UserRequest,
 *   !proto.backend.User>}
 */
const methodInfo_Users_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.User,
  /** @param {!proto.backend.UserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.User.deserializeBinary
);


/**
 * @param {!proto.backend.UserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Users/Get',
      request,
      metadata,
      methodInfo_Users_Get,
      callback);
};


/**
 * @param {!proto.backend.UserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.User>}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersPromiseClient.prototype.get =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.get(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.User,
 *   !proto.backend.User>}
 */
const methodInfo_Users_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.User,
  /** @param {!proto.backend.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.User.deserializeBinary
);


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Users/Update',
      request,
      metadata,
      methodInfo_Users_Update,
      callback);
};


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.User>}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersPromiseClient.prototype.update =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.update(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.User,
 *   !proto.backend.UserList>}
 */
const methodInfo_Users_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.UserList,
  /** @param {!proto.backend.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.UserList.deserializeBinary
);


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.UserList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.UserList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Users/List',
      request,
      metadata,
      methodInfo_Users_List,
      callback);
};


/**
 * @param {!proto.backend.User} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.UserList>}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersPromiseClient.prototype.list =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.list(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.backend.UserRequest,
 *   !proto.backend.User>}
 */
const methodInfo_Users_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.backend.User,
  /** @param {!proto.backend.UserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.backend.User.deserializeBinary
);


/**
 * @param {!proto.backend.UserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.backend.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.backend.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/backend.Users/Delete',
      request,
      metadata,
      methodInfo_Users_Delete,
      callback);
};


/**
 * @param {!proto.backend.UserRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.backend.User>}
 *     The XHR Node Readable Stream
 */
proto.backend.UsersPromiseClient.prototype.delete =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.delete(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.backend;

