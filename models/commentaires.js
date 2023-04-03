var mongoose = require('mongoose');

var commentairesSchema = new mongoose.Schema({

    date_commentaires: {
        type: Date,
        default : ()=>{
          return new Date();
    }},
  
    id_annonceobjet:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'annonceobjetModel'
    },
    id_utilisateur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    },
    commentaires: {
        type: String,
        required: true
    }
});

var commentairesModel = mongoose.model('commentaires', commentairesSchema);
module.exports = commentairesModel;