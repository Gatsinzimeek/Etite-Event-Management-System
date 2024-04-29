import mongoose from "mongoose";
import { Schema } from "mongoose";

const EventSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    Date: {
        type: Date,
        require: true
    },
    EndTime: {
        type: String,
        require: true,
    },
    StartTime: {
        type: String,
        require: true,
    },
    Location: {
        type: String,
        require: true,
    }
})

const EventModel = mongoose.model('Event', EventSchema);

export default EventModel;
