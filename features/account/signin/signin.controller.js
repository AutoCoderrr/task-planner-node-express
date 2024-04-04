import jwt from "jasonwebtoken";

export const profile ={
    id: "1",
    email: "abc@gmail.com",
    password: "12345",
    name: "anshul",

};
export const signinUser = (req,res)=>{
    const {email,password} = req.body ;

    if (email !== profile.email || password !== profile.password) {
        return res
          .status(401)
          .send({ data: {}, meta: { message: "Your credentials are invalid" } });
      }

      const userToken = jwt.sign({id:profile.id}, "anshul");

      return res.status(200).send({
        data: {
          token: userToken
        },
        meta: { message: "You're logged in" }
      });
};