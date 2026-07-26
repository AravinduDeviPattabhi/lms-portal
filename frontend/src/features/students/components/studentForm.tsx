import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Label from "../../../components/ui/Label";

import {
  studentSchema,
  type StudentFormData,
} from "../schemas/studentSchema";

interface StudentFormProps {
  defaultValues?: StudentFormData;
  onSubmit: (data: StudentFormData) => void;
  loading?: boolean;
}

export default function StudentForm({
  defaultValues,
  onSubmit,
  loading = false,
}: StudentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-lg bg-white p-6 shadow"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>First Name</Label>
          <Input {...register("firstName")} />
          <p className="text-sm text-red-500">
            {errors.firstName?.message}
          </p>
        </div>

        <div>
          <Label>Last Name</Label>
          <Input {...register("lastName")} />
          <p className="text-sm text-red-500">
            {errors.lastName?.message}
          </p>
        </div>
      </div>

      <div>
        <Label>Email</Label>
        <Input type="email" {...register("email")} />
        <p className="text-sm text-red-500">
          {errors.email?.message}
        </p>
      </div>

      <div>
        <Label>Phone</Label>
        <Input {...register("phone")} />
        <p className="text-sm text-red-500">
          {errors.phone?.message}
        </p>
      </div>

      <div>
        <Label>Gender</Label>

        <select
          {...register("gender")}
          className="w-full rounded-md border p-2"
        >
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </select>

        <p className="text-sm text-red-500">
          {errors.gender?.message}
        </p>
      </div>

      <div>
        <Label>Date of Birth</Label>
        <Input
          type="date"
          {...register("dateOfBirth")}
        />
        <p className="text-sm text-red-500">
          {errors.dateOfBirth?.message}
        </p>
      </div>

      <div>
        <Label>Address</Label>
        <Input {...register("address")} />
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Student"}
      </Button>
    </form>
  );
}