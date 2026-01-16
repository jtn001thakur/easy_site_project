const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management APIs (Admin only)
 */

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 example: Shirt
 *               price:
 *                 type: number
 *                 example: 2000
 *     responses:
 *       201:
 *         description: Product created successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Access denied
 */
router.post("/", auth, role("ADMIN"), createProduct);

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all products
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Access denied
 */
router.get("/", auth, role("ADMIN"), getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated Shirt
 *               price:
 *                 type: number
 *                 example: 2500
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       404:
 *         description: Product not found
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Access denied
 */
router.put("/:id", auth, role("ADMIN"), updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Access denied
 */
router.delete("/:id", auth, role("ADMIN"), deleteProduct);

module.exports = router;
