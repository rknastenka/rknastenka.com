import LinkPreview from '@/components/LinkPreview';

export default function Reminders() {

  return (
    <div className=" leading-[#1.8] tracking-wide text-xs lg:text-[1rem]" >

        {/* Things to be reminded of */}
        <div className=" mb-10" >
          <div className='mb-1 text-[0.9rem] lg:text-[1.2rem] font-bold underline'>
            Things I want to be reminded of:
          </div>

          <ul className="lg:text-sm mb-3 list-disc pl-5">
            <li className="mb-3">
              When you feel unmotivated, don't stop to rest and wait for energy to return.
              Instead, read articles, review your notes, or watch inspiring videos.
              These small actions can reignite your motivation and help you get back on track.
            </li>
            <li className="mb-3">
              The brain gets more dopamine from planning than doing. That's why people have multiple ideas but zero implementations.
            </li>
            <li className="mb-3">
              Notice what you link pleasure to, Notice what you link pain to.
            </li>
            <li className="mb-3">
              Goals are for people who care about winning once. Systems are for people who care about winning repeatedly.
            </li>
            <li className="mb-3">
              Excellence doesn't come naturally, it is built through practice.
            </li>
          </ul>
          
        </div>   

          <div className='text-gray-600 uppercase text-xs mt-10'>
              i wanna live up to my principles for which i have to repeat to myself early and often.
           </div>
    </div>
      );
    }
