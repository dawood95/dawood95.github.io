import {inter, playfair, inconsolata} from './fonts.js'
import Image from 'next/image'

function Section(props) {
  return (
  <div class="mt-6">
    <div class="mb-2">
      <div class={playfair.className}><p class="text-2xl font-medium text-slate-900">{props.title}</p></div>
    </div>
    <div class={inconsolata.className}>
      <p class="text-md tracking-tight">
        {props.children}
      </p>
    </div>
  </div>
  )
}

function ContactLink(props) {
  return (
  <div>
    <a class="underline underline-offset-4 decoration-2 text-md hover:decoration-amber-500" 
      href={props.href} 
      target="_blank">{props.children}</a>
  </div>
  )
}

function Timeline({year, children, padding="pb-4"}) {
  return (
    <div class="flex gap-2">
      <p class="basis-20 flex-none text-right tracking-tighter">{year}</p>
      <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
        <div class="relative z-10 w-7 h-7 flex justify-center items-center">
          <div class="w-2 h-2 rounded-full bg-gray-700"></div>
        </div>
      </div>
      <div class={padding}>{children}</div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-4">
      <div class="mb-2">
        <div className={playfair.className}>
          <p class="text-slate-800 text-5xl font-medium">Sheik Dawood</p>
        </div>
      </div>
      <div className={inconsolata.className}>
        <div class="flex flex-row gap-2">
        <ContactLink href="https://github.com/dawood95">github</ContactLink> /
        <ContactLink href="https://linkedin.com/in/dawood95">linkedin</ContactLink> /
        <ContactLink href="mailto:dawood95@gmail.com">dawood95@gmail.com</ContactLink>
        </div>
      </div>
      <Section title="Research Interests">
        <div class="font-medium">3D Computer Vision, Deep learning for drug discovery, Test time optimization, Reinforcement Learning</div>
      </Section>
      <Section title="Experience">
        <div class="max-w-3xl">
        <Timeline year="Present">
          <p class="bg-amber-400 flex-shrink">Actively seeking new role as a Research Engineer or Scientist</p>
        </Timeline>
        <Timeline year="2022 - 2024">
          <p class="font-bold leading-relaxed">Applied Scientist, Amazon Prime Video</p>
          <div class="leading-tight ">
            <p>Worked on VFX automation for <a class="button underline underline-offset-2 decoration-2 hover:decoration-amber-500" href="https://www.fastcompany.com/90772200/virtual-product-placement-streaming-video-amazon" target="_blank">Virtual Product Placement</a>. 
            My core research focus was to automate Matchmove, i.e. to recover camera trajectories and scene geometry from cinematic shots with unknown intrinsics.</p>
            <p class="pt-1">I designed and built a structure from motion pipeline to recover camera trajectory and scene geometry from challenging shots with unknown camera intrinsics. 
              By incorporating depth cues and dense keypoint tracks as priors, I achieved a <span class="font-semibold">70%</span> increase in success rate over traditional SFM approaches. In addition, I pioneered research into test-time optimization techniques leveraging learned uncertainty and motion constraints to jointly learn camera trajectories and scene radiance fields. </p>
            <p class="pt-1">Beyond research, I shipped a live virtual product placement pipeline, orchestrating three neural networks + rendering in real-time on a single GPU. Using threading and interpolation,
               I optimized the pipeline to run at <span class="font-semibold">60 fps</span> for seamless video processing.</p>
          </div>
        </Timeline>
        <Timeline year="2021 - 2022">
          <p class="font-bold leading-relaxed">Senior Research Scientist, Crowdstrike</p>
          <p class="leading-tight  pt-1">Created a BERT style foundation model for command line data to be used as the encoder for several downstream tasks such as cyber threat detection, activity classification etc.</p>
        </Timeline>
        <Timeline year="2020 - 2021">
          <p class="font-bold leading-relaxed">Machine Learning Scientist, Micron (FWDNXT team)</p>
          <p class="leading-tight  pt-1">Shipped various computer vision solutions, including wafer defect detection and water droplet detection, resulting in millions of dollars in cost savings for fabs.</p>
          <p class="leading-tight  pt-1">Developed a reinforcement learning based test time optimization method to map a compute graph to an in-house designed systolic array accelerator.</p>
        </Timeline>
        <Timeline year="2020">
          <p class="font-bold leading-relaxed">M.Sc. Computer Engineering, Purdue University</p>
          <p class="leading-tight"><span class="font-semibold">Research:</span> Conditional Compound Generation using Continuous Normalizing Flows</p>
          <p class="leading-tight"><span class="font-semibold">Advisor:</span> Dr. Gaurav Chopra</p>
          <p class="leading-tight pt-1">Developed a deep neural network to conditionally generate compounds that match the queried chemical property such as logP, TPSA, SA score.
          <a class="leading-tight pt-1 font-medium hover:text-amber-500" href="https://github.com/dawood95/compoundGAN" target="_blank"> [code]</a></p>
          <p class="leading-tight pt-2 text-sm font-semibold">Decided to discontinue my PhD program with a masters degree to pursue industry opportunities.</p>
        </Timeline>
        <Timeline year="Summer 2019">
          <p class="font-bold leading-relaxed">Machine Learning Engineering Intern, Micron (FWDNXT team)</p>
          <p class="leading-tight pt-1">
            Developed an interactive smart vehicle locking/unlocking demo featuring the FWDNXT deep learning accelerator for Micron's exhibit at the 2019 Frankfurt Auto Show. 
            Integrated face, speech and gesture recognition modules to enable a hands-free experience while highliting the accelerator's edge AI capabilities. 
            Optimized and retrained the SOTA pose detection model (openpose at the time) to run 4x faster with minimal loss in accuracy enabling real-time performance.
          </p>
          <img src="/frankfurt.gif" class="pt-1 w-56 h-auto"></img>
        </Timeline>
        <Timeline year="2017 - 2019">
          <p class="font-bold leading-relaxed">Research Engineer, FWDNXT (acquired by Micron)</p>
          <p class="leading-tight pt-1">Built efficient deep neural networks for various applications including object detection, tracking, pose estimation, face and speech recognition etc. All of these networks were designed and optimized specifically for the FWDNXT accelerator.</p>
          <p class="leading-tight pt-1">Some projects I worked on:</p>
          <div class="flex flex-row flex-wrap gap-3">
            <iframe src="https://www.youtube-nocookie.com/embed/Nh2ZAb37m3s?si=CCJ_eu1mPmvThKiN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe src="https://www.youtube-nocookie.com/embed/SnTVpfH_4l4?si=UvYfZ1EE_idbwIKh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe src="https://www.youtube-nocookie.com/embed/0Uv7V3rglTM?si=fGBzoWwfEz5b6-Iu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe src="https://www.youtube-nocookie.com/embed/YCs9L18wTUE?si=LtbeZjpDmGQskP1e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </Timeline>
        <Timeline year="2017">
          <p class="font-bold leading-relaxed">Started PhD at Purdue University</p>
          <p class="leading-tight"><span class="font-semibold">Research:</span> Computer Vision, Reinforcement Learning</p>
          <p class="leading-tight"><span class="font-semibold">Advisor:</span> Dr. Eugenio Culurciello</p>
        </Timeline>
        <Timeline year="2016 - 2017">
            <p class="font-bold leading-relaxed">Founding Engineer, Perceive Inc</p>
            <p class="leading-tight  pt-1">Startup building retail analytics for the physical world. Perceive is now an open source organization. Please visit <a class="hover:text-blue-600" href="https://prcvlabs.org/">prcvlabs.org</a> to learn more</p>
            <p class="leading-tight  pt-1">Designed and built the core video processing pipeline and computer vision algorithms to triangulate and track people inside retail stores. 
            Collected, cleaned and annotated a multiview dataset of shoppers to finetune pre-trained vision models.</p>            
        </Timeline>
        <Timeline year="Summer 2016">
            <p class="font-bold leading-relaxed">Software Development Intern, Bloomberg</p>
            <p class="leading-tight  pt-1">Shipped an anomaly detection and trade workflow recommendation feature for Bloomberg's middle office tools. Used boosted trees to predict the future state of a given trade workflow with <span class="font-semibold">95%</span> accuracy.</p>
        </Timeline>
        <Timeline year="2016">
            <p class="leading-tight font-bold leading-relaxed">BSc Computer Engineering, Purdue University</p>
        </Timeline>
        <Timeline padding="" year="Summer 2015">
            <p class="font-bold leading-relaxed">Software Development Intern, Bloomberg</p>
            <p class="leading-tight pt-1">Shipped a securities search and filter feature for Bloomberg's asset management tools.</p>
        </Timeline>
        </div>
      </Section>
      <div class="mt-6">
        <div class={playfair.className}><p class="text-2xl font-medium leading-loose">Publications & Patents</p></div>
        <div class={inconsolata.className}>
          <ul class="list-none list-inside max-w-3xl">
            <li class="py-2"> 
              <p class="text-md font-semibold tracking-tight">
                Cinematic camera trajectory recovery using dense keypoint trajectory and metric depth
              </p>
              <p class="text-sm tracking-tight">
              <span class="font-semibold">Sheik Dawood Beer Mohideen</span>, Maxim Arap
              </p>
              <a class="text-sm font-bold hover:text-amber-500" href="" target="_blank">[patent]</a>
            </li>
            <li class="py-2">
              <p class="text-md font-semibold tracking-tight">
              Learning Relationships Between Chemical and Physical Stability for Peptide Drug Development
              </p>
              <p class="text-sm tracking-tight">
              Jonathan Fine, Prageeth R Wijewardhane, <span class="font-semibold">Sheik Dawood Beer Mohideen</span>, Katelyn Smith, Jameson R Bothe, Yogita Krishnamachari, Alexandra Andrews, Yong Liu, Gaurav Chopra</p>
              <p class="text-sm tracking-tight italic">Pharmaceutical Research 2023</p>
              <a class="text-sm font-bold hover:text-amber-500" href="https://chemrxiv.org/engage/api-gateway/chemrxiv/assets/orp/resource/item/61ec92c7c18d671f5a8175d9/original/learning-relationships-between-chemical-and-physical-stability-for-drug-development.pdf" target="_blank">[chemrXiv]</a>
            </li>
            <li class="py-2">
              <p class="text-md font-semibold tracking-tight">
                Reinforcement Learning Approach for Mapping Applications to Dataflow-Based Coarse-Grained Reconfigurable Array
              </p>
              <p class="text-sm tracking-tight">
              Andre Xian Ming Chang, Parth Khopkar, Bashar Romanous, Abhishek Chaurasia, Patrick Estep, Skyler Windh, Doug Vanesko, <span class="font-semibold">Sheik Dawood Beer Mohideen</span>, Eugenio Culurciello
              </p>
              <p class="text-sm tracking-tight italic">arXiv 2022</p>
              <a class="text-sm font-bold hover:text-amber-500" href="https://arxiv.org/abs/2205.13675" target="_blank">[arXiv]</a> <a class="text-sm font-bold hover:text-amber-500" href="https://patents.google.com/patent/US20230306272A1/en" target='_blank'>[patent]</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-6">
        <div class={playfair.className}><p class="text-2xl font-medium leading-loose">Other Projects</p></div>
        <div class={inconsolata.className}>
          <ul class="pt-2 list-none list-inside divide-y-2 divide-dotted divide-slate-600 max-w-lg">
            <li class="flex flex-row flex-wrap gap-4 py-2">
              <img class="max-w-56 h-auto rounded-sm" src="/ventilator.png"></img> 
              <div class="">
                <p class="font-medium">Emergency Ventilator designed to address the shortage during COVID years. Built with Bradford Thorne and Michael Dziekan</p>
              </div>
            </li>
            <li class="flex flex-row flex-wrap gap-4 py-2">
              <img class="max-w-56 h-auto rounded-sm" src="/lane.gif"></img> 
              <div class="">
                <p class="font-medium">Lane prediction using heatmap regression. Trained on Berkley Deep Drive dataset.</p>
                <p class="text-sm font-bold hover:text-amber-500"><a href="https://github.com/dawood95/bdd-lane" target="_blank">[code]</a></p>
              </div>
            </li>
            <li class="flex flex-row flex-wrap gap-4 py-2">
              <img class="max-w-56 h-auto rounded-sm" src="/compression.gif"></img> 
              <div class="">
                <p class="font-medium">Experiments in using deep neural networks for video compression.</p>
                <p class="text-sm font-bold hover:text-amber-500"><a href="https://github.com/dawood95/video_compression" target="_blank">[code]</a></p>
              </div>
            </li>
            <li class="flex flex-row flex-wrap gap-4 py-2">
              <img class="max-w-56 h-auto rounded-sm" src="/nnlab.png"></img> 
              <div class="">
                <p class="font-medium">Tool to interactively visualize the compute and memory profile of a neural network.</p>
                <p class="text-sm font-bold"><a class="hover:text-amber-500" href="https://github.com/dawood95/nnlab" target="_blank">[code]</a> <a class="hover:text-amber-500" href="https://dawood95.github.io/nnlab" target="_blank">[try it]</a></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <footer class="mt-6 text-left">
        <div class={inconsolata.className}>
          <p class="text-sm font-medium">Last updated: 01/2024</p>
        </div>
      </footer>
    </main>
  )
}