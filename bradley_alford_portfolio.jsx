import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-16 bg-[#f9f8f6] text-[#2c2c2c]">

      {/* Hero Section */}
      <section className="text-center space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-4xl font-bold text-[#4b0d0d]"
        >
          Bradley Alford
        </motion.h1>
        <p className="text-lg text-[#5a5a5a]">
          Student web designer & developer helping local businesses stand out online.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button variant="outline" className="border-[#73000a] text-[#73000a] hover:bg-[#f3eaea]">
            <ArrowRight className="mr-2 h-4 w-4" /> See My Work
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#4b0d0d]">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-full md:w-1/3">
            <div className="overflow-hidden rounded-xl w-full h-64 bg-[#e6dede]" />
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <p className="text-[#333] text-lg">
              I'm Bradley, a junior Computer Science major at the University of South Carolina and a freelance web designer
              based in Columbia, SC. I started building websites because I love creating things that are useful, clear, and simple.
              I know that a lot of small business owners don’t have the time or desire to figure out websites — that’s where I come in.
            </p>
            <p className="text-[#333] text-lg">
              My goal is to use what I’m learning in school to serve my community and gain real-world experience by helping
              small local businesses improve their presence online. My style is clean and focused — no fluff, just what works.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#4b0d0d]">Services</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#444]">
          <li><strong>Website Design</strong> – Simple, mobile-friendly layouts made for small businesses</li>
          <li><strong>Website Development</strong> – Clean code, fast loading, easy to manage</li>
          <li><strong>Ongoing Maintenance</strong> – Monthly support for edits, updates, and performance</li>
        </ul>
      </section>

      {/* Work Section (Placeholder) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#4b0d0d]">Portfolio</h2>
        <p className="text-[#555]">Projects will be added soon. Here’s a preview of the style and layout I build for clients.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <Card key={id} className="shadow-md rounded-2xl bg-white">
              <CardContent className="p-4">
                <div className="bg-[#e6dede] h-40 rounded-xl mb-3" />
                <h3 className="text-lg font-semibold text-[#2c2c2c]">Sample Business Site #{id}</h3>
                <p className="text-sm text-[#777]">Clean layout, mobile-friendly, quick load.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#4b0d0d]">Let’s Work Together</h2>
        <p className="text-[#333] text-lg">Reach out and let’s talk about your website goals. No pressure, just a conversation.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="shadow rounded-2xl bg-white">
            <CardContent className="p-4 flex items-center gap-4">
              <Mail className="text-[#5a5a5a]" />
              <a href="mailto:alford@sc.edu" className="text-[#2c2c2c] hover:underline">alford@sc.edu</a>
            </CardContent>
          </Card>
          <Card className="shadow rounded-2xl bg-white">
            <CardContent className="p-4 flex items-center gap-4">
              <Phone className="text-[#5a5a5a]" />
              <a href="tel:+18435161213" className="text-[#2c2c2c] hover:underline">(843) 516-1213</a>
            </CardContent>
          </Card>
        </div>

        <div className="pt-4">
          <Button variant="secondary" className="bg-[#73000a] hover:bg-[#5a0008] text-white">
            <Calendar className="mr-2 h-4 w-4" /> Book a Call (optional)
          </Button>
        </div>

        <p className="mt-6 text-center text-lg font-semibold text-[#4b0d0d] bg-[#f1eaea] rounded-xl p-4">
          Interested? Contact me for a custom quote — I’ll make it easy, affordable, and personal.
        </p>
      </section>

      {/* Footer */}
      <footer className="pt-12 text-center text-sm text-[#999]">
        © {new Date().getFullYear()} Bradley Alford. Built in Columbia, SC.
      </footer>

    </main>
  );
}
