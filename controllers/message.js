const Message = require('../models/message');

exports.createMessage = (req, res) => {
  const message = new Message({
    expediteur: req.body.expediteur,
    destinataire: req.body.destinataire,
    contenu: req.body.contenu
  });

  message.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Message envoyé' });
    }
  });
};

exports.getAllMessages = (req, res) => {
  Message.find({}, (err, messages) => {
    if (err) {
      res.send(err);
    } else {
      res.json(messages);
    }
  });
};

exports.getMessagesFromExpediteur = (req, res) => {
  Message.find({ expediteur: req.params.expediteur }, (err, messages) => {
    if (err) {
      res.send(err);
    } else {
      res.json(messages);
    }
  });
};
