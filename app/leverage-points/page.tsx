import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, FileText, Wifi, School } from "lucide-react"

export default function LeveragePointsPage() {
  const leveragePoints = [
    {
      title: "School Mental Health Programs",
      description:
        "Builds awareness early by embedding mental health education into the curriculum. School programs have proven highly effective in reducing student distress.",
      category: "Information Flows",
      icon: <School className="size-10" />,
      color: "bg-green-300",
    },
    {
      title: "Parent Workshops",
      description:
        "Targets the underlying mindset of families. Counseling parents to set realistic expectations can change the culture of success at all costs.",
      category: "Paradigms",
      icon: <Users className="size-10" />,
      color: "bg-sky-300",
    },
    {
      title: "Exam Policy Reform",
      description:
        "Alters formal school rules and goals. Decentralizing high-stakes exams or promoting skill-based evaluation addresses the root academic drivers of stress.",
      category: "Rules",
      icon: <FileText className="size-10" />,
      color: "bg-amber-300",
    },
    {
      title: "Tele-Mental Health",
      description:
        "Lowers barriers to help. India's Tele-MANAS helpline has handled 1.81 million calls since 2022, showing huge demand for accessible mental health services.",
      category: "Information Flows",
      icon: <Wifi className="size-10" />,
      color: "bg-green-300",
    },
    {
      title: "Social Media Literacy",
      description:
        "Teaches healthy social media use and critical thinking about online content. Countering the 'perfect life' narrative can reduce harmful peer comparison.",
      category: "Paradigms",
      icon: <BookOpen className="size-10" />,
      color: "bg-sky-300",
    },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">System Leverage Points</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Strategic intervention points that can create significant positive change in student mental health
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leveragePoints.map((point, index) => (
            <Card key={index} className="shadow-md border-0 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`${point.color} p-4 rounded-full mb-4`}>{point.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{point.title}</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm mb-4">
                    {point.category}
                  </span>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-md border-0 mt-12">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">System Archetypes Identified</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-800">Fixes That Fail</h3>
              <p className="text-gray-600">
                Students often resort to quick fixes (e.g. scrolling social media, pulling all-nighters) hoping to
                relieve stress. These "fixes" backfire: excessive media use and sleep deprivation actually increase
                anxiety and depression. The intended short-term relief fails and may worsen the original problem,
                trapping students in a vicious loop.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-800">Shifting the Burden</h3>
              <p className="text-gray-600">
                Current interventions tend to address symptoms (counseling sessions, medications) rather than systemic
                causes. For example, adding more therapy slots or psychiatric meds does not reduce the high-stakes exam
                culture or change family pressures. This reflects a "shifting the burden" archetype: relying on quick
                symptom relief while neglecting deeper change.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-800">Escalation</h3>
              <p className="text-gray-600">
                Intense competition acts as an escalating feedback loop. As some students excel (pushed by
                parents/schools), others feel pressure to catch up, leading parents and educators to push even harder.
                This mutual reinforcement raises anxiety levels across the board. In effect, each actor's drive to "win"
                academically escalates stress for all, resembling the "success to the successful" but with everyone
                locked in a rat race.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
