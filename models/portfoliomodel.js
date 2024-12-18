import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const PortfolioSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },


}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

export default Portfolio;
