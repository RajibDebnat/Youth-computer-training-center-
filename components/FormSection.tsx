"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../src/components/ui/input";
import SectionHeading from "./parts/SectionHeading";
import { WavyBackground } from "./ui/wavy-background";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email format." }).regex(/@gmail\.com$/, {
    message: "Write A Valid Gmail",
  }),
});

function FormSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert(`Form Submitted Successfully!\nUsername: ${data.username}\nEmail: ${data.email}`);
  };

  return (
    <section id="contact" className=" relative  p-16  mx-auto max-md:p-8 max-sm:p-3">
    

        <SectionHeading>
            Contact Us
        </SectionHeading>


      
        <div className=" relative  border-[1px] mx-auto  p-6 border-slate-300 rounded-2xl max-w-[600px]  ">
  
            
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Youth Computer training Center" {...field} />
                </FormControl>
                <FormDescription>Make Yourself Future Ready, Connect With Us.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="youremail@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4">
            <Button type="button" className=" bg-slate-200 border-[1px] border-slate-400 "  variant="outline" onClick={() => form.reset()}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
 
            </div>
     
    </section>
  );
}

export default FormSection;
