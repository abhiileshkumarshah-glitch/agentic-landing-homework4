import {
  ArrowRightIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CheckIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  SparklesIcon,
} from "@/components/Icons";

export default function Home() {
  const skills = [
    "Python",
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub",
    "Terraform",
    "Google Cloud",
    "CI/CD",
    "Linux",
    "DevOps",
  ];

  const projects = [
    {
      title: "Cloud & DevOps Project",
      description:
        "Hands-on work with cloud infrastructure, containers, automation, and DevOps tools.",
      tools: ["Cloud", "Docker", "DevOps"],
    },
    {
      title: "Containerized Application",
      description:
        "A project focused on running an application with containers and developing a reliable deployment workflow.",
      tools: ["Docker", "Python", "Git"],
    },
    {
      title: "Infrastructure Automation",
      description:
        "Learning and applying Infrastructure as Code concepts to create repeatable cloud environments.",
      tools: ["Terraform", "Google Cloud", "Git"],
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background font-bold">
              AS
            </div>
            <div>
              <p className="font-semibold leading-none">
                Abhi Ilesh Kumar Shah
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Cloud & DevOps
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="transition hover:opacity-70">
              About
            </a>
            <a href="#skills" className="transition hover:opacity-70">
              Skills
            </a>
            <a href="#projects" className="transition hover:opacity-70">
              Projects
            </a>
            <a href="#education" className="transition hover:opacity-70">
              Education
            </a>
            <a href="#contact" className="transition hover:opacity-70">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-80 sm:block"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile navigation */}
        <nav className="flex gap-4 overflow-x-auto border-t border-border/40 px-6 py-3 text-xs md:hidden">
          <a href="#about" className="whitespace-nowrap">
            About
          </a>
          <a href="#skills" className="whitespace-nowrap">
            Skills
          </a>
          <a href="#projects" className="whitespace-nowrap">
            Projects
          </a>
          <a href="#education" className="whitespace-nowrap">
            Education
          </a>
          <a href="#contact" className="whitespace-nowrap">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-border/60"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.3fr_0.7fr] md:items-center md:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-foreground" />
              Open to learning & opportunities
            </div>

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              Hi, I'm Abhi.
            </h1>

            <p className="mt-5 text-2xl font-medium text-muted-foreground md:text-3xl">
              Cloud Computing & DevOps Student
            </p>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              I'm a quick learner and an international student from India
              building my skills in cloud computing, DevOps, automation, and
              modern software development.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background transition hover:opacity-80"
              >
                View My Projects
                <ArrowRightIcon className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition hover:bg-muted"
              >
                Contact Me
                <MailIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-muted/40 p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-background">
              <SparklesIcon className="h-7 w-7" />
            </div>

            <h2 className="text-2xl font-semibold">
              Building for the cloud
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              My focus is learning how applications are built, deployed,
              automated, monitored, and managed using modern cloud and DevOps
              technologies.
            </p>

            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-3">
                <CheckIcon className="h-5 w-5" />
                <span>Cloud technologies</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckIcon className="h-5 w-5" />
                <span>Containerization</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckIcon className="h-5 w-5" />
                <span>Infrastructure & automation</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckIcon className="h-5 w-5" />
                <span>Continuous learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              About Me
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Learning, building, and growing in technology.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I am currently developing my knowledge in cloud computing and
              DevOps. I enjoy learning new technologies and turning what I
              learn into practical projects.
            </p>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              My current interests include cloud platforms, containers,
              Kubernetes, infrastructure automation, Git workflows, and
              continuous integration and deployment.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-border p-6">
              <BookOpenIcon className="h-7 w-7" />
              <h3 className="mt-5 text-xl font-semibold">Learn</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Continuously developing technical and professional skills.
              </p>
            </div>

            <div className="rounded-2xl border border-border p-6">
              <BriefcaseIcon className="h-7 w-7" />
              <h3 className="mt-5 text-xl font-semibold">Build</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Applying classroom knowledge through practical projects.
              </p>
            </div>

            <div className="rounded-2xl border border-border p-6">
              <SparklesIcon className="h-7 w-7" />
              <h3 className="mt-5 text-xl font-semibold">Grow</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Exploring new tools and improving through hands-on experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Technologies I'm learning
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            A collection of technologies and tools that are part of my current
            learning journey.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border px-5 py-3 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Things I'm building
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            My projects are focused on gaining practical experience with cloud,
            containers, automation, and DevOps workflows.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group rounded-3xl border border-border p-7 transition hover:-translate-y-1 hover:bg-muted/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    0{index + 1}
                  </span>
                  <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>

                <h3 className="mt-12 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-muted px-3 py-1 text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Education
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            My learning journey
          </h2>

          <div className="mt-10 rounded-3xl border border-border p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Current Studies
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  Cloud Computing
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                  Developing practical knowledge in cloud platforms, DevOps,
                  software development, infrastructure, automation, and
                  deployment technologies.
                </p>
              </div>

              <div className="rounded-2xl bg-muted px-5 py-3 text-sm">
                4th Term
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-3xl border border-border bg-muted/40 p-8 md:p-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Let's connect and build something together.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              I'm always interested in learning, collaborating on projects,
              and connecting with people in technology.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:abhiileshkumar.shah@cstu.edu"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background transition hover:opacity-80"
              >
                <MailIcon className="h-5 w-5" />
                Email Me
              </a>

              <a
                href="https://github.com/abhiileshkumarshah-glitch"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition hover:bg-background"
              >
                <GitHubIcon className="h-5 w-5" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/YOUR_USERNAME"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition hover:bg-background"
              >
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
              </a>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Replace the email, GitHub, and LinkedIn placeholders with your
              real links before submitting the assignment.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Abhi Ilesh Kumar Shah</p>

          <p>Cloud Computing & DevOps</p>
        </div>
      </footer>
<section id="media" className="py-20">
  <div className="mx-auto max-w-6xl px-6">
    <div className="mb-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider">
        Cloud & DevOps
      </p>

      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
        What I’m Learning
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-600">
        A few areas I am exploring as I continue learning cloud computing
        and DevOps.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <img
          src="/images/cloud.jpg"
          alt="Cloud computing"
          className="h-56 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold">Cloud Computing</h3>
          <p className="mt-2 text-gray-600">
            Learning how cloud platforms can be used to build and deploy
            applications.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <img
          src="/images/kubernetes.jpg"
          alt="Kubernetes"
          className="h-56 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold">Kubernetes</h3>
          <p className="mt-2 text-gray-600">
            Exploring containers, pods, deployments, and services with
            Kubernetes.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <img
          src="/images/devops.jpg"
          alt="DevOps"
          className="h-56 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold">DevOps</h3>
          <p className="mt-2 text-gray-600">
            Learning about automation, CI/CD, monitoring, and deployment.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}