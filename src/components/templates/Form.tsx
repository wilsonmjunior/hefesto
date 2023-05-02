import { Button } from "../common/Button";

interface FormProps {
  children: React.ReactNode;
}

export function Form({ children }: FormProps) {
  return (
    <div className="container mx-auto p-7 rounded-lg border">
      <div className="">
        <p>Title</p>
      </div>

      <div>
        {children}
      </div>

      <div className="flex justify-end">
        <Button
          variant="outlined"
          color="gray"
          className="mr-2"
          title="Back"
        />
        <Button disabled title="Save" />
      </div>
    </div>
  )
}
