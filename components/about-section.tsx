"use client";

import { CheckCircle, Award, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Every product is carefully selected and tested for excellence",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description:
        "Your satisfaction is our priority with personalized service",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge products that enhance your lifestyle",
    },
    {
      icon: CheckCircle,
      title: "Trusted Brand",
      description: "Years of experience delivering quality and reliability",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">
            Why Choose <span className="text-mi-primary">MI+</span>?
          </h2>
          <p className="font-body text-lg text-mi-secondary max-w-3xl mx-auto">
            We're committed to bringing you products that combine innovation,
            quality, and style. Our curated collection represents the best in
            modern design and functionality.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-mi-light-gray hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-mi-primary/10 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-mi-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-mi-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
