export function register(req, res, next) {
  res.json({ message: "Register controller", body: req.body });
}

export const login = (req,res,next) => {
  res.json({ message: "Login controller", body: req.body });
}

export const getMe = (req,res) => {
  res.json({ message: "getMe controller"});
}