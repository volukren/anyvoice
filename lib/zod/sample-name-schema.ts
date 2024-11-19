import { z } from "zod";

export const nameSchema = z
  .string()
  .min(2, { message: "Name must be at least 2 characters long" })
  .max(50, { message: "Name must be no more than 50 characters long" })
  .regex(/^[a-zA-Z0-9\s]+$/, {
    message: "Name can only contain Latin letters, numbers, and spaces",
  })
  .refine(
    (val) => {
      // Проверка, чтобы не было только пробелов
      const trimmedVal = val.trim();
      return trimmedVal.length > 0;
    },
    { message: "Name cannot consist only of spaces" },
  );
