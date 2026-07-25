import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { courseSchema, type CourseFormData } from "../schemas/courseSchema";



interface CourseFormProps {
  initialData?: CourseFormData;
  onSubmit: (data: CourseFormData) => Promise<void>;
  submitText: string;
}

function CourseForm({
  initialData,
  onSubmit,
  submitText,
}: CourseFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: initialData,
  });

  

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
      await onSubmit(data);
      reset();
    })}
      className="space-y-5 rounded-xl bg-white p-6 shadow"
    >
      <div>
        <label className="mb-1 block font-medium">Title</label>
        <input
          {...register("title")}
          className="w-full rounded-lg border p-2"
        />
        <p className="text-sm text-red-500">{errors.title?.message}</p>
      </div>

      <div>
        <label className="mb-1 block font-medium">Description</label>
        <textarea
          {...register("description")}
          className="w-full rounded-lg border p-2"
          rows={4}
        />
        <p className="text-sm text-red-500">
          {errors.description?.message}
        </p>
      </div>

      <div>
        <label className="mb-1 block font-medium">Instructor</label>
        <input
          {...register("instructor")}
          className="w-full rounded-lg border p-2"
        />
        <p className="text-sm text-red-500">
          {errors.instructor?.message}
        </p>
      </div>

      <div>
        <label className="mb-1 block font-medium">Duration</label>
        <input
          {...register("duration")}
          className="w-full rounded-lg border p-2"
          placeholder="e.g. 30 Hours"
        />
        <p className="text-sm text-red-500">
          {errors.duration?.message}
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? "Saving..." : submitText}
      </button>
    </form>
  );
}

export default CourseForm;