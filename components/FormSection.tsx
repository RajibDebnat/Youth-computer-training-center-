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
    <section id="contact" className=" relative   mx-auto ">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c03914" fillOpacity="1" d="M0,192L34.3,170.7C68.6,149,137,107,206,122.7C274.3,139,343,213,411,218.7C480,224,549,160,617,117.3C685.7,75,754,53,823,37.3C891.4,21,960,11,1029,42.7C1097.1,75,1166,149,1234,181.3C1302.9,213,1371,203,1406,197.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
    </div>

<div className=" px-12 pb-12 max-lg:px-6 max-lg:pb-6 max-sm:p-0" >
        <SectionHeading>
            Contact Us
        </SectionHeading>


      
        <div className=" relative  border-[1px] mx-auto p-6  border-slate-300 rounded-2xl max-w-[600px]  ">
  
            
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
</div>
     
    </section>
  );
}

export default FormSection;
