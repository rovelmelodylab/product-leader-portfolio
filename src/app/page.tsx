export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-16">

    <nav className="flex justify-between items-center mb-12 pb-6 border-b">

      <div className="font-bold text-lg">
        RV
      </div>

      <div className="flex gap-6 text-sm">

        <a href="#impact" className="hover:text-indigo-600">
          Impact
        </a>

        <a href="#projects" className="hover:text-indigo-600">
          Projects
        </a>

        <a href="#expertise" className="hover:text-indigo-600">
          Expertise
        </a>

        <a href="#connect" className="hover:text-indigo-600">
          Connect
        </a>

      </div>

    </nav>


      {/* Hero */}

      <section className="mb-20 border border-indigo-100 rounded-2xl p-10 bg-indigo-50 shadow-sm">

        <h1 className="text-5xl font-bold mb-4">
          Roopashree Velimala
        </h1>

        <h2 className="text-2xl mb-6 text-gray-700">
          Product Leader | Platform Strategy | Enterprise AI & Automation
        </h2>

        <p className="text-xl max-w-4xl">
          Building AI-enabled enterprise platforms that combine
          automation, governance, and human decision-making at scale.
        </p>

        <p className="text-lg max-w-4xl mt-6 text-gray-700">
          Over the last 15+ years, I have led platform modernization,
          workflow automation, compliance systems, enterprise integrations,
          and digital product initiatives across FinTech, tax, global mobility,
          healthcare, and enterprise SaaS.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">

          <a
            href="/projects/ai-claims-resolution-platform"
            className="border rounded-lg px-6 py-3 font-medium hover:bg-gray-100"
          >
            View Featured Case Study →
          </a>

          <a
            href="https://www.linkedin.com/in/roopashreeyadav"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg px-6 py-3 font-medium hover:bg-gray-100"
          >
            Connect on LinkedIn →
          </a>

        </div>

      </section>

      {/* Impact Snapshot */}

      <section id="impact" className="mb-20">

        <h2 className="text-3xl font-bold mb-8">
          Career Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="border border-indigo-100 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-4xl font-bold mb-2">
              $3M+
            </h3>

            <p className="text-sm text-gray-700">
              Operational cost savings delivered through automation and platform transformation.
            </p>
          </div>

          <div className="border border-indigo-100 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-4xl font-bold mb-2">
              400K+
            </h3>

            <p className="text-sm text-gray-700">
              Monthly regulatory submissions supported through enterprise compliance platforms.
            </p>
          </div>

          <div className="border border-indigo-100 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-4xl font-bold mb-2">
              15+
            </h3>

            <p className="text-sm text-gray-700">
              Enterprise and government API integrations delivered.
            </p>
          </div>

          <div className="border border-indigo-100 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-4xl font-bold mb-2">
              70%
            </h3>

            <p className="text-sm text-gray-700">
              Reduction in manual effort through workflow automation initiatives.
            </p>
          </div>

        </div>

      </section>

      {/* Featured Project */}

      <section id="projects" className="mb-20">

        <h2 className="text-3xl font-bold mb-8">
          Featured Case Study
        </h2>

        <div className="border border-indigo-200 bg-indigo-50 rounded-2xl p-10 shadow-sm">

          <div className="inline-block bg-gray-100 rounded-full px-4 py-2 text-sm mb-6">
            Enterprise AI Product Portfolio
          </div>

          <h3 className="text-4xl font-bold mb-4">
            AI-Powered Claims Resolution Platform
          </h3>

          <div className="flex flex-wrap gap-2 mb-6">

            <span className="bg-white border border-indigo-100 rounded-full px-3 py-1 text-sm">
              Human-in-the-Loop AI
            </span>

            <span className="bg-white border border-indigo-100 rounded-full px-3 py-1 text-sm">
              Multi-Agent Systems
            </span>

            <span className="bg-white border border-indigo-100 rounded-full px-3 py-1 text-sm">
              Enterprise SaaS
            </span>

            <span className="bg-white border border-indigo-100 rounded-full px-3 py-1 text-sm">
              Platform Product
            </span>

          </div>

          <a
            href="/projects/ai-claims-resolution-platform"
            className="font-semibold underline"
          >
            Explore Case Study →
          </a>

        </div>

      </section>

      {/* Upcoming Projects */}

      <section className="mb-20">

      <section className="mb-20">

        <h2 className="text-3xl font-bold mb-8">
          Portfolio Roadmap
        </h2>

        <div className="border border-indigo-100 rounded-2xl p-8 bg-white shadow-sm">

          <h3 className="text-xl font-semibold mb-4">
            Next Case Studies
          </h3>

          <ul className="space-y-3">

            <li>
              • AI Vendor Risk Review Platform
            </li>

            <li>
              • AI Regulatory Change Intelligence Platform
            </li>

            <li>
              • AI Compliance Exception Resolution Platform
            </li>

          </ul>

        </div>

      </section>

      </section>

      {/* Expertise */}

      <section id="expertise" className="mb-20">

        <h2 className="text-3xl font-bold mb-8">
          Areas of Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border rounded-xl p-6">

            <h3 className="text-xl font-semibold mb-3">
              Platform Products
            </h3>

            <p>
              APIs, integrations, workflow engines,
              shared capabilities, and scalable enterprise platforms.
            </p>

          </div>

          <div className="border rounded-xl p-6">

            <h3 className="text-xl font-semibold mb-3">
              Enterprise Automation
            </h3>

            <p>
              Workflow orchestration, operational efficiency,
              compliance automation, and process modernization.
            </p>

          </div>

          <div className="border rounded-xl p-6">

            <h3 className="text-xl font-semibold mb-3">
              AI-Enabled Products
            </h3>

            <p>
              Copilots, intelligent agents, decision support systems,
              and human-in-the-loop enterprise workflows.
            </p>

          </div>

        </div>

      </section>

      {/* Product Perspective */}

      <section className="mb-20 border rounded-2xl p-10 bg-gray-50">

        <h2 className="text-3xl font-bold mb-8">
          My Perspective on AI Products
        </h2>

        <div className="space-y-4 max-w-4xl">

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
            My focus lies at the intersection of AI,
            workflow automation, platform capabilities,
            and enterprise-scale operations.
          </p>

        </div>

      </section>

      {/* Connect */}

      <section id="connect" className="mb-20">

        <h2 className="text-3xl font-bold mb-8">
          Connect
        </h2>

        <div className="border rounded-2xl p-8">

          <div className="space-y-4">

            <p>
              LinkedIn:
              {" "}
              <a
                href="https://www.linkedin.com/in/roopashreeyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                linkedin.com/in/roopashreeyadav
              </a>
            </p>

            <p>
              GitHub:
              {" "}
              <a
                href="https://github.com/rovelmelodylab"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                github.com/rovelmelodylab
              </a>
            </p>

            <p>
              Open to conversations about Product Leadership,
              Platform Strategy, Enterprise AI, Automation,
              and AI-enabled products.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}