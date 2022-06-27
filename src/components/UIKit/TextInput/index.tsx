import classNames from "./style.module.scss";

type TextInputProps = {
  icon: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function TextInput({ icon, value, placeholder, onChange }: TextInputProps) {
  return (
    <div className={classNames["search-wrapper"]}>
      <img src={icon} alt="cart" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
