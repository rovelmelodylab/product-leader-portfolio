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

      <h2 className="text-3xl font-semibold mb-6">
        Architecture Overview
      </h2>

      <div className="flex justify-center mb-12">
        <Image
          src="/images/claims-architecture_v2.png"
          alt="AI Claims Resolution Platform Architecture"
          width={300}
          height={700}
          className="w-full max-w-5xl h-auto"
        />
      </div>

      <h2 className="text-3xl font-semibold mb-6">
        Architecture Overview
      </h2>

        <p className="mb-8">
          The platform uses a human-in-the-loop AI architecture designed to accelerate
          claim investigations while maintaining governance, explainability, and
          decision accountability. AI agents assist with document analysis, policy
          interpretation, risk assessment, and recommendation generation, while human
          analysts remain responsible for final claim decisions.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Core Components
        </h3>

        <div className="space-y-6 mb-12">

          <div>
            <h4 className="font-semibold text-lg">Claim Intake Layer</h4>
            <p>
              Receives claim submissions, supporting documents, images, and customer
              information from multiple intake channels. Standardizes incoming data for
              downstream processing.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Document Repository</h4>
            <p>
              Stores claims, policy documents, supporting evidence, and historical
              claim information used during AI-assisted investigations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">AI Orchestrator</h4>
            <p>
              Coordinates agent workflows, manages task sequencing, passes context
              between agents, and consolidates findings into a unified investigation
              outcome.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Policy Review Agent</h4>
            <p>
              Retrieves and analyzes policy coverage, exclusions, deductibles, limits,
              and relevant policy conditions to determine applicability to the claim.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Risk Assessment Agent</h4>
            <p>
              Identifies risk signals, missing information, coverage ambiguities, and
              other factors that may require additional investigation or escalation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Recommendation Agent</h4>
            <p>
              Generates explainable recommendations including approval, rejection,
              escalation, or requests for additional information based on the evidence
              gathered during investigation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Human Review Portal</h4>
            <p>
              Enables claims analysts to review AI findings, provide overrides when
              necessary, and make final claim decisions while preserving human
              accountability.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Audit & Decision Repository</h4>
            <p>
              Captures AI recommendations, analyst decisions, overrides, supporting
              rationale, and decision history to support compliance, governance, and
              audit requirements.
            </p>
          </div>

        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Design Principles
        </h3>

        <ul className="list-disc pl-6 space-y-3 mb-12">
          <li>
            Human analysts remain accountable for all final claim decisions.
          </li>

          <li>
            AI recommendations must be explainable and supported by evidence.
          </li>

          <li>
            Agent responsibilities are separated to improve maintainability,
            scalability, and future extensibility.
          </li>

          <li>
            Every recommendation and decision is auditable to support regulatory and
            operational governance requirements.
          </li>

          <li>
            The architecture is intentionally domain-agnostic and can be extended to regulatory, compliance, financial operations, and customer service exception workflows.
          </li>
        </ul>

    <h2 className="text-3xl font-semibold mb-6">
      Success Metrics
    </h2>

    <p className="mb-8">
      The platform is designed to improve claims operations by reducing manual
      investigation effort while maintaining decision quality, governance, and
      regulatory compliance.
    </p>

    <div className="space-y-8 mb-12">

      <div>
        <h3 className="text-2xl font-semibold mb-3">
          Business Metrics
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Average claim resolution time</li>
          <li>Claims processed per analyst</li>
          <li>Cost per claim investigation</li>
          <li>Claim backlog reduction</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">
          Product Metrics
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Recommendation acceptance rate</li>
          <li>Analyst override rate</li>
          <li>Investigation time saved per claim</li>
          <li>User satisfaction score</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">
          AI Metrics
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Recommendation accuracy</li>
          <li>Confidence score distribution</li>
          <li>False positive rate</li>
          <li>Percentage of recommendations with supporting rationale</li>
        </ul>
      </div>

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

