export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-16">

      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-4">
          Roopashree Velimala
        </h1>

        <h2 className="text-2xl mb-6">
          Product Leader | Platform Strategy | Enterprise AI & Automation
        </h2>

        <p className="text-lg max-w-3xl">
          I build platforms that simplify complex workflows, scale regulated
          operations, and create measurable business outcomes.
        </p>

        <p className="text-lg max-w-3xl mt-4">
          Over the last 15+ years, I have led platform modernization,
          workflow automation, compliance systems, enterprise integrations,
          and digital product initiatives across FinTech, tax, global mobility,
          healthcare, and enterprise SaaS.
        </p>
      </section>

    <section className="mt-16 mb-24">
      <h2 className="text-3xl font-bold mb-6">
        Featured Projects
      </h2>

      <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
        <h3 className="text-3xl font-bold mb-4">
          AI-Powered Claims Resolution Platform
        </h3>

        <div className="inline-block bg-gray-100 rounded px-3 py-1 text-sm mb-4">
          In Progress •   AI Product Portfolio Project
        </div>
        <p className="mb-4">
          A human-in-the-loop AI platform that helps insurance claims teams
          investigate, assess, and resolve complex claim exceptions faster
          while maintaining governance, auditability, and decision accountability.
        </p>

        <a
          href="/projects/ai-claims-resolution-platform"
          className="text-blue-600 font-medium hover:underline"
        >
          View Project →
        </a>
      </div>

      <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
        <h3 className="text-3xl font-bold mb-4">
          AI Vendor Risk Review Platform
        </h3>

        <div className="inline-block bg-gray-100 rounded px-3 py-1 text-sm mb-4">
          (Planned)
        </div>
        </div>

      <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
        <h3 className="text-3xl font-bold mb-4">
          AI Regulatory Change Intelligence Platform
        </h3>

        <div className="inline-block bg-gray-100 rounded px-3 py-1 text-sm mb-4">
          (Planned)
        </div>
        </div>

    </section>

  
      {/* Impact Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mt-8 mb-8">
          Career Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>
            <h3 className="text-4xl font-bold">$3M+</h3>
            <p>Operational cost savings delivered through automation and platform transformation.</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">400K+</h3>
            <p>Monthly regulatory submissions supported through enterprise compliance platforms.</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">15+</h3>
            <p>API integrations with external authorities and enterprise systems.</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">70%</h3>
            <p>Reduction in manual processing effort through workflow automation initiatives.</p>
          </div>

        </div>
      </section>

      {/* Focus Areas */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">
          What I Focus On
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Platform Products
            </h3>
            <p>
              Building reusable capabilities, APIs, integrations,
              workflow engines, and scalable enterprise foundations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Enterprise Automation
            </h3>
            <p>
              Reducing operational complexity through workflow orchestration,
              process redesign, and intelligent automation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              AI-Enabled Products
            </h3>
            <p>
              Applying copilots, agents, decision support,
              and human-in-the-loop systems to regulated enterprise environments.
            </p>
          </div>

        </div>
      </section>

      {/* Perspective */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">
          My Perspective on AI
        </h2>

        <div className="max-w-4xl space-y-4">
          <p>
            The most valuable AI products are not standalone chat experiences.
          </p>

          <p>
            They are systems that reduce operational complexity,
            augment expert decision-making, automate repetitive work,
            and maintain the governance, auditability, and trust
            required by enterprise customers.
          </p>

          <p>
            My interest lies at the intersection of AI,
            workflow automation, platform capabilities,
            and enterprise-scale operations.
          </p>
        </div>
      </section>

      {/* Featured Initiative */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">
          Featured Initiative
        </h2>

        <div className="border rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-2">
            Enterprise AI Operations Platform
          </h3>

          <p className="mb-4">
            Currently Designing & Building
          </p>

          <p>
            Exploring how AI agents, workflow orchestration,
            human review loops, and enterprise governance can be
            combined to automate complex operational processes
            while preserving compliance, transparency, and control.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-3xl font-semibold mb-8">
          Connect
        </h2>

        <div className="space-y-2">
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/roopashreeyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.linkedin.com/in/roopashreeyadav/
            </a>
          </p>
          <p>GitHub: github.com/rovelmelodylab</p>
          <p>Email: (Coming Soon)</p>
        </div>
      </section>

    </main>
  );





}

