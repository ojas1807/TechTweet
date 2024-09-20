import mongoose, { mongo } from "mongoose";
import {  newsRef, userRef } from "../utils/strings.js";

const newsSchema=mongoose.Schema({
    headline:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,},
    url:{type:String,required:true},
    comments: [{ comment: { type: String }, user: { type: mongoose.Schema.Types.ObjectId, ref: userRef } }],

},{timestamps:true});

const News=mongoose.model(newsRef,newsSchema);
export default News;

