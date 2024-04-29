import mongoose from "mongoose";
import { Schema } from "mongoose";

const Booking = Schema({
    NumberOfticket: {
        type: Number,
        require: true,
    },
    UserBooked: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
    
}, {
    timestamps: true
})

const BookingModel = mongoose.model('Booking', Booking);

export default BookingModel;