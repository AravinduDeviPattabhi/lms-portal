import { z } from "zod";

export const studentSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),

  email: z.string().email("Invalid email address"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits"),

  gender: z.enum(["MALE", "FEMALE", "OTHER"], {
    error: "Please select a gender",
  }),

  dateOfBirth: z.string().min(1, "Date of Birth is required"),

  address: z.string().optional(),
});

export type StudentFormData = z.infer<typeof studentSchema>;