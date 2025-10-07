
export const metadata = {
  title: "Home - Personal Blog & Thoughts",
  description: "Welcome to Nastenka's personal blog. Discover unscripted thoughts and perceptions about life, self-understanding, and random topics. A space for authentic introspective writing.",
  openGraph: {
    title: "Nastenka - Personal Blog & Thoughts",
    description: "Welcome to Nastenka's personal blog. Discover unscripted thoughts and perceptions about life, self-understanding, and random topics.",
    images: ['/website-preview.png'],
  },
};

export default function Home() {
  return (
          <div className=" leading-[#1.8] tracking-wide text-xs lg:text-[1rem]">

                <p className="font-bold ">
                        Hey, welcome to my blog. Here you'll see a bunch of unscripted perceptions of mine,
                        i mostly post my thoughts and notions about different random topics
                        as i'm free as my thoughts allow me to be. get your cup of tea and enjoy reading
                        dear passenger.
                </p>


                <br/>

                <br/>

                <p >
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
                </p>

                

                
                <br/>
                <br/>


        {/* <div>
                <h4 className="text-[1rem] lg:text-lg font-bold"> Some Quotes I like</h4>
                <ul className="font-serif text-[0.7rem] lg:text-[1rem] list-disc list-inside mt-2 space-y-1">
                    <li>"The only way to do great work is to love what you do."</li>
                    <li>"In the end, we only regret the chances we didn't take."</li>
                    <li>"if you wanna be the best, you have to work more than anyone else."</li>
                </ul>
        </div> */}



                {/*
                <div style={{
                    fontStyle: 'italic',
                    color: 'rgba(113,108,108,0.79)',
                    lineHeight: 1.5,
                    fontFamily: 'Constantia, monospace',
                }}
                >

                    <p className="text-[0.7rem] lg:text-[0.9rem] ">
                        "I can never read all the books I want; I can never be all the
                        people I want and live all the lives I want. I can never train
                        myself in all the skills I want. And why do I want? I want to
                        live and feel all the shades, tones and variations of mental
                        and physical experience possible in my life. And I am horribly limited."
                    </p>


                    <p className="text-[10px] lg:text-[12px] p-2">
                        <b> — Sylvia Plath, <cite>The Unabridged Journals of Sylvia Plath</cite>
                        </b></p>
                </div> */}

                

               <p>
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
            </p>

<p className="mt-10 mb-10" >
  <h5 className='mb-1 text-[0.8rem] lg:text-[1.2rem] font-bold'>Knowledge Base: </h5>
 
  <div >
   - [x] CLI
   <br/>
   - [x] Git & GitHub
   <br/>
   - [x] Nextjs
    <br/>
   - [ ] Objective C
   <br/>
   - [ ] Verilog
   <br/>
   - [ ] FBGA
   <br/>
   - [ ] React
   <br/>
   - [ ] Raspberry pi
   <br/>
   - [ ] Assembly
   <br/>
   - [ ] Virtual Machine
   <br/>
   - [ ] LLMS
   <br/>
   - [ ] JavaScript
    <br/>
   - [ ] Intermediate JavaScript
   <br/>
    - [x][ ][ ] Python
   <br/>
   - [x][ ][ ] C++
   <br/>
  </div>

</p>

                 
                        <p className='text-gray-600'>
                        All articles and notes shared here reflect my personal thoughts, 
                        experiences, and perspectives. They represent only my own opinions
                         and should not be taken as statements on behalf of any group, organization, or broader viewpoint.
                        </p>

          </div>
  );
}
