



import { getSession } from "next-auth/react";
import React from "react";

const About =  async () => {
  const session =await getSession();

  console.log(session);
  
  return <div>his</div>;
};

export default About;
