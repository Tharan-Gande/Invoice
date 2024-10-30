const express = require('express');
const Invoice = require('../Models/Invoice');
const router = express.Router();

router.post('/', async (req, res) => {
  const { items, billSundrys } = req.body;
  
  req.body.totalAmount = items.reduce((sum, item) => sum + item.amount, 0)
                            + billSundrys.reduce((sum, bs) => sum + bs.amount, 0);
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).json(invoice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;
