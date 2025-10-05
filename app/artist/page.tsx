'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import Link from 'next/link'
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
            Creative work outside my academic and research projects. This page features theatre, stand-up comedy, and media critique I have participated in. Go back to the{' '}
            <Link href="/" className="underline decoration-zinc-400 underline-offset-4 hover:text-zinc-100">professional page</Link>.
          </p>
        </div>
      </motion.section>

      <motion.section id="theatre" variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-5 text-xl font-semibold text-zinc-100 sm:text-2xl">Theatre</h3>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          {/* 귀족수업 The Middle-Class Gentleman */}
          <li className="group rounded-2xl bg-zinc-950 p-4 ring-1 ring-zinc-800/60">
            <MorphingDialog>
              <MorphingDialogTrigger>
                <div className="relative">
                  <div className="relative aspect-[210/297] w-full overflow-hidden rounded-md bg-zinc-900 ring-1 ring-zinc-800/60">
                    <Image src="/artist/theatre/middle-class-gentleman/middle-class-gentleman.jpg" alt="귀족수업 The Middle-Class Gentleman poster" fill className="object-contain" sizes="(max-width: 640px) 50vw, 210px" />
                    <span className="sr-only">귀족수업 The Middle-Class Gentleman — Summer 2022</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="w-full rounded-b-md bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-sm font-medium text-zinc-100">귀족수업 The Middle-Class Gentleman</p>
                      <p className="text-xs text-zinc-300">2022 • Bit Part</p>
                    </div>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="w-[min(92vw,720px)] overflow-hidden rounded-2xl bg-white p-0 dark:bg-zinc-950">
                  <div className="grid gap-0 md:grid-cols-[1fr_1.2fr]">
                    <div className="relative p-4">
                      <div className="relative aspect-[210/297] w-full overflow-hidden rounded-md bg-zinc-900 ring-1 ring-zinc-800/60">
                        <Image src="/artist/theatre/middle-class-gentleman/middle-class-gentleman.jpg" alt="귀족수업 The Middle-Class Gentleman poster" fill className="object-contain" sizes="(max-width: 768px) 50vw, 420px" />
                      </div>
                    </div>
                    <div className="relative p-6">
                      <MorphingDialogTitle className="text-lg font-medium text-zinc-900 dark:text-zinc-100">귀족수업 The Middle-Class Gentleman</MorphingDialogTitle>
                      <MorphingDialogSubtitle className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Summer 2022 • Bit Part</MorphingDialogSubtitle>
                      <MorphingDialogDescription className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                        First production with the university theatre club. Bit part across two roles; also worked on the production crew (set construction and backstage) for Molière’s satire of social aspiration. Stage build video on <a className="underline" href="https://youtu.be/7PaDTUCjHrs?si=uCChCjV8KCL8eZMN" target="_blank" rel="noreferrer">YouTube</a>.
                        <br />
                        <span className="mt-3 block">대학 연극부에서의 첫 작품. 1인 2역의 단역으로 출연했고, 무대 제작팀(세트 제작 및 백스테이지)으로도 참여했습니다. 몰리에르의 사회적 야망 풍자극입니다. 무대 제작 영상은 <a className="underline" href="https://youtu.be/7PaDTUCjHrs?si=uCChCjV8KCL8eZMN" target="_blank" rel="noreferrer">유튜브</a>에서 볼 수 있습니다.</span>
                      </MorphingDialogDescription>
                      <MorphingDialogClose className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100" />
                    </div>
                  </div>
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          </li>

          {/* 호쿠스포쿠스 Hocuspocus */}
          <li className="group rounded-2xl bg-zinc-950 p-4 ring-1 ring-zinc-800/60">
            <MorphingDialog>
              <MorphingDialogTrigger>
                <div className="relative">
                  <div className="relative aspect-[210/297] w-full overflow-hidden rounded-md bg-zinc-900 ring-1 ring-zinc-800/60">
                    <Image src="/artist/theatre/hocuspocus/hocuspocus.jpg" alt="호쿠스포쿠스 Hocuspocus poster" fill className="object-contain" sizes="(max-width: 640px) 50vw, 210px" />
                    <span className="sr-only">호쿠스포쿠스 Hocuspocus — Summer 2024</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="w-full rounded-b-md bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-sm font-medium text-zinc-100">호쿠스포쿠스 Hocuspocus</p>
                      <p className="text-xs text-zinc-300">2024 • Lead — Graham</p>
                    </div>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="w-[min(92vw,720px)] overflow-hidden rounded-2xl bg-white p-0 dark:bg-zinc-950">
                  <div className="grid gap-0 md:grid-cols-[1fr_1.2fr]">
                    <div className="relative p-4">
                      <div className="relative aspect-[210/297] w-full overflow-hidden rounded-md bg-zinc-900 ring-1 ring-zinc-800/60">
                        <Image src="/artist/theatre/hocuspocus/hocuspocus.jpg" alt="호쿠스포쿠스 Hocuspocus poster" fill className="object-contain" sizes="(max-width: 768px) 50vw, 420px" />
                      </div>
                    </div>
                    <div className="relative p-6">
                      <MorphingDialogTitle className="text-lg font-medium text-zinc-900 dark:text-zinc-100">호쿠스포쿠스 Hocuspocus</MorphingDialogTitle>
                      <MorphingDialogSubtitle className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Summer 2024 • Lead — Graham</MorphingDialogSubtitle>
                      <MorphingDialogDescription className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                        First lead role as Graham. I carried most of the principal dialogue in Act 1 and returned as a juror in Acts 2–4. As part of the stage crew, I led sponsorship outreach and secured ₩1,500,000 (KRW) for the production.
                        <br />
                        <span className="mt-3 block">첫 주연으로 Graham 역을 맡아 1막의 주요 대사를 대부분 담당했고, 2–4막에서는 배심원으로 참여했습니다. 무대 스태프로서는 후원 유치를 담당해 150만 원을 확보했습니다.</span>
                      </MorphingDialogDescription>
                      <MorphingDialogClose className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100" />
                    </div>
                  </div>
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          </li>

          {/* 나무는 서서 죽는다 The Trees die standing */}
          <li className="group rounded-2xl bg-zinc-950 p-4 ring-1 ring-zinc-800/60">
            <MorphingDialog>
              <MorphingDialogTrigger>
                <div className="relative">
                  <div className="relative aspect-[210/297] w-full overflow-hidden rounded-md bg-zinc-900 ring-1 ring-zinc-800/60">
                    <Image src="/artist/theatre/trees-die-standing/trees-die-standing.png" alt="나무는 서서 죽는다 The Trees die standing poster" fill className="object-contain" sizes="(max-width: 640px) 50vw, 210px" />
                    <span className="sr-only">나무는 서서 죽는다 The Trees die standing — Winter 2025</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="w-full rounded-b-md bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-sm font-medium text-zinc-100">나무는 서서 죽는다 The Trees die standing</p>
                      <p className="text-xs text-zinc-300">2025 • Design Lead</p>
                    </div>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="w-[min(92vw,720px)] overflow-hidden rounded-2xl bg-white p-0 dark:bg-zinc-950">
                  <div className="grid gap-0 md:grid-cols-[1fr_1.2fr]">
                    <div className="relative p-4">
                      <div className="relative aspect-[210/297] w-full overflow-hidden rounded-md bg-zinc-900 ring-1 ring-zinc-800/60">
                        <Image src="/artist/theatre/trees-die-standing/trees-die-standing.png" alt="나무는 서서 죽는다 The Trees die standing poster" fill className="object-contain" sizes="(max-width: 768px) 50vw, 420px" />
                      </div>
                    </div>
                    <div className="relative p-6">
                      <MorphingDialogTitle className="text-lg font-medium text-zinc-900 dark:text-zinc-100">나무는 서서 죽는다 The Trees die standing</MorphingDialogTitle>
                      <MorphingDialogSubtitle className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Winter 2025 • Design Lead</MorphingDialogSubtitle>
                      <MorphingDialogDescription className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                        Performed Los árboles mueren de pie by Spanish playwright Alejandro Casona. As Design Lead, I created the poster, program pamphlet, and promotional assets for the production.
                        <br />
                        <span className="mt-3 block">스페인 극작가 알레한드로 카소나(Alejandro Casona)의 『Los árboles mueren de pie』를 공연했습니다. 디자인 총괄로서 포스터, 팜플렛, 홍보 게시물을 제작했습니다.</span>
                      </MorphingDialogDescription>
                      <MorphingDialogClose className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100" />
                    </div>
                  </div>
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          </li>

          {/* 안내놔 못내놔 Can't Pay? Won't Pay! */}
          <li className="group rounded-2xl bg-zinc-950 p-4 ring-1 ring-zinc-800/60">
            <MorphingDialog>
              <MorphingDialogTrigger>
                <div className="relative">
                  <div className="relative aspect-[210/297] w-full overflow-hidden rounded-md bg-zinc-900 ring-1 ring-zinc-800/60">
                    <Image src="/artist/theatre/cant-pay-wont-pay/cant-pay-wont-pay.png" alt="안내놔 못내놔 Can&apos;t Pay? Won&apos;t Pay! poster" fill className="object-contain" sizes="(max-width: 640px) 50vw, 210px" />
                    <span className="sr-only">안내놔 못내놔 Can&apos;t Pay? Won&apos;t Pay! — Summer 2025</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-end opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="w-full rounded-b-md bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-sm font-medium text-zinc-100">안내놔 못내놔 Can&apos;t Pay? Won&apos;t Pay!</p>
                      <p className="text-xs text-zinc-300">2025 • Design Lead</p>
                    </div>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="w-[min(92vw,720px)] overflow-hidden rounded-2xl bg-white p-0 dark:bg-zinc-950">
                  <div className="grid gap-0 md:grid-cols-[1fr_1.2fr]">
                    <div className="relative p-4">
                      <div className="relative aspect-[210/297] w-full overflow-hidden rounded-md bg-zinc-900 ring-1 ring-zinc-800/60">
                        <Image src="/artist/theatre/cant-pay-wont-pay/cant-pay-wont-pay.png" alt="안내놔 못내놔 Can&apos;t Pay? Won&apos;t Pay! poster" fill className="object-contain" sizes="(max-width: 768px) 50vw, 420px" />
                      </div>
                    </div>
                    <div className="relative p-6">
                      <MorphingDialogTitle className="text-lg font-medium text-zinc-900 dark:text-zinc-100">안내놔 못내놔 Can&apos;t Pay? Won&apos;t Pay!</MorphingDialogTitle>
                      <MorphingDialogSubtitle className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Summer 2025 • Design Lead</MorphingDialogSubtitle>
                      <MorphingDialogDescription className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
                        Performed a play by Italian playwright Dario Fo. As Design Lead, I handled the pamphlet design and also managed stage build as well as the administrative work for venue scouting and booking.
                        <br />
                        <span className="mt-3 block">이탈리아 극작가 다리오 포(Dario Fo)의 작품을 공연했습니다. 디자인 리드로서 팜플렛 디자인을 담당했고, 무대 제작과 공연장 섭외·확정 등 행정 업무를 맡았습니다.</span>
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


