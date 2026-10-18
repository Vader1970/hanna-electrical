"use client";

import { Container } from "@/components/container";
import { Kicker } from "@/components/kicker";
import { PagerButton } from "@/components/pager-button";
import { REVIEWS, pad2 } from "@/lib/content";
import { useSnapScroller } from "@/lib/use-snap-scroller";

export function Reviews() {
  const { ref, state, scrollToIndex } = useSnapScroller();
  const display = state.end ? REVIEWS.length - 1 : state.i;

  return (
    <section id="reviews" className="bg-white py-[clamp(72px,10vw,160px)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-7">
          <div data-reveal="" className="min-w-0 flex-[1_1_520px]">
            <Kicker>Kind Words</Kicker>
            <h2 className="m-[20px_0_0_-0.05em] text-[clamp(38px,5.8vw,88px)] leading-[0.97] font-extrabold tracking-[-0.035em] text-balance">
              What Our Customers Say.
            </h2>
          </div>
          <div data-reveal="" data-delay="100" className="flex max-w-[420px] flex-[0_1_420px] flex-col gap-6">
            <p className="m-0 text-[17px] leading-[1.65] text-neutral-700 text-pretty">
              Most of our work comes through word of mouth. Here&apos;s what some of our customers have said.
            </p>
            <div className="flex items-center gap-3">
              <span className="mr-auto text-[15px] font-extrabold tabular-nums">
                {pad2(display + 1)} / {pad2(REVIEWS.length)}
              </span>
              <PagerButton
                direction="prev"
                tone="prev-dark"
                label="Previous review"
                disabled={state.start}
                onClick={() => scrollToIndex(state.i - 1)}
              />
              <PagerButton
                direction="next"
                tone="next"
                label="Next review"
                disabled={state.end}
                onClick={() => scrollToIndex(state.i + 1)}
              />
            </div>
          </div>
        </div>

        <div ref={ref} className="he-reviews mt-[clamp(32px,4vw,56px)]">
          {REVIEWS.map((review) => (
            <figure
              key={review.n}
              className="he-review m-0 flex min-h-[clamp(360px,32vw,460px)] flex-col gap-8 border-t-4 border-accent bg-neutral-100 p-[clamp(28px,4vw,56px)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13px] font-extrabold tracking-[0.12em] uppercase">{review.n}</span>
              </div>
              <blockquote className="m-0 max-w-[28ch] text-[clamp(22px,2.1vw,31px)] leading-[1.32] font-semibold tracking-[-0.015em] text-neutral-700 text-pretty">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4 border-t-2 border-divider pt-[22px]">
                <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden bg-transparent text-[15px] font-extrabold text-white">
                  {review.image ? (
                    <img src={review.image} alt="" className="size-full object-cover" />
                  ) : (
                    review.initials
                  )}
                </span>
                <div className="min-w-0 text-sm leading-[1.45] text-neutral-700">
                  <div className="text-base font-extrabold text-ink">{review.name}</div>
                  {review.date}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
