import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | three3zero",
  description: "Explore our range of consulting services",
};

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-[800px]">
          We offer a comprehensive range of consulting services to help your business succeed.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Strategic Planning</CardTitle>
            <CardDescription>Develop a roadmap for success</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our strategic planning services help you define clear objectives, identify opportunities, 
              and create actionable plans to achieve your business goals.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Business Analysis</CardTitle>
            <CardDescription>Gain valuable insights</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We analyze your business operations, market position, and competitive landscape to 
              identify strengths, weaknesses, and opportunities for improvement.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Process Optimization</CardTitle>
            <CardDescription>Streamline your operations</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our experts help you identify inefficiencies in your business processes and implement 
              solutions to improve productivity, reduce costs, and enhance quality.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technology Implementation</CardTitle>
            <CardDescription>Leverage modern solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We assist in selecting, implementing, and optimizing technology solutions that align 
              with your business needs and enhance your operational capabilities.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Market Research</CardTitle>
            <CardDescription>Understand your market</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our comprehensive market research services provide you with valuable insights into 
              customer preferences, industry trends, and competitive dynamics.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Executive Coaching</CardTitle>
            <CardDescription>Develop leadership excellence</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our experienced coaches work with executives and managers to enhance leadership skills, 
              improve decision-making, and drive organizational success.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}