type InputType = "text" | "checkbox";

interface InputProps {
  type: InputType;
  label?: string;
  value?: string;
  checked?: boolean;
  onChange: (value: string | boolean) => void;
  placeholder?: string;
  ariaLabel?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  value,
  checked,
  onChange,
  placeholder,
  ariaLabel,
}) => {
  return (
    <div className="flex items-center gap-2">
      {label && <label className="text-sm font-medium">{label}</label>}
      {type === "text" && (
        <input
          aria-label={ariaLabel}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="border px-3 py-2 rounded w-full outline-none"
        />
      )}

      {type === "checkbox" && (
        <input
          aria-label="input"
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-8 h-8 border  rounded-2xl bg-white border-(--color-border) hover:border-white"
        />
      )}
    </div>
  );
};

export default Input;
