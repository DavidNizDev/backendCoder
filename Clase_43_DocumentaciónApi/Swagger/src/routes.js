const { Router } = require('express')
const ProductController = require('./controllers/ProductController')

const routes = Router()

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: 'Server is on... '})
})

/**
 * @swagger
 * components:
 *  schemas:
 *      Product:
 *          type: object
 *          properties:
 *              title:
 *                  type: string
 *                  description: El nombre del producto
 *              description:
 *                  type: string
 *                  description: Una breve descripcion del producto
 *              price:
 *                  type: integer
 *                  description: Precio en pesos del producto
 *          required:
 *              - title
 *              - description
 *              - price
 *          example:
 *              title: Coca Cola del desierto
 *              description: Excelente bebida refrescante para limpiar los inodoros
 *              price: 14
 */


/**
 * @swagger
 * /products:
 *  post:
 *      summary: Registra un nuevo producto en el catálogo
 *      tags: [Product]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Product'
 */
routes.post('/products', ProductController.store)
routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.destroy)

module.exports = routes