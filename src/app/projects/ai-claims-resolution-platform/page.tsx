import Image from "next/image";

export default function ClaimsResolutionPlatform() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-16">

      <h1 className="text-5xl font-bold mb-6">
        AI-Powered Claims Resolution Platform
      </h1>

      <p className="text-xl mb-8">
        A human-in-the-loop AI platform that helps insurance claims teams investigate, assess, and resolve complex claim exceptions faster while maintaining governance, auditability, and decision accountability.
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
            width={400}
            height={600}
          />
       </div>

      
      <h2 className="text-3xl font-semibold mb-6">
        Key AI Agents
      </h2>

      <div className="overflow-x-auto mb-12">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left p-4">Agent</th>
              <th className="text-left p-4">Responsibility</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-4 font-medium">Claims Intake Agent</td>
              <td className="p-4">
                Extracts claim details, supporting documents, customer information,
                and claim metadata for downstream analysis.
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="p-4 font-medium">Policy Review Agent</td>
              <td className="p-4">
                Reviews policy coverage, exclusions, deductibles, limits, and
                applicable conditions relevant to the submitted claim.
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="p-4 font-medium">Risk Assessment Agent</td>
              <td className="p-4">
                Evaluates risk indicators, identifies risk signals, and assigns a risk
                score to help prioritize analyst attention.
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="p-4 font-medium">Recommendation Agent</td>
              <td className="p-4">
                Generates explainable recommendations including approve, reject,
                request additional information, or escalate for further review.
              </td>
            </tr>

            <tr>
              <td className="p-4 font-medium">Human Claims Analyst</td>
              <td className="p-4">
                Reviews AI recommendations, applies judgment, overrides decisions
                when required, and remains accountable for final claim disposition.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 className="text-3xl font-semibold mb-6">
        Example Claim Investigation
      </h2>

      <div className="border rounded-lg p-8 mb-12">

        <h3 className="text-2xl font-semibold mb-4">
          Sample Claim
        </h3>

        <p className="mb-2">
          <strong>Claim Type:</strong> Auto Insurance
        </p>

        <p className="mb-2">
          <strong>Claim Amount:</strong> $12,500
        </p>

        <p className="mb-6">
          <strong>Issue:</strong> Coverage ambiguity related to vehicle usage and policy exclusions.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          AI Analysis
        </h3>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Policy coverage identified and relevant clauses extracted.</li>
          <li>Potential exclusion detected based on declared vehicle usage.</li>
          <li>No material risk signals identified beyond the policy coverage ambiguity.</li>
          <li>Supporting documentation appears complete.</li>
          <li>Risk score assessed as Medium.</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">
          Recommendation
        </h3>

        <p className="mb-6">
          Escalate for analyst review due to policy interpretation ambiguity.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Human Decision
        </h3>

        <p>
          Analyst reviews policy context, confirms coverage applicability,
          and approves claim processing.
        </p>

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

