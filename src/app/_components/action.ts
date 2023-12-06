"use server";
import dbConnect from "../../../lib/dbconnect";
import User from "../../../models/User";

export async function myAction(prevState: any, formData: FormData) {
  await dbConnect();

  const name = formData.get("name");
  const email = formData.get("email");
  const tel = formData.get("Telefone");
  const description = formData.get("description");

  // console.log({ name, email, tel, description });
  const data = {
    name: name,
    email: email,
    tel: tel,
    description: description,
  };

  await User.create(data);
  console.log(data);

  return {
    ...prevState,
    message: "From Submitted Successfully :)",
  };
}
