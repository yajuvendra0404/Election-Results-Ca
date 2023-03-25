import csvtojson from "csvtojson";
import lodash from "lodash";
import Express, { Router } from "express";
import path  from "path";

class ElectionController {
    route:Router;

    constructor() {
        this.route = Express.Router();
        this.electionRoutes();
    }

    electionRoutes = () => {
        // this.route.post('/electionData',(req,res)=> {
        //     if(req.files && req.fields){
        //         console.log('--request files--', req.files.csv_File);
        //         console.log('---req fileds---', req.fields);
        //     }

        //     const { orderBy } = lodash;
        //     csvtojson()
        //     .fromFile("./data/pollresults_resultatsbureau35001.csv")
        //     .then((jsonObj) => {
        //         let sortedJson = orderBy(
        //         jsonObj,
        //         ["Candidate_First_Name", "Candidate_Family_Name:"],
        //         ["asc", "asc"]
        //         );
        //     });
        // })
        // this.route.get('/electionData',(req,res)=> {
        //     console.log("get data --------");
        // })
    }
}

export default ElectionController;
