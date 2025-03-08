import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CustomSelectProps {
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
  onValueChange?: (value: string) => void;
}

export default function CustomSelect({
  options,
  placeholder = "انتخاب کنید",
  className = "",
  onValueChange,
}: CustomSelectProps) {
  return (
    <Select onValueChange={onValueChange} dir="rtl">
      <SelectTrigger className={`w-[180px] ${className}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
