const mongoose = require('mongoose')
const {Schema} = mongoose

const photoSchema = new Schema({
  image: String,
  title: String,
  likes: Array,
  coments: Array,
  userId: mongoose.isObjectIdOrHexString,
  userName: String,
},
{
  timestamps: true
}
);