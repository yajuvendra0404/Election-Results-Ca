import Express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv' 
import mongoose, { Model } from 'mongoose';
import csvtojson from "csvtojson";
import orderBy from "lodash/orderBy";
import ElectionController from "./controllers/electionController";
import formidableMiddleware from "express-formidable";
import DataSchema from './schema/electionDataSchema';
import Ielection from './interfaces/electionInterface';
class Initialize {
    private app:Express.Application;
    constructor(){
        this.app = Express();
        dotenv.config();
        mongoose.pluralize(null);
        this.initializeMiddleware()
        this.initializeConnection()
        this.addData()
    }
    initializeMiddleware (){
        this.app.use(morgan('tiny'));
        this.app.use(Express.json());
        this.app.use(Express.urlencoded({ extended: true }));
        this.app.use(formidableMiddleware({
            encoding: 'utf-8',
            uploadDir: './uploadedFile',
        }));
        this.app.use('/', new ElectionController().route);
    }
    initializeConnection() {
        mongoose.connect("mongodb"+process.env.MONGO_DB_CONNECTION_STRING_LOCAL);
        let PORT = process.env.PORT;
        this.app.listen(PORT, ()=>{
            console.log(`
            --------------------------------------
            --------------------------------------
                    listening on port ${PORT}
            --------------------------------------
            --------------------------------------
            ` );
        })    
    }
    addData() {
        console.log("current working dir ----",process.cwd());// a very good way to log current working DIR
        csvtojson()
        .fromFile("./data/pollresults_resultatsbureau35001.csv")
        .then(async (jsonObj) => {
            let sortedJson = await orderBy( jsonObj,
                ["Candidate_First_Name", "Candidate_Family_Name"],
                ["asc", "asc"]
            );
            const Data = mongoose.model<Ielection>(sortedJson[0].Electoral_District_Name, DataSchema);
                try {
                    Data.insertMany(sortedJson);
                } catch (exp) {
                    console.log("exception", exp);
                }
            });
    }
}

export default Initialize;
