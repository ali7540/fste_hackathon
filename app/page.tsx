import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LoopCld from "../public/loopcld.jpeg"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Mental Health Among Urban Students
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Understanding the rise of anxiety and depression despite increased awareness and services
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-teal-500 hover:bg-teal-600">
                  <Link href="/screen-time">Explore Data</Link>
                </Button>
                <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
                  <Link href="/blog">Read Articles</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.theconversation.com/files/575521/original/file-20240214-26-f775n6.jpg?ixlib=rb-4.1.0&rect=0%2C13%2C4479%2C2977&q=45&auto=format&w=1000&fit=clip"
                alt="Mental Health Awareness"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-gray-800">Problem Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Mental health issues like anxiety and depression are increasing among urban students due to academic
                pressure, social media use, family expectations, and poor sleep. This site explores causes, trends, and
                leverage points for change.
              </p>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-sky-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link href="/mental-health-report.pdf" className="text-sky-400 hover:text-sky-500 font-medium">
                  Download Full Report (PDF)
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Event → Pattern → Structure Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="shadow-md border-0">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-gray-800">Event → Pattern → Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="bg-rose-100 text-rose-500 p-1 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold text-gray-800">Event:</span>
                      <p className="text-gray-600">Increase in anxiety, depression, suicide cases</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-amber-100 text-amber-500 p-1 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5-2.25A.75.75 0 017.75 7h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold text-gray-800">Pattern:</span>
                      <p className="text-gray-600">Annual rise in reported mental health issues</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-teal-100 text-teal-500 p-1 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold text-gray-800">Structure:</span>
                      <p className="text-gray-600">
                        High-pressure academics, social media use, lack of counseling in schools
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://ananda.ai/wp-content/uploads/2022/08/Mental-Health-Effects-of-Screen-Time-1.jpg"
                alt="Event Pattern Structure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Causal Loop Diagram Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-gray-800 text-center">Causal Loop Diagram</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src={LoopCld}
                  alt="Causal Loop Diagram"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-gray-600 mt-4">Systemic relationships influencing student mental health</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore More Insights</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover data visualizations, leverage points, and expert articles on student mental health
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/screen-time">View Data</Link>
            </Button>
            <Button className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/leverage-points">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>© 2025 Group8 – Systems Thinking Hackathon | Built for Web Output Submission</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
