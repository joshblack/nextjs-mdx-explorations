"use client";

import { run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

interface Props {
  code: string;
}

export function MDXClient(props: Props) {
  return "client";
}
