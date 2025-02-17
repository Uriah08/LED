import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { 
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
 } from "../ui/form"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

import { loginSchema } from "../schema"

const LoginForm = () => {

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            아이디: "",
            비밀번호: "",
        },
      })

    function onSubmit(values: z.infer<typeof loginSchema>) {

        console.log(values)
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-[400px] w-full mt-10 flex flex-col justify-center">
        <FormField
          control={form.control}
          name="아이디"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs text-[#696969]">아이디</FormLabel>
              <FormControl>
                <Input {...field} className="rounded-none"/>
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="비밀번호"
          render={({ field }) => (
            <FormItem className="mt-3">
              <FormLabel className="text-xs text-[#696969]">비밀번호</FormLabel>
              <FormControl>
                <Input {...field} type='password' className="rounded-none"/>
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="place-self-center max-w-[280px] w-full rounded-none bg-[#4B4B4B] mt-10">로그인</Button>
        </form>
    </Form>
  )
}

export default LoginForm