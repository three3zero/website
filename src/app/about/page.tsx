import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | three3zero",
  description: "Learn more about three3zero and our mission",
};

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter">About Us</h1>
        <p className="text-xl text-muted-foreground max-w-[800px]">
          Learn more about our company and our mission to help businesses succeed.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-muted-foreground">
            three3zero was founded with a simple mission: to provide businesses with the expertise and 
            guidance they need to overcome challenges and achieve their goals. Our journey began when 
            a group of experienced consultants recognized the need for a more personalized and 
            effective approach to business consulting.
          </p>
          <p className="text-muted-foreground">
            Since our inception, we have worked with companies of all sizes across various industries, 
            helping them navigate complex business landscapes and implement successful strategies. Our 
            commitment to excellence and client satisfaction has been the cornerstone of our growth and success.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Approach</h2>
          <p className="text-muted-foreground">
            At three3zero, we believe in a collaborative and tailored approach to consulting. We work 
            closely with our clients to understand their unique challenges, goals, and vision. This 
            allows us to develop customized solutions that address their specific needs and deliver 
            measurable results.
          </p>
          <p className="text-muted-foreground">
            Our team of experts brings diverse skills and experiences to every project, ensuring a 
            comprehensive and innovative approach to problem-solving. We are committed to staying at 
            the forefront of industry trends and best practices, continuously enhancing our knowledge 
            and capabilities to provide the highest level of service to our clients.
          </p>
        </div>
      </div>

      <div className="mt-16 space-y-6">
        <h2 className="text-2xl font-bold text-center">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Excellence</h3>
            <p className="text-muted-foreground">
              We are committed to delivering the highest quality services and solutions to our clients, 
              exceeding expectations in every aspect of our work.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Integrity</h3>
            <p className="text-muted-foreground">
              We conduct our business with honesty, transparency, and ethical standards, building trust 
              and long-lasting relationships with our clients.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Innovation</h3>
            <p className="text-muted-foreground">
              We embrace creativity and forward-thinking approaches, constantly seeking new and better 
              ways to solve problems and create value for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}