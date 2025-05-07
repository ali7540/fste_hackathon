"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function ScreenTimePage() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    // Simulating API fetch with timeout
    const fetchData = async () => {
      setLoading(true)
      try {
        // In a real app, this would be a fetch to an actual API
        // await fetch('/api/screen-time-data')

        // For demo purposes, we'll use static data after a delay
        setTimeout(() => {
          const chartData = [
            { year: 2019, screenTime: 3.5, anxietyReports: 15 },
            { year: 2020, screenTime: 4.2, anxietyReports: 22 },
            { year: 2021, screenTime: 4.8, anxietyReports: 30 },
            { year: 2022, screenTime: 5.1, anxietyReports: 34 },
            { year: 2023, screenTime: 5.6, anxietyReports: 39 },
          ]
          setData(chartData)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Screen Time vs. Anxiety Reports (2019–2023)
        </h1>

        <Card className="shadow-md border-0 mb-16">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Data Visualization</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="h-[400px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
              </div>
            ) : (
              <div className="h-[800px]">
                <ChartContainer
                  config={{
                    screenTime: {
                      label: "Avg Daily Screen Time (hours)",
                      color: "hsl(174, 100%, 29%)", // teal color
                    },
                    anxietyReports: {
                      label: "Anxiety Reports (%)",
                      color: "hsl(199, 89%, 48%)", // sky color
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis yAxisId="left" orientation="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="screenTime"
                        stroke="var(--color-screenTime)"
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="anxietyReports"
                        stroke="var(--color-anxietyReports)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            )}
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Analysis</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Key Findings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                The data shows a clear correlation between increasing screen time and rising anxiety reports among urban
                students.
              </p>
              <ul className="space-y-2 list-disc pl-5 text-gray-600">
                <li>
                  Screen time has increased by <span className="text-rose-500 font-medium">60%</span> over 5 years
                </li>
                <li>
                  Anxiety reports have increased by <span className="text-rose-500 font-medium">160%</span> in the same
                  period
                </li>
                <li>The steepest increase occurred between 2020-2021, coinciding with pandemic lockdowns</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Implications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                While correlation doesn't prove causation, research suggests several mechanisms by which screen time may
                impact mental health:
              </p>
              <ul className="space-y-2 list-disc pl-5 text-gray-600">
                <li>Social media comparison leading to reduced self-esteem</li>
                <li>Disruption of sleep patterns due to blue light exposure</li>
                <li>Reduced face-to-face social interaction</li>
                <li>Constant exposure to curated, idealized content</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
