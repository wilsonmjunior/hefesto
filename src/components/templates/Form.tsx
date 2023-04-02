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
        <Button variant="outlined" color="none" className="mr-2">
          Back
        </Button>
        <Button disabled>
          Save
        </Button>
      </div>
    </div>
  )
}
