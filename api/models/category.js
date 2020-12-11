const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    parent: { type: String },
    createdAt: Date,
    //createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' , default: '0001'},
    updatedAt: Date,
   // updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', default: '0001' }
});

module.exports = mongoose.model('Category', categorySchema);