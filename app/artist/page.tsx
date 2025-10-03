'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
} from '@/components/ui/morphing-dialog'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = { duration: 0.3 }

export default function Artist() {
  return (
    <motion.main
      className="space-y-10"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <div className="flex-1">
          <p className="text-zinc-300">
            A collection of personal artistic work, separate from study and research. Choose a category below.
          </p>
        </div>
      </motion.section>

      <motion.section id="theatre" variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-5 text-xl font-semibold text-zinc-100 sm:text-2xl">Theatre</h3>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
          <li className="group rounded-2xl bg-zinc-950 p-4 ring-1 ring-zinc-800/60">
            <MorphingDialog>
              <MorphingDialogTrigger>
                <div className="relative">
                  <div className="grid w-full aspect-[210/297] place-content-center overflow-hidden rounded-md bg-zinc-900 text-xs text-zinc-500 ring-1 ring-zinc-800/60">
                    Poster Placeholder
                    <span className="sr-only">Twelfth Night — Summer 2020</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="w-full rounded-b-md bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-zinc-100 text-sm font-medium">Twelfth Night</p>
                      <p className="text-zinc-300 text-xs">2020 • Role: Your role</p>
                    </div>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="w-[min(92vw,720px)] overflow-hidden rounded-2xl bg-white p-0 dark:bg-zinc-950">
                  <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
                    <div className="relative p-4">
                      <div className="grid aspect-[210/297] w-full place-content-center overflow-hidden rounded-md bg-zinc-900 text-xs text-zinc-500 ring-1 ring-zinc-800/60">
                        Poster Placeholder
                      </div>
                    </div>
                    <div className="relative p-6">
                      <MorphingDialogTitle className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Twelfth Night</MorphingDialogTitle>
                      <MorphingDialogSubtitle className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Summer 2020 • Role: Your role</MorphingDialogSubtitle>
                      <MorphingDialogDescription className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                        Details coming soon.
                      </MorphingDialogDescription>
                      <MorphingDialogClose className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100" />
                    </div>
                  </div>
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          </li>
          <li className="group rounded-2xl bg-zinc-950 p-4 ring-1 ring-zinc-800/60">
            <MorphingDialog>
              <MorphingDialogTrigger>
                <div className="relative">
                  <div className="grid w-full aspect-[210/297] place-content-center overflow-hidden rounded-md bg-zinc-900 text-xs text-zinc-500 ring-1 ring-zinc-800/60">
                    Poster Placeholder
                    <span className="sr-only">Aristocrats’ Class Theatre — Summer 2022</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="w-full rounded-b-md bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-zinc-100 text-sm font-medium">Aristocrats’ Class Theatre</p>
                      <p className="text-zinc-300 text-xs">2022 • Role: Your role</p>
                    </div>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="w-[min(92vw,720px)] overflow-hidden rounded-2xl bg-white p-0 dark:bg-zinc-950">
                  <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
                    <div className="relative p-4">
                      <div className="grid aspect-[210/297] w-full place-content-center overflow-hidden rounded-md bg-zinc-900 text-xs text-zinc-500 ring-1 ring-zinc-800/60">
                        Poster Placeholder
                      </div>
                    </div>
                    <div className="relative p-6">
                      <MorphingDialogTitle className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Aristocrats’ Class Theatre</MorphingDialogTitle>
                      <MorphingDialogSubtitle className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Summer 2022 • Role: Your role</MorphingDialogSubtitle>
                      <MorphingDialogDescription className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                        Details coming soon.
                      </MorphingDialogDescription>
                      <MorphingDialogClose className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100" />
                    </div>
                  </div>
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          </li>
          <li className="group rounded-2xl bg-zinc-950 p-4 ring-1 ring-zinc-800/60">
            <MorphingDialog>
              <MorphingDialogTrigger>
                <div className="relative">
                  <div className="grid w-full aspect-[210/297] place-content-center overflow-hidden rounded-md bg-zinc-900 text-xs text-zinc-500 ring-1 ring-zinc-800/60">
                    Poster Placeholder
                    <span className="sr-only">Hocus Pocus — Summer 2024</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="w-full rounded-b-md bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-zinc-100 text-sm font-medium">Hocus Pocus</p>
                      <p className="text-zinc-300 text-xs">2024 • Role: Your role</p>
                    </div>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="w-[min(92vw,720px)] overflow-hidden rounded-2xl bg-white p-0 dark:bg-zinc-950">
                  <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
                    <div className="relative p-4">
                      <div className="grid aspect-[210/297] w-full place-content-center overflow-hidden rounded-md bg-zinc-900 text-xs text-zinc-500 ring-1 ring-zinc-800/60">
                        Poster Placeholder
                      </div>
                    </div>
                    <div className="relative p-6">
                      <MorphingDialogTitle className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Hocus Pocus</MorphingDialogTitle>
                      <MorphingDialogSubtitle className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Summer 2024 • Role: Your role</MorphingDialogSubtitle>
                      <MorphingDialogDescription className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                        Details coming soon.
                      </MorphingDialogDescription>
                      <MorphingDialogClose className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100" />
                    </div>
                  </div>
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          </li>
          <li className="group rounded-2xl bg-zinc-950 p-4 ring-1 ring-zinc-800/60">
            <MorphingDialog>
              <MorphingDialogTrigger>
                <div className="relative">
                  <div className="grid w-full aspect-[210/297] place-content-center overflow-hidden rounded-md bg-zinc-900 text-xs text-zinc-500 ring-1 ring-zinc-800/60">
                    Poster Placeholder
                    <span className="sr-only">Trees Die Standing — Winter 2025</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="w-full rounded-b-md bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-zinc-100 text-sm font-medium">Trees Die Standing</p>
                      <p className="text-zinc-300 text-xs">2025 • Role: Your role</p>
                    </div>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="w-[min(92vw,720px)] overflow-hidden rounded-2xl bg-white p-0 dark:bg-zinc-950">
                  <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
                    <div className="relative p-4">
                      <div className="grid aspect-[210/297] w-full place-content-center overflow-hidden rounded-md bg-zinc-900 text-xs text-zinc-500 ring-1 ring-zinc-800/60">
                        Poster Placeholder
                      </div>
                    </div>
                    <div className="relative p-6">
                      <MorphingDialogTitle className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Trees Die Standing</MorphingDialogTitle>
                      <MorphingDialogSubtitle className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Winter 2025 • Role: Your role</MorphingDialogSubtitle>
                      <MorphingDialogDescription className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                        Details coming soon.
                      </MorphingDialogDescription>
                      <MorphingDialogClose className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100" />
                    </div>
                  </div>
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          </li>
          <li className="group rounded-2xl bg-zinc-950 p-4 ring-1 ring-zinc-800/60">
            <MorphingDialog>
              <MorphingDialogTrigger>
                <div className="relative">
                  <div className="grid w-full aspect-[210/297] place-content-center overflow-hidden rounded-md bg-zinc-900 text-xs text-zinc-500 ring-1 ring-zinc-800/60">
                    Poster Placeholder
                    <span className="sr-only">Guide It or Hide It — Summer 2025</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="w-full rounded-b-md bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-zinc-100 text-sm font-medium">Guide It or Hide It</p>
                      <p className="text-zinc-300 text-xs">2025 • Role: Your role</p>
                    </div>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="w-[min(92vw,720px)] overflow-hidden rounded-2xl bg-white p-0 dark:bg-zinc-950">
                  <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
                    <div className="relative p-4">
                      <div className="grid aspect-[210/297] w-full place-content-center overflow-hidden rounded-md bg-zinc-900 text-xs text-zinc-500 ring-1 ring-zinc-800/60">
                        Poster Placeholder
                      </div>
                    </div>
                    <div className="relative p-6">
                      <MorphingDialogTitle className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Guide It or Hide It</MorphingDialogTitle>
                      <MorphingDialogSubtitle className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Summer 2025 • Role: Your role</MorphingDialogSubtitle>
                      <MorphingDialogDescription className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                        Details coming soon.
                      </MorphingDialogDescription>
                      <MorphingDialogClose className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100" />
                    </div>
                  </div>
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          </li>
        </ul>
      </motion.section>

      <motion.section id="comedy" variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-5 text-xl font-semibold text-zinc-100 sm:text-2xl">Comedy</h3>
        <div className="flex flex-col space-y-2">
          <div className="group/card relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
            <Spotlight
              className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
              size={64}
            />
            <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
              <div className="relative flex w-full flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h4 className="font-normal dark:text-zinc-100">Open Mic</h4>
                  <p className="text-zinc-500 dark:text-zinc-400">Samgakji Comedy Club</p>
                </div>
                <p className="whitespace-nowrap text-zinc-600 dark:text-zinc-400 sm:text-right">
                  Jul 2024 - Present
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      

      <motion.section id="critique" variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-5 text-xl font-semibold text-zinc-100 sm:text-2xl">Media Critique</h3>
        <ul className="space-y-4">
          <li className="rounded-2xl bg-zinc-950 p-4 ring-1 ring-zinc-800/60">
            <p className="text-zinc-300 text-sm">Coming soon.</p>
          </li>
        </ul>
      </motion.section>
    </motion.main>
  )
}


