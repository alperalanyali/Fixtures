const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FurnitureCategorySchema = new Schema({
    name:{
        type:String,
        require:true
    },
    furniture_category_id:{
        type:mongoose.Schema.Types.ObjectId,
    }
})

const Furniture= mongoose.model('User',UserSchema);


module.exports = Furniture;