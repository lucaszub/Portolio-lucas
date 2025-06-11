import { workExperience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function BlogStructure() {
  return (
    <section
      id="experience"
      className=" bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container max-w-4xl">
        <MotionWrapper>
          <h2 className="text-2xl font-bold bg-green-500 mb-8 text-center  flex items-center md:inline-block">
            <motion.span
              className="inline-block mr-2 bg-red-500 "
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            ></motion.span>{" "}
            Work Experience
          </h2>
        </MotionWrapper>
      </div>
    </section>
  );
}
