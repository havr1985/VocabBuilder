import { z } from "zod";

function validateEmail(code: string) {
  const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailPattern.test(code);
}

function validatePassword(code: string) {
  const passwordPattern = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;
  return passwordPattern.test(code);
}

function validateEnField(code: string) {
  const enPattern = /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/;
  return enPattern.test(code)
}

function validateUaField(code: string) {
  const uaPattern = /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u;
  return uaPattern.test(code);
}

export const RegisterValSchema = z.object({
  name: z.string().min(2, "Too short !").max(100, "Too long !"),
  email: z.string().refine(validateEmail, "Invalid email !"),
  password: z.string().refine(validatePassword, "Invalide password !"),
});

export const LoginValSchema = z.object({
  email: z.string().refine(validateEmail, "Invalid email !"),
  password: z.string().refine(validatePassword, "Invalide password !"),
});

export const addWordValSchema = z.object({
  category: z.string(),
  isIrregular: z.boolean(),
  ua: z.string().refine(validateUaField, "Incorrect word!"),
  en: z.string().refine(validateEnField, "Incorrect word !"),
})

export type RegisterFields = z.infer<typeof RegisterValSchema>;
export type LoginFields = z.infer<typeof LoginValSchema>;
export type addWordField = z.infer<typeof addWordValSchema>;
