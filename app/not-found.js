import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">

      {/* Fun Footer Message */}
      <div className="mt-0 text-2xl">
        <p>Error 404</p>
      </div>

      {/* Hi GIF Animation */}
      <div className="my-6">
        <img 
          src="/so-good-wink.gif" 
          alt="Hi animation" 
          className="mx-auto rounded-sm shadow-lg"
          style={{ 
            maxWidth: '250px', 
            height: 'auto'
          }} 
        />
      </div>

      {/* Fun Footer Message */}
      <div className="mt-0 text-xs text-gray-500 dark:text-gray-500">
        <p>Sense of direction not found</p>
        <p className="mt-1">Did you try checking under the couch?</p>
      </div>
    </div>
  );
}