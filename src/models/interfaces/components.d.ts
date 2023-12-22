export interface IButton {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  type: "button" | "submit" | "reset";
}

export interface ITextInput {
  text: string;
  name: string;
  placeholder: string;
  hasError?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
