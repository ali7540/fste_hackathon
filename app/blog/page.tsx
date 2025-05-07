import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Mental health crisis in Stamford schools demands our attention",
      source: "CT Insider",
      description:
        "This article discusses the growing mental health crisis in Stamford schools and the urgent need for community attention and action to address student wellbeing.",
      url: "https://www.ctinsider.com/opinion/article/stamford-mental-health-breunig-ct-20308342.php",
    },
    {
      id: 2,
      title: "Mental Health at University: A Student's Perspective",
      source: "University of Exeter",
      description:
        "A personal account from a university student about navigating mental health challenges in higher education, offering insights into the student experience.",
      url: "https://sites.exeter.ac.uk/students/2024/03/13/mental-health-at-university/",
    },
    {
      id: 3,
      title: "College Mental Health in NYC: Resources & Support",
      source: "Zencare",
      description:
        "A comprehensive guide to mental health resources available to college students in New York City, including counseling services, support groups, and crisis intervention.",
      url: "https://blog.zencare.co/nyc-college-mental-health/",
    },
    {
      id: 4,
      title: "Future cities must prioritize mental health of young people",
      source: "University of Washington",
      description:
        "Research highlighting how urban planning and city design can impact youth mental health, with recommendations for creating more supportive urban environments.",
      url: "https://newsroom.uw.edu/blog/future-cities-must-prioritize-mental-health-of-young-people",
    },
    {
      id: 5,
      title: "The role of urban green spaces on mental wellbeing",
      source: "BMC Series Blog",
      description:
        "An exploration of how access to green spaces in urban environments can positively impact mental health and wellbeing, based on recent research findings.",
      url: "https://blogs.biomedcentral.com/bmcseriesblog/2017/06/03/the-role-of-urban-green-spaces-on-mental-wellbeing/",
    },
    {
      id: 6,
      title: "How New York City Botanical Garden Supports Mental Health",
      source: "Self Magazine",
      description:
        "A look at how botanical gardens in urban settings, specifically the New York City Botanical Garden, provide therapeutic benefits and support mental wellbeing.",
      url: "https://www.self.com/story/new-york-city-botanical-garden-mental-health",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-16 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          Mental Health Resources & Articles
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Explore expert insights and research on student mental health in urban environments
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="shadow-md border-0 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-sky-400">{post.source}</p>
                <p className="text-gray-600">{post.description}</p>
                <Link
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-teal-500 hover:text-teal-600 font-medium"
                >
                  Read Article →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-gray-300 mt-auto">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>© 2025 Group8 – Systems Thinking Hackathon | Built for Web Output Submission</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
