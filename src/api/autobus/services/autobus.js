'use strict';

/**
 * autobus service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::autobus.autobus');
