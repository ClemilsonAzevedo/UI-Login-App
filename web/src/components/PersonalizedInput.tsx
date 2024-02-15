import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";

interface PersonalizedInputProps {
  typeInput: string
  labelInput: string
  placeholder: string
}

export function PersonalizedInput({ typeInput, labelInput, placeholder }: PersonalizedInputProps) {

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor={typeInput}>{labelInput}</Label>
      <Input type={typeInput} name={typeInput} id={typeInput} placeholder={placeholder} />
    </div>
  )
}