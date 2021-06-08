import React, { InputHTMLAttributes } from 'react';
import clsx from "clsx";

type AutocompleteInput = {
  suggestions?: any;
  className?: string
  inputClassName?: string
  suggestionClassName?: string
};

export default function AutocompleteInput({ suggestions, inputClassName, className, suggestionClassName, ...rest }: AutocompleteInput & InputHTMLAttributes<{}>) {
  const [activeSuggestion, setActiveSuggestion] = React.useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [userInput, setUserInput] = React.useState("");

  const onChange = (e: any) => {
    const userInput = e.currentTarget.value;
    const filteredSuggestions = suggestions?.filter(
      (suggestion: any) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    setUserInput(e.currentTarget.value);
  };

  const onKeyDown = (e: any) => {
    // the enter key
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion]);
    }
    // the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      setActiveSuggestion(activeSuggestion - 1);
    }
    // the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  const onClick = (e: any) => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
  };

  const suggestionsListComponent = () => {
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        return (
          <ul className="border my-4 rounded-2xl w-80">
            {filteredSuggestions.map((suggestion, index) => {
              return (
                <li
                  className={clsx(
                    index === activeSuggestion
                      ? "bg-primary-500 text-white hover:bg-primary-400"
                      : "",
                    "p-2 cursor-pointer hover:bg-primary-100"
                  )}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="my-2 text-neutral-600">
            <em>No suggestions!</em>
          </div>
        );
      }
    }
  };

  return (
    <div className={clsx("relative m-2", className)}>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
        className={clsx("w-80 py-2 text-sm rounded-xl px-4 focus:border-primary-400 focus:outline-none border h-14 placeholder-neutral-300", inputClassName)}
        placeholder='Type to show suggestions'
        {...rest}
      />
      <div className={clsx("transform absolute bottom-0 translate-y-full z-10 bg-white", suggestionClassName)}>
        {suggestionsListComponent()}
      </div>
    </div>
  );
}

export function PreviewAutocompleteInput() {
  return (
    <AutocompleteInput
      suggestions={[
        "Nguyễn Văn Anh",
        "Lê Thị Kim Cương",
        "Trần Mai Ngọc Ngà",
        "Huỳnh Văn Anh Đức",
        "Châu Ánh Nguyệt",
        "Võ Nguyễn Mai Thy",
        "Thái Văn Phong",
        "Nguyễn Ngọc Minh Thư",
        "Lê Mai Thanh Tâm",
        "Trần Trung Kiên"
      ]}
    />
  );
}
