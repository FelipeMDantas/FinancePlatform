"use client";

import { Select, SelectTrigger } from "./ui/select";

export const AccountFilter = () => {
  return (
    <Select>
      <SelectTrigger
        className="lg:w-auto w-full h-9 rounded-md px-3 font-normal bg-white/10 hover:bg-white/20
      hover:text-white border-none focus:ring-offset-0 focus:ring-transparent outline-none text-white
      focus:bg-white/30 transition"
      ></SelectTrigger>
    </Select>
  );
};
