import z from 'zod'

export const loginSchema = z.object({
    아이디: z.string().min(2, {
      message: "ID must be at least 2 characters.",
    }),
    비밀번호: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
  })