import mongoose from 'mongoose';

const launchesSchema = new mongoose.Schema({
  flightNumber: { type: Number, required: true },
  launchDate: { type: Date, required: true },
  mission: { type: String, required: true },
  rocket: { type: String, required: true },
  target: {type: String, required: true},
  upcoming: {type: Boolean, required: true},
  success: {type: String, required: true, default: true},
  customers: [{type: String, required: true}],
});

export default mongoose.model('Launch', launchesSchema);