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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SwitchDatabaseRestApi) {
      root.SwitchDatabaseRestApi = {};
    }
    root.SwitchDatabaseRestApi.ListOrder = factory(root.SwitchDatabaseRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ListOrder model module.
   * @module model/ListOrder
   * @version 1.2.1
   */

  /**
   * Constructs a new <code>ListOrder</code>.
   * @alias module:model/ListOrder
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListOrder} obj Optional instance to populate.
   * @return {module:model/ListOrder} The populated <code>ListOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('by')) {
        obj['by'] = ApiClient.convertToType(data['by'], 'String');
      }
    }
    return obj;
  }

  /**
   * Order types: ASC, DESC
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Column name.
   * @member {String} by
   */
  exports.prototype['by'] = undefined;



  return exports;
}));

