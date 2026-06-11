import Image from "next/image";

export default function ClaimsResolutionPlatform() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-16">

      <h1 className="text-5xl font-bold mb-6">
        AI-Powered Claims Resolution Platform
      </h1>

      <p className="text-xl mb-8">
        An AI-assisted decision support platform that helps insurance claims
        analysts investigate and resolve claim exceptions while maintaining
        human oversight, explainability, and compliance.
      </p>

      <h2 className="text-3xl font-semibold mb-4">
        The Problem
      </h2>

      <p className="mb-8">
        Claims analysts spend significant time reviewing claim exceptions,
        gathering supporting evidence, interpreting policy coverage,
        assessing risk indicators, and determining next actions.
        These workflows are often manual, repetitive, and difficult to scale.
      </p>

      <h2 className="text-3xl font-semibold mb-4">
        The Opportunity
      </h2>

      <p className="mb-8">
        AI can accelerate investigations by reviewing claim documentation,
        identifying coverage issues, highlighting potential risks,
        and recommending next-best actions. Human analysts remain
        responsible for final decisions.
      </p>

      <h2 className="text-3xl font-semibold mb-4">
          Proposed Workflow
        </h2>

        <div className="flex justify-center mb-12">
          <Image
            src="/images/claims-workflow.png"
            alt="AI Claims Resolution Workflow"
            width={800}
            height={1000}
          />
       </div>

      <h2 className="text-3xl font-semibold mb-4">
        Current Status
      </h2>

      <p>
        Product strategy, requirements, and architecture are currently
        being defined as part of an AI product leadership portfolio project.
      </p>

    </main>
  );
}