import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
});

const rsvpSchema = new mongoose.Schema(
  {
    primaryName: { type: String, required: true, trim: true, maxlength: 100 },
    attendance:  { type: String, enum: ['solo', 'with_guest'], required: true },
    guests: {
      type: [guestSchema],
      default: [],
      validate: {
        validator: (arr) => arr.length <= 5,
        message: 'Maximum 5 additional guests',
      },
    },
    submittedAt: { type: Date, default: Date.now },
    ipAddress:   { type: String, default: '' },
  },
  { collection: 'rsvp_submissions' }
);

export const RsvpModel =
  mongoose.models.Rsvp ?? mongoose.model('Rsvp', rsvpSchema);
