"use client"
import { motion } from "framer-motion"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Mental Health Awareness",
      description: "A dynamic, ongoing initiative delivering mental health support across communities, disaster-affected areas, security forces, schools, and corporate environments.",
      details: [
        "Group and individual counseling sessions",
        "Mental health awareness workshops",
        "Stigma reduction campaigns",
        "Support for domestic violence survivors",
        "Child and adolescent mental health programs"
      ]
    },
    {
      title: "Child Development and Education",
      description: "Holistic support program for children from primary school through career-building years.",
      subPrograms: [
        {
          name: "After School Support",
          desc: "Academic help and skill-building activities in a safe environment",
          activities: ["Homework assistance", "Academic tutoring", "Life skills development"]
        },
        {
          name: "Play and Learn",
          desc: "Interactive education through games and creative activities",
          activities: ["Educational games", "Art and craft sessions", "Story-telling workshops"]
        },
        {
          name: "Festivals Together",
          desc: "Cultural celebration and nutritious meal programs",
          activities: ["Cultural events", "Festival celebrations", "Community meals"]
        },
        {
          name: "WASH Training",
          desc: "Water, Sanitation, and Hygiene education with practical resources",
          activities: ["Hygiene workshops", "Sanitation awareness", "Clean water initiatives"]
        },
        {
          name: "Aanganwadi Activities",
          desc: "Early childhood development and nutritional support",
          activities: ["Nutritional programs", "Early education", "Health monitoring"]
        }
      ]
    },
    {
      title: "Women Empowerment and Skill Development",
      description: "Comprehensive initiative fostering independence and resilience among women.",
      subPrograms: [
        {
          name: "Skill Development Trainings",
          desc: "Practical skills like stitching and tailoring",
          activities: ["Vocational training", "Entrepreneurship workshops", "Skill certification"]
        },
        {
          name: "Menstrual Hygiene Trainings",
          desc: "Education and resources for menstrual health",
          activities: ["Health education", "Resource distribution", "Awareness workshops"]
        },
        {
          name: "Financial Literacy Trainings",
          desc: "Essential financial skills and planning",
          activities: ["Basic accounting", "Budget planning", "Investment awareness"]
        }
      ]
    },
    {
      title: "Disaster Response",
      description: "Rapid response and support for communities affected by natural disasters.",
      initiatives: [
        {
          name: "Wayanad Landslide Response",
          activities: [
            "Distribution of ration & hygiene kits",
            "Menstrual hygiene training for women",
            "Child support through art and play therapy",
            "Technical support for mental health counseling"
          ]
        },
        {
          name: "Healthcare Support Program",
          desc: "Providing oxygen concentrators to government health facilities"
        },
        {
          name: "Winter Care Program",
          desc: "Distribution of blankets in Kashmir during extreme winter conditions"
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Programs
      </motion.h1>

      <div className="space-y-16">
        {programs.map((program, idx) => (
          <motion.section 
            key={program.title}
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-yellow-500 mb-4">{program.title}</h2>
            <p className="text-gray-600 mb-6">{program.description}</p>
            
            {program.details && (
              <ul className="list-disc list-inside mb-6 space-y-2">
                {program.details.map((detail, index) => (
                  <li key={index} className="text-gray-700">{detail}</li>
                ))}
              </ul>
            )}

            {program.subPrograms && (
              <div className="grid md:grid-cols-2 gap-6"> 
                {program.subPrograms.map((sub) => (
                  <div key={sub.name} className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-yellow-500 mb-3">{sub.name}</h3>
                    <p className="text-gray-600 mb-4">{sub.desc}</p>
                    {sub.activities && (
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {sub.activities.map((activity, index) => (
                          <li key={index}>{activity}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {program.initiatives && (
              <div className="space-y-6 mt-6">
                {program.initiatives.map((initiative) => (
                  <div key={initiative.name} className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-yellow-500 mb-3">{initiative.name}</h3>
                    {initiative.desc && <p className="text-gray-600 mb-4">{initiative.desc}</p>}
                    {initiative.activities && (
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {initiative.activities.map((activity, index) => (
                          <li key={index}>{activity}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.section>
        ))}
      </div>
    </div>
  )
}
