import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          Welcome to three3zero
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px]">
          We provide expert consulting services to help businesses achieve their goals.
          Our team of experienced professionals is dedicated to delivering high-quality solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/services">Our Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>

      <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold">Expert Consulting</h3>
          <p className="text-muted-foreground">
            Our team brings years of industry experience to help solve your most complex business challenges.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold">Tailored Solutions</h3>
          <p className="text-muted-foreground">
            We develop customized strategies and solutions designed specifically for your business needs.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold">Proven Results</h3>
          <p className="text-muted-foreground">
            Our track record speaks for itself with successful implementations across various industries.
          </p>
        </div>
      </div>
    </div>
  );
}
