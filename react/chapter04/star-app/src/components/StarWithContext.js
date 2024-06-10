import React from 'react';
import { FaStar } from "react-icons/fa";
import { useColors } from "../ColorProvider";

export default function StarWithContext() {
  return (
    <>
      <FaStar
        color={selected ? "red" : "grey"}
        onClick={onRate()}
      />
    </>
  )
}
