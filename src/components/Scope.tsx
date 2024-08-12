"use client";

import { createElement } from "react";

interface Props {
  scope: Record<string, any>;
}

export function Scope({ scope }: Props) {
  console.log(scope);
  return <>{createElement(scope.Client)}</>;
}
