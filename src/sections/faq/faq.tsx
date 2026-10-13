"use client";

export function FAQSection() {
  return (
    <section id="faq" className="container py-24 sm:py-32 mx-auto">
      <div className="mb-4 flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We're currently fielding these questions, please use the chat button
          to get in touch with us, or engage with us directly on our community
          channels.
        </p>
      </div>
    </section>
  );
}
