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
               "Preparing to do the thing isn't doing the thing.
            Scheduling time to do the thing isn't doing the thing.
            Making a to-do list for the thing isn't doing the thing.
            Telling people you're going to do the thing isn't doing the thing.
            Hating on yourself for not doing the thing isn't doing the thing.
            Hating on other people who have done the thing isn't doing the thing.
            Fantasizing about all of the adoration you'll receive once you do the thing isn't doing the thing.
            Reading about how to do the thing isn't doing the thing.
            Reading about how other people did the thing isn't doing the thing.
            The only thing that is doing the thing is doing the thing."
            </li>
            <li className="mb-3">
          "What if laziness is nothing but a habit of thinking about the effort instead of thinking about the outcome?
          What if you could reverse laziness by simply developing a habit of thinking more about the delicious food that you'd like to enjoy
          instead of how long it would take you to get up and go get it?
          But the real question is, if you were to test this at home and try to see if you can think more about the good outcome
          and less about the work, would you get it done?
          Why is it that people have a second child?
          Why does a woman who goes through this awful, awful childbirth have a second child?
          Don't they always say the same thing?
          If I remembered how bad this was, I wouldn't do it again.
          Right?
          So the not thinking about the effort is vital to actually the survival of humanity.
          If we focused on how hard it was to have a baby, you just wouldn't do it.
          Or you do too little of it.
          But if you focus on how awesome it would be to have a family, well, there you go."
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
