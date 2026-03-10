// const mongoose=require("mongoose")
// const Schema=mongoose.Schema;


// const listingSchema=new Schema({
//     title:{
//         type:String,
//         require:true,
//     },
//     description:{
//         type:String,
//         require:true,
//     },
//     image:
//     {type:String,
//         default:"https://unsplash.com/photos/the-building-has-a-church-tower-in-the-background-WcFG8xeyLYc",
//         set:(v)=>v===""? 
//         "https://unsplash.com/photos/the-building-has-a-church-tower-in-the-background-WcFG8xeyLYc":v,
//     },
//     price:Number,
//     location:String,
//     country:String,
// });
// const Listing=mongoose.model("Listing",listingSchema)
// module.exports=Listing;
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// //all data we need
// const listingSchema = new Schema({
// title:{
//     type:String,
//     require:true,
// },
// description: String, 
// image:{
//         type:String,
//         set:(v)=>v ===""? "https://i.pinimg.com/736x/86/28/44/8628446445eb6c971d1546b3eadb33f4.jpg" : v,
// } ,
// price:Number,
// location: String,
// country: String,
// review:{
//     type:Schema.Types.ObjectId,
//     ref:"Review"
// }
// });

// const Listing = mongoose.model("Listing" , listingSchema);
// module.exports=Listing;
// 

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title:{
    type:String,
    required:true,
  },
  description:String,

  image:{
    url:String,
    filename:String,
  },

  price:Number,
  location:String,
  country:String,

  reviews:[
    {
      type:Schema.Types.ObjectId,
      ref:"Review"
    }
  ],

  owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  // category:{
  //   type:String,
  //   enum:["mountains","arctic","farms","deserts"]
  // }
});

listingSchema.post("findOneAndDelete", async (listing) => {

  if(listing){

    await Review.deleteMany({
      _id: { $in: listing.reviews }
    });

  }

});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;