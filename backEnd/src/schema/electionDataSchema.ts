import { Schema } from "mongoose";


const DataSchema =  new Schema({
    Electoral_District: {type: String, trim: true},
    Electoral_District_Name: {type: String, trim: true},
    Electors_for_Polling_Station: {type:String, trim: true},
    Candidate_Family_Name: {type:String, trim: true},
    Candidate_Middle_Name: {type:String, trim: true},
    Candidate_First_Name: {type:String, trim: true},
    Political_Affiliation_Name_English: {type:String, trim: true},
    Candidate_Poll_Votes_Count: {type:String, trim:true},
});


export default DataSchema;
