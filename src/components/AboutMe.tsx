export function AboutMe() {
    const profileImage = "/me.jpg";
    return (
        <section id="about-me" className="flex flex-col gap-4">
            <h2 className="text-1xl sm:text-2xl font-bold text-center">About Me</h2>
            <div className="block md:hidden">
                <div className="mx-auto w-36 h-36 rounded-full overflow-hidden border-2 border-border">
                    <img src={profileImage} className="w-full h-full object-cover" />
                </div>
            </div>
            <div>
                <div
                    className="hidden md:block hover-scale-large float-right ml-8 mb-5 mt-2 w-[200px] h-[200px] rounded-full overflow-hidden">
                    <img src={profileImage} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4 text-center md:text-justify">
                    <p>I’m Benjamin, a software engineer passionate about crafting clean, modular, and maintainable code. With six years of experience
                        in backend development, cloud solutions, and modern programming practices, I bring a structured, problem-solving mindset to every project.</p>

                    <p>Throughout my career, I’ve worked closely with major global publishers, implementing scalable and reliable backend solutions that power digital
                        publishing platforms used by millions. I've built high-performance APIs, custom automation pipelines, and authentication
                        systems, seamlessly integrating with third-party providers. My backend expertise is centered around C# and .NET, using technologies like
                        like ASP.NET, Entity Framework, LINQ and MediatR to build efficient, maintainable architectures. On the data side,
                        I have solid experience working with relational and NoSQL databases, using technologies such as PostgresQL and DynamoDB.</p>

                    <p>Beyond backend development, I've spent a lot of time working with cloud-native architectures, designing scalable and resilient serverless infrastructures on AWS.
                        I prioritize automation and consistency, leveraging infrastructure-as-code to define, deploy, and manage cloud environments efficiently. My
                        expertise also extends to Docker and remote server management, ensuring seamless deployment, maintainability, and scalability—whether
                        applications run in the cloud, on-premises, or hybrid environments.</p>

                    <p>Recently, I’ve been expanding my skill set into modern frontend development, applying the same structured approach to building React-based
                        projects. While still relatively new to frontend work, I’ve already developed functional, interactive UIs using React, TypeScript,
                        and Tailwind. This experience has deepened my understanding of full-stack development, allowing me to bridge the gap between
                        frontend and backend systems more effectively.</p>
                </div>
            </div>
        </section>
    );
}
