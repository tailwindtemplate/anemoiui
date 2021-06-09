import { useState } from "react";
import { PreviewButton } from "../src/elements/button";
import { PreviewTextInput } from "../src/elements/inputs/text-input";
import { PreviewNumberInput } from "../src/elements/inputs/number-input";
import { PreviewAutocompleteInput } from "../src/elements/inputs/autocomplete-input";
import { PreviewSelect } from "../src/elements/select";
import { PreviewTextarea } from "../src/elements/textarea";
import { PreviewAvatar } from "../src/elements/avatar";
import { PreviewRadio } from "../src/elements/radio";
import { PreviewCheckbox } from "../src/elements/checkbox";

export default function Home() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <PreviewButton />
      <PreviewNumberInput />
      <PreviewTextInput />
      <PreviewAutocompleteInput />
      <PreviewSelect />
      <PreviewTextarea />
      <PreviewAvatar />
      <PreviewRadio />
      <PreviewCheckbox />
    </div>
  );
}
