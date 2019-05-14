import validator from "validator";

export default function (router) {
  router.post("/auth/login", (req, res) => {
    // Login function
  });

  router.post("/auth/logout", (req, res) => {
    delete req.session.authUser;
    res.json({ok: true});
    // Logout function
  });

  router.post("/auth/register", (req, res) => {
    if (!validator.isEmail(req.body.email)) 
      res.json({status: "error", key: "email", msg: "Email is not valid"});
    else if (!(req.body.password === req.body.password2)) 
      res.json({status: "error", key: "password", msg: "Passwords do not match"});
    else if (!validator.matches(String(req.body.password), /(?=.*[0-9])/)) 
      res.json({status: "error", key: "password", msg: "The password must contain at least 1 numeric character"});
    else if (!(req.body.gender === "male" || req.body.gender === "female")) 
      res.json({status: "error", key: "gender", msg: "gender is needed"});
    else if (!validator.matches(String(req.body.firstName), /^[a-zA-Z]+$/)) 
      res.json({status: "error", key: "", msg: "A name can contain only Alpha Characters"});
    else if (!validator.matches(String(req.body.lastName), /^[a-zA-Z]+$/)) 
      res.json({status: "error", key: "", msg: "A surname can contain only Alpha Characters"});
    res.json({status: "success", msg: "success"});
  });
}
