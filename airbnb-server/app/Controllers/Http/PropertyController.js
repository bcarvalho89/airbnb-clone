'use strict'

const Property = use('App/Models/Property');

/**
 * Resourceful controller for interacting with properties
 */
class PropertyController {
  /**
   * Show a list of all properties.
   * GET properties
   */
  async index ({ request, response, view }) {
    const properties = Property.all();

    return properties;
  }

  /**
   * Create/save a new property.
   * POST properties
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single property.
   * GET properties/:id
   */
  async show ({ params, request, response, view }) {
    const property = await Property.find(params.id);

    if (!property) {
      return response.status(404).json({ message: 'Property not found' });
    }

    await property.load('images');

    return response.json(property);
  }

  /**
   * Update property details.
   * PUT or PATCH properties/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a property with id.
   * DELETE properties/:id
   */
  async destroy ({ params, request, response, auth }) {
    const property = await Property.find(params.id);

    if (!property) {
      return response.status(404).json({ message: 'Property not found' });
    }

    if (property.user_id !== auth.user.id) {
      return response.status(401).send({ message: 'Not authorized' });
    }

    await property.delete();
  }
}

module.exports = PropertyController
