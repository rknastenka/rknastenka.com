import LinkPreview from '@/components/LinkPreview';

export default function Glossary() {

  return (
    <div className="text-xs lg:text-[1rem]" >

        {/* Knowledge Base */}
        <div>
          <div className='mb-1 text-[0.9rem] lg:text-[1.2rem] font-bold underline'>Knowledge Base: </div>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
            <div className="space-y-1">
              <div>[x] CLI & Bash</div>
              <div>[x] Git & GitHub</div>
              <div>[x] Data Analysis</div>
              <div>[x] HTML & CSS</div>
              <div>[x] Javascript & Typescript</div>
              <div>[x] React</div>
              <div>[x] Nextjs</div>
              <div>[ ] Raspberry Pi</div>
              <div>[ ] Research</div>
              <div>[x] Verilog</div>
            </div>
            <div className="space-y-1">
              <div>[ ] Assembly</div>
              <div>[ ] Reverse Engineering</div>
              <div>[ ] Cryptography</div>
              <div>[ ] Machine Learning</div>
              <div>[ ] Quantum Computing</div>
              <div>[ ] LLMS</div>
              <div>[ ] Objective C</div>
              <div>[x][x][ ] Python</div>
              <div>[x][x][ ] C++</div>
            </div>
          </div>

         {/* Hardware Resources */}
        <div className="mt-10 mb-10">
           <div className='mb-1 text-[0.9rem] lg:text-[1.2rem] font-bold underline'>
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

            <LinkPreview
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
            />
            
          </div>
        </div>


        </div> 
        
    </div>
      );
    }
