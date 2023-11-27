const checkAuth = (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect("/auth/login");
  }

  if (req.session.currentUser) {
    res.redirect("/auth/user-profile");
  } else {
    next();
  }
};

module.exports = { checkAuth };
