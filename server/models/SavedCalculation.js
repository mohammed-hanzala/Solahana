import mongoose from 'mongoose';

const savedCalculationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    calculatorType: {
      type: String,
      enum: ['sip', 'emi', 'retirement', 'lumpsum', 'fd', 'swp', 'goal', 'tax', 'inflation', 'education', 'home_affordability', 'emergency_fund'],
      required: true,
    },
    title: {
      type: String,
      default: 'My Calculation',
    },
    inputs: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    results: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    sessionId: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const SavedCalculation = mongoose.model('SavedCalculation', savedCalculationSchema);
export default SavedCalculation;
