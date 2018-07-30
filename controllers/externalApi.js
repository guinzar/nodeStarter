const axios = require('axios');
 
module.exports = (req, res) => {
  const user = req.query.user;
  if (user && typeof user === 'string') {
    axios.get(`https://api.playstory.co/user/${user}/games`)
    .then(response => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      res.status(500).send('Failed api call');
    });
  } else {
    res.status(400).send('no user param');
  }
};
