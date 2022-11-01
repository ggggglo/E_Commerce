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
  Category.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: Product
      }]
    })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({
          message: 'No category found with this id!'
        });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
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
