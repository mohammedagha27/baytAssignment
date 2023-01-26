// this middleware is created to send data to the /isLogged
// after checking that there is a verified token:
// as the main page is for both signed and unsigened user and data in it changes based in this info
const getLoggedData = (req, res) => {
  const { email, username, avatar, id } = req.user;
  res.json({ istoken: true, username, email, avatar, id });
};
module.exports = getLoggedData;
