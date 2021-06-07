import { useState } from "react";
import Button, { PreviewButton } from "../src/elements/button";
import Input, { PreviewTextInput } from "../src/elements/inputs/text-input";
import { PreviewNumberInput } from "../src/elements/inputs/number-input";
import { PreviewAutocompleteInput } from "../src/elements/inputs/autocomplete-input";
import Select, { PreviewSelect } from "../src/elements/select";
import { PreviewTextarea } from "../src/elements/textarea";
import { PreviewAvatar } from "../src/elements/avatar";

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
    </div>
  );
}
