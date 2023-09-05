import React from "react";
import { useRouter } from "next/router";
import { Link , } from "next/link";
export default function index() {
  const router = useRouter();

  console.log(router.query);

  return <h1>[...router]</h1>;
}
