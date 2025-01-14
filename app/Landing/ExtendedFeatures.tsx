import React from "react";

const ExtendedFeatures = () => {
  return (
    <div className="mt-24 w-full">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-bold text-center mb-5 text-primaryText">
          Empower Your Productivity
          <br />
          with Cutting-Edge AI Features
        </h2>
        <p className="text-xl text-center  font-light text-textMuted">
          Discover PixLab Vision&apos;s powerful tools designed to transform
          document processing, data extraction, and AI integration. From
          intelligent parsing to developer-friendly APIs, our platform adapts to
          your needs—whether you&apos;re automating workflows or building
          smarter applications.
        </p>
      </div>

      <div className="grid grid-cols-3 mt-12 gap-8">
        <div className="flex flex-col items-start gap-2 px-5 py-7 bg-feature-gradient  rounded-2xl">
          <h3 className="text-4xl stroke-text ">01</h3>
          <h4 className="text-xl font-bold text-primaryText ">
            Vision Parse & Extraction
          </h4>
          <p className="text-lg text-textMuted font-medium">
            Automatically extract text, images, and metadata from PDFs, Excel,
            Word, and HTML files.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 px-5 py-7 bg-feature-gradient  rounded-2xl">
          <h3 className="text-4xl stroke-text ">02</h3>
          <h4 className="text-xl font-bold text-primaryText ">
            Multilingual Document Parsing
          </h4>
          <p className="text-lg text-textMuted font-medium">
            Supports multilingual document parsing for global accessibility and
            reach.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 px-5 py-7 bg-feature-gradient  rounded-2xl">
          <h3 className="text-4xl stroke-text ">03</h3>
          <h4 className="text-xl font-bold text-primaryText ">
            AI-Driven Layout Recognition
          </h4>
          <p className="text-lg text-textMuted font-medium">
            Built with AI to extract complex layouts, tables, and dynamic
            content effortlessly.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 px-5 py-7 bg-feature-gradient  rounded-2xl">
          <h3 className="text-4xl stroke-text ">04</h3>
          <h4 className="text-xl font-bold text-primaryText ">
            Automated Content Extraction
          </h4>
          <p className="text-lg text-textMuted font-medium">
            Save hours with automated content extraction pipelines, reducing
            manual work.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 px-5 py-7 bg-feature-gradient  rounded-2xl">
          <h3 className="text-4xl stroke-text ">05</h3>
          <h4 className="text-xl font-bold text-primaryText ">
            Scalable Document Workflows
          </h4>
          <p className="text-lg text-textMuted font-medium">
            A scalable solution for teams or enterprise-level document
            workflows.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 px-5 py-7 bg-feature-gradient  rounded-2xl">
          <h3 className="text-4xl stroke-text ">06</h3>
          <h4 className="text-xl font-bold text-primaryText ">
            Targeted Data Extraction
          </h4>
          <p className="text-lg text-textMuted font-medium">
            Identify and extract specific data points like names, dates, or
            transactions.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 px-5 py-7 bg-feature-gradient  rounded-2xl">
          <h3 className="text-4xl stroke-text ">07</h3>
          <h4 className="text-xl font-bold text-primaryText ">
            Streamlined Compliance
          </h4>
          <p className="text-lg text-textMuted font-medium">
            Streamline compliance by automating data extraction from regulatory
            documents.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 px-5 py-7 bg-feature-gradient  rounded-2xl">
          <h3 className="text-4xl stroke-text ">08</h3>
          <h4 className="text-xl font-bold text-primaryText ">
            RAG & Document Indexing
          </h4>
          <p className="text-lg text-textMuted font-medium">
            Create knowledge graphs and searchable document indexes for smarter
            workflows.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 px-5 py-7 bg-feature-gradient  rounded-2xl">
          <h3 className="text-4xl stroke-text ">09</h3>
          <h4 className="text-xl font-bold text-primaryText ">
            Developer APIs
          </h4>
          <p className="text-lg text-textMuted font-medium">
            Low-latency API endpoints for AI queries, summarization, coding, and
            more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtendedFeatures;
