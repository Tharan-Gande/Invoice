const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  date: { type: String, required: true },
  invoiceNumber: { type: Number, unique: true },
  customerName: { type: String, required: true },
  billingAddress: { type: String, required: true },
  shippingAddress: { type: String, required: true },
  gstin: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  items: [{
    itemName: String,
    quantity: { type: Number, min: 0 },
    price: { type: Number, min: 0 },
    amount: Number,
  }],
  billSundrys: [{
    billSundryName: String,
    amount: Number,
  }],
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
