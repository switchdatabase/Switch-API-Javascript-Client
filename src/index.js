/**
 * Switch Database REST API
 * Switch API is the primary endpoint of data sevices and Switch DB's platform. You can do adding, editing, deleting or listing data works to your database with query operations by using this low-level API based on HTTP.
 *
 * OpenAPI spec version: 1.2.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddResponse', 'model/Body', 'model/Error', 'model/ListOrder', 'model/SetResponse', 'model/WhereItem', 'api/AuthorizationApi', 'api/DBOperationsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AddResponse'), require('./model/Body'), require('./model/Error'), require('./model/ListOrder'), require('./model/SetResponse'), require('./model/WhereItem'), require('./api/AuthorizationApi'), require('./api/DBOperationsApi'));
  }
}(function(ApiClient, AddResponse, Body, Error, ListOrder, SetResponse, WhereItem, AuthorizationApi, DBOperationsApi) {
  'use strict';

  /**
   * Switch_API_is_the_primary_endpoint_of_data_sevices_and_Switch_DBs_platform__You_can_do_adding_editing_deleting_or_listing_data_works_to_your_database_with_query_operations_by_using_this_low_level_API_based_on_HTTP_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SwitchDatabaseRestApi = require('index'); // See note below*.
   * var xxxSvc = new SwitchDatabaseRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SwitchDatabaseRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SwitchDatabaseRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SwitchDatabaseRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.2.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AddResponse model constructor.
     * @property {module:model/AddResponse}
     */
    AddResponse: AddResponse,
    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body: Body,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ListOrder model constructor.
     * @property {module:model/ListOrder}
     */
    ListOrder: ListOrder,
    /**
     * The SetResponse model constructor.
     * @property {module:model/SetResponse}
     */
    SetResponse: SetResponse,
    /**
     * The WhereItem model constructor.
     * @property {module:model/WhereItem}
     */
    WhereItem: WhereItem,
    /**
     * The AuthorizationApi service constructor.
     * @property {module:api/AuthorizationApi}
     */
    AuthorizationApi: AuthorizationApi,
    /**
     * The DBOperationsApi service constructor.
     * @property {module:api/DBOperationsApi}
     */
    DBOperationsApi: DBOperationsApi
  };

  return exports;
}));
