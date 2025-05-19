
import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <section className="section-padding">
          <FadeInSection>
            <SectionHeading 
              title="Let's Connect" 
              subtitle="Have a project in mind? Get in touch!"
              showGradient
              centered
            />
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">
            {/* Contact form */}
            <FadeInSection direction="left">
              <div className="bg-glassBgDark backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg p-6 md:p-8">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name <span className="text-secondary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-primary-light/30 rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-secondary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-primary-light/30 rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-primary-light/30 rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message <span className="text-secondary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-primary-light/30 rounded-lg border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                        required
                      />
                    </div>
                    
                    <div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-electric hover:shadow-glow-md transition-all"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <motion.div
                              className="w-4 h-4 border-2 border-white/80 border-t-transparent rounded-full mr-2"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </FadeInSection>

            {/* Contact info */}
            <FadeInSection direction="right">
              <div className="space-y-8">
                <div className="bg-glassBgDark backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Build Something Magical</h3>
                  <p className="text-white/80 mb-6">
                    Whether you have a project in mind or just want to say hello, I'd love to hear from you. 
                    Feel free to reach out through the contact form or via any of the channels below.
                  </p>
                  
                  <div className="space-y-4">
                    <a
                      href="mailto:info@example.com"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary-light/30 transition-colors"
                    >
                      <div className="bg-secondary/20 p-3 rounded-full">
                        <Mail className="text-secondary" size={20} />
                      </div>
                      <span>info@example.com</span>
                    </a>
                  </div>
                </div>

                <div className="bg-glassBgDark backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-light/50 p-4 rounded-lg flex flex-col items-center gap-2 hover:bg-secondary/30 transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={24} />
                      <span>GitHub</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-light/50 p-4 rounded-lg flex flex-col items-center gap-2 hover:bg-secondary/30 transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin size={24} />
                      <span>LinkedIn</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      </div>
    </Layout>
  );
}
