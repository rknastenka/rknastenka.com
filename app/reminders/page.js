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
            <li className="mb-3">
               Preparing to do the thing isn't doing the thing.
 Scheduling time to do the thing isn't doing the thing.
 Making a to-do list for the thing isn't doing the thing.
 Telling people you're going to do the thing isn't doing the thing.
 Hating on yourself for not doing the thing isn't doing the thing.
 Hating on other people who have done the thing isn't doing the thing.
 Fantasizing about all of the adoration you'll receive once you do the thing isn't doing the thing.
 Reading about how to do the thing isn't doing the thing.
 Reading about how other people did the thing isn't doing the thing.
 The only thing that is doing the thing is doing the thing.
            </li>
          </ul>
          
        </div>   
{/* 
          <div className='text-gray-600 uppercase text-xs mt-10'>
              i wanna live up to my principles for which i have to repeat to myself early and often.
           </div> */}
    </div>
      );
    }
