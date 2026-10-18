"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Kicker } from "@/components/kicker";
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF, SERVICE_OPTIONS } from "@/lib/content";
import { cn } from "@/lib/cn";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FieldName = keyof FormState;
type Errors = Partial<Record<FieldName, string>>;

const EMPTY: FormState = { name: "", email: "", phone: "", service: "", message: "" };

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    errors.email = "That email address doesn’t look quite right.";
  }
  if (form.phone.trim() && !/^\+?[\d\s()-]{7,}$/.test(form.phone.trim())) {
    errors.phone = "Please check your phone number.";
  }
  if (!form.service) errors.service = "Please choose the service you need.";
  if (form.message.trim().length < 10) {
    errors.message = "Tell us a little about the job — a sentence or two is fine.";
  }
  return errors;
}

function Field({
  id,
  label,
  required,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
        {label}{" "}
        {required ? <span className="text-accent-700">*</span> : null}
        {optional ? <span className="font-normal text-neutral-700">(optional)</span> : null}
      </label>
      {children}
      {error ? <div className="mt-2 text-[13px] font-semibold text-accent-700">{error}</div> : null}
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [tried, setTried] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (key: FieldName, value: string) => {
    const next = { ...form, [key]: value };
    setForm(next);
    setSent(false);
    if (tried) setErrors(validate(next));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    const keys = Object.keys(nextErrors) as FieldName[];
    setTried(true);
    setErrors(nextErrors);
    if (keys.length) {
      setSent(false);
      document.getElementById(`f-${keys[0]}`)?.focus();
      return;
    }
    setSent(true);
  };

  const firstName = form.name.trim().split(/\s+/)[0] || "there";
  const hasErrors = tried && Object.keys(errors).length > 0;

  return (
    <section id="contact" className="bg-neutral-100 py-[clamp(72px,10vw,160px)]">
      <Container className="flex flex-wrap gap-x-[clamp(48px,7vw,120px)] gap-y-12">
        <div data-reveal="" className="flex min-w-0 flex-[1_1_380px] flex-col">
          <Kicker>Let&apos;s Talk</Kicker>
          <h2 className="m-[20px_0_0_-0.05em] text-[clamp(38px,5vw,76px)] leading-[0.97] font-extrabold tracking-[-0.035em]">
            <span className="block">Have a Project</span>
            <span className="block">in Mind?</span>
          </h2>
          <p className="mt-6 max-w-[440px] text-[17px] leading-[1.65] text-neutral-700 text-pretty">
            Tell us a little about the job and we&apos;ll get back to you. Prefer to talk it through? Give us a call.
          </p>
          <div className="mt-10 flex flex-col">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-between gap-4 border-t-2 border-divider py-5 text-ink no-underline hover:text-accent-700"
            >
              <span className="flex flex-col gap-1">
                <span className="text-xs font-semibold tracking-[0.12em] text-neutral-700 uppercase">Phone</span>
                <span className="text-[clamp(24px,2.2vw,30px)] font-extrabold tracking-[-0.015em] tabular-nums">
                  {PHONE_DISPLAY}
                </span>
              </span>
              <span className="flex size-12 shrink-0 items-center justify-center bg-accent text-white">
                <Phone size={20} strokeWidth={2} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />
              </span>
            </a>
            <a
              href={EMAIL_HREF}
              className="flex items-center justify-between gap-4 border-t-2 border-divider py-5 text-ink no-underline hover:text-accent-700"
            >
              <span className="flex min-w-0 flex-col gap-1">
                <span className="text-xs font-semibold tracking-[0.12em] text-neutral-700 uppercase">Email</span>
                <span className="text-[17px] font-bold wrap-anywhere">{EMAIL}</span>
              </span>
              <span className="flex size-12 shrink-0 items-center justify-center border-2 border-ink">
                <Mail size={20} strokeWidth={2} strokeLinecap="square" strokeLinejoin="miter" aria-hidden />
              </span>
            </a>
            <div className="flex flex-col gap-1 border-t-2 border-b-2 border-divider py-5">
              <span className="text-xs font-semibold tracking-[0.12em] text-neutral-700 uppercase">Location</span>
              <span className="text-[17px] font-bold">Christchurch, New Zealand</span>
            </div>
          </div>
        </div>

        <div
          data-reveal=""
          data-delay="100"
          className="min-w-0 flex-[1.3_1_520px] border-t-4 border-accent bg-white p-[clamp(24px,4vw,56px)]"
        >
          <form noValidate onSubmit={onSubmit} aria-label="Quote request" className="flex flex-col gap-[22px]">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div className="text-2xl font-extrabold tracking-[-0.015em]">Request a quote</div>
              <div className="text-[13px] text-neutral-700">
                <span className="text-accent-700">*</span> Required
              </div>
            </div>

            {hasErrors ? (
              <div role="alert" className="bg-accent-100 px-4 py-3.5 text-sm font-semibold text-accent-800">
                Please check the highlighted fields below.
              </div>
            ) : null}

            <Field id="f-name" label="Name" required error={errors.name}>
              <input
                id="f-name"
                className={cn("he-field")}
                type="text"
                name="name"
                autoComplete="name"
                value={form.name}
                aria-invalid={errors.name ? true : undefined}
                onChange={(event) => update("name", event.target.value)}
              />
            </Field>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-5 gap-y-[22px]">
              <Field id="f-email" label="Email" required error={errors.email}>
                <input
                  id="f-email"
                  className="he-field"
                  type="email"
                  name="email"
                  inputMode="email"
                  autoComplete="email"
                  value={form.email}
                  aria-invalid={errors.email ? true : undefined}
                  onChange={(event) => update("email", event.target.value)}
                />
              </Field>
              <Field id="f-phone" label="Phone" optional error={errors.phone}>
                <input
                  id="f-phone"
                  className="he-field"
                  type="tel"
                  name="phone"
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.phone}
                  aria-invalid={errors.phone ? true : undefined}
                  onChange={(event) => update("phone", event.target.value)}
                />
              </Field>
            </div>

            <Field id="f-service" label="Service required" required error={errors.service}>
              <select
                id="f-service"
                className="he-field"
                name="service"
                value={form.service}
                aria-invalid={errors.service ? true : undefined}
                onChange={(event) => update("service", event.target.value)}
              >
                <option value="">Choose a service…</option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field id="f-message" label="Message" required error={errors.message}>
              <textarea
                id="f-message"
                className="he-field"
                name="message"
                rows={5}
                value={form.message}
                placeholder="What's the job, and roughly where in Christchurch?"
                aria-invalid={errors.message ? true : undefined}
                onChange={(event) => update("message", event.target.value)}
              />
            </Field>

            <div aria-live="polite">
              {sent ? (
                <div className="flex flex-col gap-1.5 border-t-2 border-ink bg-neutral-100 px-5 py-[18px] text-[15px] leading-[1.55] text-ink">
                  <strong className="text-base">Thanks, {firstName} — your details look good.</strong>
                  <span className="text-neutral-700">
                    This is a design preview, so your message hasn&apos;t been sent. To reach us today, call{" "}
                    <a href={PHONE_HREF} className="font-bold text-accent-700 hover:text-accent-600">
                      {PHONE_DISPLAY}
                    </a>{" "}
                    or email{" "}
                    <a href={EMAIL_HREF} className="font-bold text-accent-700 hover:text-accent-600">
                      {EMAIL}
                    </a>
                    .
                  </span>
                </div>
              ) : null}
            </div>

            <CtaButton type="submit" className="w-full px-[22px] py-[21px] text-[17px]">
              Send Enquiry
            </CtaButton>
          </form>
        </div>
      </Container>
    </section>
  );
}
