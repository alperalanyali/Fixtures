const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FurnitureCategorySchema = new Schema({
    categoryName:{
        type:String,
        require:true
    },
    furnitures: [
        
    ]
})
const FurnitureCategory = mongoose.model('User',UserSchema);


module.exports = FurnitureCategory;