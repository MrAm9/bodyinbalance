import { Fragment } from "react";

import { typograph } from "@/lib/typograph";

interface NoBreakWordsProps {
  text: string;
}

function toWords(text: string) {
  let offset = 0;
  return typograph(text)
    .split(" ")
    .map((word) => {
      const token = { word, offset };
      offset += word.length + 1;
      return token;
    });
}

// SplitText treats non-breaking spaces as wrap points, so words joined by them are wrapped explicitly
export function NoBreakWords({ text }: NoBreakWordsProps) {
  return toWords(text).map(({ word, offset }) => (
    <Fragment key={offset}>
      {offset > 0 && " "}
      <span className="whitespace-nowrap">{word}</span>
    </Fragment>
  ));
}
