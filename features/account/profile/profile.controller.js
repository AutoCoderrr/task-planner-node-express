import jwt from "jsonwebtoken";
export const getUserDetails = (req, res) => {
  //console.log("Req.Headers: ", req.headers);
  const { authorization } = req.headers;
  // Validate Token
  let user = null;
  try {
    user = jwt.verify(authorization, "RahulPancholi");
  } catch (err) {
    user = { message: "Invalid Token" };
  }

  return res.send({ message: authorization, user });
};