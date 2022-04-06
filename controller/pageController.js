exports.getRegisterPage = (req, res) => {
    res.status(200).render('register', {
      pageName: 'register',
    });
  };
  
  exports.getLoginPage = (req, res) => {
    res.status(200).render('login', {
      pageName: 'login',
    });
  };
  