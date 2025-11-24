import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  redirect("/dashboard");
  return <div>page</div>;
};

export default page;

// "use client";
// import { useRouter } from "next/navigation";
// import React, { useEffect } from "react";

// const page = () => {
//   const router = useRouter();

//   useEffect(() => {
//     router.push("/dashboard");
//   }, []);

//   return <div>page</div>;
// };

// export default page;
