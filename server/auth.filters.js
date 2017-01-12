const mustBeLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send('You must be logged in');
  }
  next();
};

const mustBeAdmin = (req, res, next) => {
  if (req.user.type !== 'admin') {
    return res.status(401).send('You must be an admin');
  }
  next();
};

const selfOnly = action => (req, res, next) => {
  if (req.params.id !== req.user.id) {
    return res.status(403).send(`You can only ${action} yourself.`);
  }
  next();
};

const forbidden = message => (req, res, next) => {
  res.status(403).send(message);
};

module.exports = { mustBeLoggedIn, mustBeAdmin, selfOnly, forbidden };
