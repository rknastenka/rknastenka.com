import LinkPreview from '@/components/LinkPreview';

export const metadata = {
  title: "rknastenka",
  description: "Welcome to Nastenka's personal blog. Discover unscripted thoughts and perceptions about life, self-understanding, and random topics. A space for authentic introspective writing.",
  openGraph: {
    title: "Nastenka",
    description: "Welcome to Nastenka's personal blog. Discover unscripted thoughts and perceptions about life, self-understanding, and random topics.",
    images: ['/website-preview.png'],
  },
};

export default function Home() {

  return (
          <div className=" leading-[#1.8] tracking-wide text-xs lg:text-[1rem]" >

                <div className="font-bold mb-10">
                        Hey, welcome to my blog. Here you'll see a bunch of unscripted perceptions of mine,
                        i mostly post my thoughts and notions about different random topics
                        as i'm free as my thoughts allow me to be. get your cup of tea and enjoy reading
                        dear passenger.
                </div>

                <div className="mt-10 mb-10">
                  i'm bana, mostly known as nastenka or ini, choose the one that lingers with you.
                  this is supposed to be an about me section,
                  but I’d rather not write the ordinary script.
                  go through my notes, read my articles,
                  and decide for your own what kind of a soul you think i am.
                </div>


                <div className="mt-10 mb-10">
                    it's more about the time you spend understanding yourself
                    to get where you somehow specify your next step,
                    and you're barking the wrong tree if you believe it's social media
                    that's holding you back. when in fact, it's just you. during the past weeks,
                    the truth had dawned on me. i now avow the verity that has
                    always lain between my lines of complaint. we've all been in a lifelong run,
                    chasing answers and seeking to get somewhere we're not in. trying to do
                    everything whilst indeed doing nothing. yet i can't affirm my purpose,
                    but i somehow acknowledge my intents. hence, beyond my belief, which i may or may not achieve,
                    i wish to perceive more about the sky and moon and what's in between.
                </div>


               {/** Projects Section */}
               {/* <div className="mt-10 mb-10">
                a brief explanation about my <a href="/projects" className="text-[var(--aColor)] hover:underline">projects</a>
                &nbsp;and the way i make them,
                i've had this problem forever, and if you're reading this
                and facing the same matter, please just read these lines.
                originality doesn't mean first, to be original you just have to be yourself
                find a problem you face and solve it, there's always gonna be someone who thought about the same
                solution 8 years ago, so don't let that let you down
                just do what you love, do it the second you think about it
                do not let your ideas drown over time
                trust me, we all have brains; you're not the only smartie
                with great ideas in the room, even that person you believe is
                an absolute retard has some ideas in his head.
                what really matters is action! like bro fuck your ideas
                show me some results, show me what you did, show me how you
                implement it. publish your MVP, get some feedback,
                as mark zuckerberg once said: "ideas don't come fully formed, they become clear as you work on
                them." so
                stop making excuses for yourself. just stop waiting for
                the right time, right place, right UI/UX or whatever.
                just start…
                that's all i can say.
                just start.
               </div> */}


          <div className="mt-5  lg:text-sm">
          Knowledge Base below is a collection of various
          topics and technologies that I know little to moderately
          about but eager to learn more, and ace throughout the rest of college.
          </div>

        {/* Knowledge Base */}
        <div className="mt-5 mb-10" >
          <div className='mb-1 text-[0.9rem] lg:text-[1.2rem] font-bold underline'>Knowledge Base: </div>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
            <div>
              - [x] CLI & Bash
              <br/>
              - [x] Git & GitHub
              <br/>
              - [x] Data Analysis
              <br/>
              - [x] HTML & CSS
              <br/>
              - [x] Javascript & Typescript
              <br/>
              - [x] React
              <br/>
              - [x] Nextjs
              <br/>
              - [ ] Raspberry Pi
              <br/>
              - [ ] Research
              <br/>
              - [x] Verilog
              <br/>
              - [ ] FPGA
            </div>
            <div>
              - [ ] Assembly
              <br/>
              - [ ] Reverse Engineering
              <br/>
              - [ ] Cryptography
              <br/>
              - [ ] Machine Learning
              <br/>
              - [ ] Quantum Computing
              <br/>
              - [ ] LLMS
              <br/>
              - [ ] Objective C
              <br/>
              - [x][x][ ] Python
              <br/>
              - [x][x][ ] C++
              <br/>
            </div>
          </div>
        </div>


        {/* Things to be reminded of */}
        <div className="mt-10 mb-10" >
          <div className='mb-1 text-[0.9rem] lg:text-[1.2rem] font-bold underline'>
            Things I want to be reminded of:
          </div>

          <div className="lg:text-sm mb-3">
        - When you feel unmotivated, don’t stop to rest and wait for energy to return.
        Instead, read articles, review your notes, or watch inspiring videos.
        These small actions can reignite your motivation and help you get back on track.
          </div>
         <div className="lg:text-sm mb-3">
          -The brain gets more dopamine from planning than doing. That's why people have multiple ideas but zero implementations. 
          </div>
         <div className="lg:text-sm mb-3">
          -Notice what you link pleasure to, Notice what you link pain to.
          </div>
          
          <div className="lg:text-sm mb-3">
          -Goals are for people who care about winning once. Systems are for people who care about winning repeatedly.
          </div>

          <div className="lg:text-sm mb-3">
          -Excellence doesn't come naturally, it is built through practice.
          </div>

        </div>    
        

        {/* Hardware Resources */}
        <div className="mt-10 mb-10">
          <div className='mb-4 text-[0.9rem] lg:text-[1.2rem] font-bold'>
            very interesting resources {':)'}
          </div>
          
          <div className="space-y-1">
            <LinkPreview
              url="https://www.allaboutcircuits.com/projects/"
              siteName="All About Circuits"
              linkText="Everything regarding electronics"
              icon="https://www.google.com/s2/favicons?domain=allaboutcircuits.com&sz=128"
            />
            
            <LinkPreview
              url="https://googleprojectzero.blogspot.com/2019/02/examining-pointer-authentication-on.html"
              siteName="Google Project Zero"
              linkText="Pointer Authentication on the iPhone XS"
              icon="https://www.google.com/s2/favicons?domain=googleprojectzero.blogspot.com&sz=128"
            />
            
            <LinkPreview
              url="https://www.jmeiners.com/lc3-vm/"
              siteName="jmeiners.com"
              linkText="Write your Own Virtual Machine"
              icon="https://www.google.com/s2/favicons?domain=jmeiners.com&sz=128"
            />
            
            <LinkPreview
              url="https://quest-lab.cs.wisc.edu/guides/index.html"
              siteName="Quest Lab"
              linkText="Computer Systems Guides"
              icon="https://www.google.com/s2/favicons?domain=quest-lab.cs.wisc.edu&sz=128"
            />
            
            <LinkPreview
              url="https://en.algorithmica.org/hpc/"
              siteName="Algorithmica"
              linkText="Algorithms for Modern Hardware"
              icon="https://www.google.com/s2/favicons?domain=algorithmica.org&sz=128"
            />
            
            <LinkPreview
              url="https://p.ost2.fyi/courses"
              siteName="OST2"
              linkText="Computer Architecture & Malware Analysis"
              icon="https://www.google.com/s2/favicons?domain=ost2.fyi&sz=128"
            />
            
            <LinkPreview
              url="https://mikeash.com/pyblog/friday-qa-2017-06-30-dissecting-objc_msgsend-on-arm64.html"
              siteName="mikeash.com"
              linkText="Dissecting objc_msgSend on ARM64"
              icon="https://www.google.com/s2/favicons?domain=mikeash.com&sz=128"
            />
            
            <LinkPreview
              url="https://www.makingsoftware.com/chapters/color-spaces-models-and-gamuts"
              siteName="Making Software"
              linkText="Such a masterpiece..."
              icon="https://www.google.com/s2/favicons?domain=makingsoftware.com&sz=128"
            />
            
            <LinkPreview
              url="https://ml-site.cdn-apple.com/papers/the-illusion-of-thinking.pdf"
              siteName="Apple ML Site"
              linkText="The Illusion of Thinking (PDF)"
              icon="https://www.google.com/s2/favicons?domain=apple.com&sz=128"
            />

            {/* <LinkPreview
              url="https://tams.informatik.uni-hamburg.de/applets/hades/webdemos/40-memories/20-rom/demo-ROM1Kx8.html"
              siteName="Hamburg TAMS"
              linkText="ROM Memory Demo - HADES"
              icon="https://www.google.com/s2/favicons?domain=tams.informatik.uni-hamburg.de&sz=128"
            />
            
            <LinkPreview
              url="https://hdlbits.01xz.net/wiki/Problem_sets#Combinational_Logic"
              siteName="HDLBits"
              linkText="Verilog Practice Problems"
              icon="https://www.google.com/s2/favicons?domain=hdlbits.01xz.net&sz=128"
            /> */}
            
          </div>
        </div>


        {/* Disclaimer
            <div className='text-gray-600'>
                All articles and notes shared here reflect my personal thoughts, 
              experiences, and perspectives. They represent only my own opinions
                and should not be taken as statements on behalf of any group, organization, or broader viewpoint.
            </div> */}


          <div className='text-gray-600 uppercase text-xs mt-10'>
            my website needs lots and lots of updates, bear with me :0
           </div>
    </div>
      );
    }
