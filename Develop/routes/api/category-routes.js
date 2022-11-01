const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Find all categories and its associated products
router.get('/', (req, res) => {
  Category.findAll({
      include: [{
        model: Product
      }]
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});


// Find one category by its id value and its associated products

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

// Create new category
router.post('/', (req, res) => {
  // create a new category
});

// Update category by its id value
router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

// Delete category by its id value
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
