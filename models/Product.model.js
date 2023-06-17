const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: false,
      unique: true
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      unique:true,
      trim:true,
      lowercase:true
    },{
      userId:{
        type: Schema.Type.objectId,
        ref: 'User'
      }
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Product = model("Product", productSchema);

module.exports = Product;